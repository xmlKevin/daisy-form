import toArray from '@daisy-form/utils/lib/toarray';
import getSlot from '@daisy-form/utils/lib/slot';
import './style.css';
import {defineComponent} from 'vue';
import IconUpload from './IconUpload.vue';

function parseFile(file, i) {
    return {
        url: file,
        name: getFileName(file),
        uid: i
    };
}

function getFileName(file) {
    return ('' + file).split('/').pop()
}

const NAME = 'fcUpload';

export default defineComponent({
    name: NAME,
    inheritAttrs: false,
    formCreateParser: {
        toFormValue(value) {
            return toArray(value);
        },
        toValue(formValue, ctx) {
            return ctx.prop.props.limit === 1 ? (formValue[0] || '') : formValue;
        }
    },
    props: {
        previewMask: undefined,
        onPreview: Function,
        modalTitle: String,
        modelValue: [Array, String]
    },
    emits: ['update:modelValue', 'change', 'remove'],
    data() {
        return {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    },
    created() {
        this.fileList = toArray(this.modelValue).map(parseFile);
    },
    watch: {
        modelValue(n) {
            this.fileList = toArray(n).map(parseFile);
        }
    },
    methods: {
        handlePreview(file) {
            if (this.onPreview) {
                this.onPreview(...arguments);
            } else {
                this.previewImage = file.url;
                this.previewVisible = true;
            }
        },
        update(fileList) {
            let files = fileList.map((file) => file.url).filter((url) => url !== undefined);
            this.$emit('update:modelValue', files);
        },
        handleCancel() {
            this.previewVisible = false;
        },
        handleChange(file, fileList) {
            this.$emit('change', ...arguments);
            if (file.status === 'success') {
                this.update(fileList);
            }
        },
        handleRemove(file, fileList) {
            this.$emit('remove', ...arguments);
            this.update(fileList);
        }
    },
    render() {
        const len = toArray(this.modelValue).length;
        return (
            <><ElUpload key={len} list-type="picture-card" {...this.$attrs}
                class={{'_fc-exceed': this.$attrs.limit ? this.$attrs.limit <= len : false}}
                onPreview={this.handlePreview} onChange={this.handleChange}
                onRemove={this.handleRemove}
                fileList={this.fileList}
                v-slots={getSlot(this.$slots, ['default'])}>
                {(this.$slots.default?.() ||
                    <ElIcon>
                        <IconUpload/>
                    </ElIcon>
                )}
            </ElUpload>
            <ElDialog appendToBody={true} modal={this.previewMask} title={this.modalTitle}
                modelValue={this.previewVisible}
                onClose={this.handleCancel}>
                <img style="width: 100%" src={this.previewImage}/>
            </ElDialog>
            </>);
    }
})
