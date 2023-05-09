import {hasProperty} from '@daisy-form/utils/lib/type';

export default {
    name: 'select',
    mergeProp(ctx) {
        const props = ctx.prop.props;
        if (!hasProperty(props, 'options'))
            props.options = ctx.prop.options || [];
    }

}
