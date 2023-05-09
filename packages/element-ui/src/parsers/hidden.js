import {creatorFactory} from '@daisy-form/core/src/index';

const name = 'hidden';
export default {
    name,
    maker: {
        [name]: (field, value) => creatorFactory(name)('', field, value)
    },
    render() {
        return [];
    }
}
