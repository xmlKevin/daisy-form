//使用 json对象 规则生成表单.!!json 不支持函数和正则
export default function jsonMock() {


    //以下是组件的生成规则及参数默认值

    return [

        //hidden 组件
        {
            type: "hidden",
            field: "id",
            value: "1"
        },


        //cascader 多级联动组件
        {
            type: "cascader",
            title: "所在区域",
            field: "address",
            value: 'datunli',
            props:{
                options: []
            },
            effect: {
                address: 1
            }
        },

        //input 输入框组件
        {
            type: "input",
            title: "商品名称",
            field: "goods_name",
            value: "iphone",
            props: {
                "type": "search", //输入框类型，text，textarea 和search
            },
            on: {
                change(val) {
                    console.log(val);
                }
            },
            validate: [
                {required: true, message: '请输入商品名称', trigger: 'blur'}
            ],
            children: [],
        },

        //input 输入框组件
        {
            type: "input",
            title: "商品简介",
            field: "goods_info",
            value: "1231231",
            props: {
                type: "textarea", //输入框类型，text，textarea 和其他 原生 input 的 type 值
                maxLength: 100,
                showWordLimit: true
            },
        },


        //autoComplete 自动选择组件
        {
            type: "autoComplete",
            title: "自动完成",
            field: "auto",
            value: "xmlKevin",
            inject: true,
            props: {
                data: [],
                placeholder: '请输入'
            },
            on: {
                search: function (inject, value) {
                    inject.self.props.data = !value ? [] : [value, value + value, value + value + value];
                }
            }
        },

        {
            type: 'object',
            title: '对象组件',
            field: 'object',
            value: {date: '2121-12-12', field: 10, field2: '123123123'},
            props: {
                rule: [
                    {
                        type: 'row',
                        wrap: {show: true},
                        children: [
                            {
                                type: 'datePicker',
                                field: 'date',
                                title: 'date',
                                col: {
                                    span: 12
                                }
                            },
                            {
                                type: 'inputNumber',
                                field: 'field',
                                title: 'field',
                                props: {
                                    disabled: false
                                },
                                validate: [
                                    {required: true, min: 10, type: 'number'}
                                ],
                                col: {
                                    span: 12
                                }
                            }
                        ]

                    },
                    {
                        type: 'input',
                        field: 'field2',
                        title: 'field2',
                        props: {
                            disabled: false
                        },
                        validate: [
                            {required: true}
                        ]
                    }
                ]
            }
        },

        {
            type: 'group',
            title: '批量添加',
            field: 'group',
            value: [{date: '2121-12-12', field: 10, field2: '123123123'}],
            suffix: 'suffixsuffix',
            props: {
                // field: 'field',
                rule: [
                    {
                        type: 'col',
                        wrap: {show: true},
                        children: [
                            {
                                type: 'DatePicker',
                                field: 'date',
                                title: 'date',
                                native: false,
                                // col: {span: 12}
                            },
                            {
                                type: 'inputNumber',
                                field: 'field',
                                title: 'field',
                                props: {
                                    disabled: false
                                },
                                validate: [
                                    {required: true, min: 10, type: 'number'}
                                ],
                                // col: {
                                //     span: 12
                                // }
                            }
                        ]

                    },
                    {
                        type: 'input',
                        field: 'field2',
                        title: 'field2',
                        props: {
                            disabled: false
                        },
                        validate: [
                            {required: true}
                        ]
                    }
                ]
            },
            validate: [
                {required: true, min: 3, type: 'array', message: '最少增加3项', trigger: 'change'},
            ]
        },


            //radio 单选框组件
        {
            type: "radio",
            title: "是否包邮",
            field: "is_postage",
            value: "0",
            options: [
                {value: "0", label: "不包邮", disabled: false},
                {value: "1", label: "包邮", disabled: false},
                {value: "2", label: "未知", disabled: true},
            ],
            props: {
                "disabled": false,
            }
        },


        //checkbox 复选框付选择
        {
            type: "checkbox",
            title: "标签",
            field: "label",
            value: [
                "1", "2", "3"
            ],
            options: [
                {value: "1", label: "好用", disabled: true},
                {value: "2", label: "方便", disabled: false},
                {value: "3", label: "实用", disabled: false},
                {value: "4", label: "有效", disabled: false},
            ],
            props: {}
        },


        //switch 开关组件
        {
            type: "switch",
            title: "是否上架",
            field: "is_show",
            value: false,
            props: {}
        },


        // select 下拉选择组件
        {
            type: "select",
            field: "cate_id",
            title: "产品分类",
            value: ["104", "105"],
            props: {
                multiple: true
            },
            options: [
                {"value": "104", "label": "生态蔬菜", "disabled": false},
                {"value": "105", "label": "新鲜水果105", "disabled": false},
                {"value": "106", "label": "新鲜水果106", "disabled": false},
                {"value": "107", "label": "新鲜水果107", "disabled": false},
                {"value": "108", "label": "新鲜水果108", "disabled": false},
            ]
        },


        //datePicker 日期选择组件
        {
            type: "datePicker",
            field: "section_day",
            title: "活动日期",
            value: null,
            props: {
                mode: 'date',
                showTime: true
            }
        },


        //timePicker 时间选择组件
        {
            type: "timePicker",
            field: "section_time",
            title: "活动时间",
            value: '12:08:23',
            props: {
                type: 'time-range',
                // format: 'HH:mm:ss'
            }
        },


        //inputNumber 数组输入框组件
        {
            type: 'inputNumber',
            field: 'sort',
            title: '排序',
            value: 0,
            props: {
                mode: 'button',
                step: 0.1, //计数器步长,
                precision: 2, //数值精度
            }
        },


        //rate 评分组件
        {
            type: "rate",
            field: "rate",
            title: "推荐级别",
            value: 3.5,
            props: {
                count: 10, //最大分值
                allowHalf: true
            }
        },


        //slider 滑块组件
        {
            type: "slider",
            field: "slider",
            title: "滑块",
            value: [10, 50],
            props: {
                step: 10,
                min: 0, //最小值
                max: 100, //最大值
                range: true, //是否为范围选择
            }
        },

        {
            type: 'wangEditor',
            field: 'txt',
            title: '富文本框',
            value: '<h1 style="color: #419bf7;">daisy-form</h1><a href="https://github.com/xmlKevin/daisy-form">GitHub</a>'
        },

        //upload 上传组件
        {
            type: "upload",
            field: "pic",
            title: "轮播图",
            value: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'], //input值
            props: {
                listType: "picture-card",
                action: 'http://192.168.10.10:8324/api/test',//"https://run.mocky.io/v3/e49207f6-4ea4-488a-81ab-01f264fccf63",
                showUploadList: true,
                onSuccess: function (file) {
                    console.log(file);
                    file.url = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
                }
            }
        },


        //frame 框架组件
        {
            type: "frame",
            title: "素材",
            field: "fodder",
            value: ["http://file.lotkk.com/daisy-form.jpeg"],
            props: {
                type: "image", //frame类型,有input,file,image
                src: "../iframe.html", //iframe地址
                maxLength: 2, //value的最大数量
                title: "请选择", //弹出框标题
            },
        },

        {
            type: 'tree',
            title: '权限',
            field: "tree",
            value: [12, 13, 14],
            props: {
                data: [
                    {
                        title: 'parent 1',
                        id: 1,
                        children: [
                            {
                                title: 'parent 1-1',
                                id: 2,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        id: 11
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        id: 12
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                id: 3,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        id: 13,
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        id: 14,
                                    }
                                ]
                            }
                        ]
                    }
                ],//展示数据
            }
        }
    ]

}
