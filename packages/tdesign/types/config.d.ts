import {FormData, VNodeRule} from "@daisy-form/core";
import {ButtonProps, ColProps, RowProps, TooltipProps, PopupProps, FormItemProps, FormProps} from "tdesign-vue-next";
import {Api} from "./index";

export interface OptionAttrs {
    col?: Boolean | ColProps & {
        labelWidth?: number | string;
        show?: Boolean;
    };
    row?: Boolean | RowProps & {
        show?: Boolean;
    };
    info?: Boolean | VNodeRule & (TooltipProps | PopupProps) & {
        show?: Boolean;
        native?: Boolean;
        icon?: string;
        align?: 'left' | 'right';
        info?: string;
    };
    wrap?: Boolean | VNodeRule & FormItemProps & {
        show?: Boolean;
    };
    form?: FormProps & {
        className?: any;
        col?: Boolean;
    };

    submitBtn?: Boolean | ButtonProps & {
        click?: Function;
        innerText?: string;
        show?: Boolean;
    };

    resetBtn?: Boolean | ButtonProps & {
        click?: Function;
        innerText?: string;
        show?: Boolean;
    };

}

declare const optionAttrs: OptionAttrs & {
    title?: Boolean | VNodeRule & {
        show?: Boolean;
        native?: Boolean;
        title: string;
    };
};

export interface CreatorAttrs {
    col(props: typeof optionAttrs.col): this;

    wrap(props: typeof optionAttrs.wrap): this;

    title(props: string | typeof optionAttrs.title): this;

    info(props: string | typeof optionAttrs.info): this;

    className(prop: string): this;

}

export interface RuleAttrs {
    col?: typeof optionAttrs.col;
    wrap?: typeof optionAttrs.wrap;
    title?: string | typeof optionAttrs.title;
    info?: string | typeof optionAttrs.info;
    className?: string;
}

export interface ApiAttrs {
    btn: {
        loading(loading: boolean): void;
        disabled(disabled: boolean): void;
        show(show: boolean): void;
    }
    resetBtn: {
        loading(loading: boolean): void;
        disabled(disabled: boolean): void;
        show(show: boolean): void;
    }

    submit(success: (formData: FormData, $f: Api) => void, fail: ($f: Api) => void): Promise<any>;

    clearValidateState(fields?: string | string[], clearSub?: Boolean): void;

    clearSubValidateState(fields?: string | string[]): void;

    validate(callback?: Function): Promise<any>;

    validateField(field: string, callback?: Function): Promise<any>;

    submitBtnProps(props: ButtonProps): void;

    resetBtnProps(props: ButtonProps): void;

}
