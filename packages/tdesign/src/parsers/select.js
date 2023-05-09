import toArray from '@daisy-form/utils/lib/toarray';
import checkbox from './checkbox';

const name = 'select';

export default {
    ...checkbox,
    name,
    toFormValue(value, ctx) {
        if (ctx.prop.props.multiple && !Array.isArray(value)) {
            return toArray(value)
        } else {
            return value;
        }
    }

}
