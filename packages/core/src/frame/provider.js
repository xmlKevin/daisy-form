import {err} from '@daisy-form/utils/lib/console';
import {invoke} from './util';
import is from '@daisy-form/utils/lib/type';
import deepSet from '@daisy-form/utils/lib/deepset';


const fetch = function (fc) {

    function parseOpt(option) {
        if (is.String(option)) {
            option = {
                action: option,
                to: 'options'
            }
        }
        return option;
    }

    function run(inject, rule, api) {
        let option = inject.value;
        if (is.Function(option)) {
            option = option(rule, api);
        }
        option = parseOpt(option);
        if (!option || !option.action) {
            return false;
        }
        if (!option.to) {
            option.to = 'options';
        }
        const onError = option.onError;

        const check = () => {
            if (!inject.getValue()) {
                inject.clearProp();
                api.sync(rule);
                return true;
            }
        }

        const set = (val) => {
            if (val === undefined) {
                inject.clearProp();
                api.sync(rule);
            } else {
                deepSet(inject.getProp(), option.to, val);
            }
        }

        invoke(() => fc.create.fetch({
            ...option,
            onSuccess(body) {
                if (check()) return;
                let fn = (v) => v.data;
                if (is.Function(option.parse)) {
                    fn = option.parse;
                }
                set(fn(body, rule, api))
                api.sync(rule);
            },
            onError(e) {
                set(undefined)
                if (check()) return;
                (onError || ((e) => err(e.message || 'fetch fail ' + option.action)))(e, rule, api);
            }
        }, {inject, rule, api}));

        return true;
    }

    return {
        name: 'fetch',
        loaded(...args) {
            run(...args);
        },
        watch(inject, rule, api) {
            if (!run(inject, rule, api)) {
                inject.clearProp();
                api.sync(rule);
            }
        }
    };
}


export default {
    fetch,
};
