import {CreatorHelper} from "@daisy-form/core";
import {ApiAttrs, CreatorAttrs, OptionAttrs, RuleAttrs} from "./config";

declare const makerFactory: CreatorHelper<OptionAttrs, CreatorAttrs, RuleAttrs, ApiAttrs>

declare enum MakerName {
    "inputTag", "tag", "checkbox", "datePicker", "dateRange", "datetimeRange", "quarter", "date", "month", "week", "hidden", "input", "idate", "password", "url", "email", "text", "textarea", "search", "timePicker", "tree", "radio", "select", "upload", "frame", "autoComplete", "cascader", "inputNumber", "rate", "switch", "slider", "auto", "number", "time", "sliderRange", "frameInputs", "frameFiles", "frameImages", "frameInputOne", "frameFileOne", "frameImageOne", "frameInput", "frameFile", "frameImage", "image", "file", "uploadFileOne", "uploadImageOne", "uploadImage", "uploadFile", "selectMultiple"
}

type Maker = {
    [name in keyof typeof MakerName]: typeof makerFactory;
}

export default Maker;
