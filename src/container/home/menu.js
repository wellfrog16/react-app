const menus = [
    {
        title: '练习',
        icon: 'bars',
        key: '/home/practice',
        children: [
            { title: '下拉菜单', key: '/home/practice/todo', icon: '' },
            { title: '导航菜单', key: '/home/practice/dianping', icon: '' },
            { title: '步骤条', key: '/home/practice/steps', icon: '' },
        ],
    },
    {
        title: '输入组件',
        icon: 'edit',
        key: '/home/entry',
        children: [
            {
                title: '表单',
                key: '/home/entry/form',
                icon: '',
                children: [
                    { title: '基础表单', key: '/home/entry/form/basic-form', icon: '' },
                    { title: '分步表单', key: '/home/entry/form/step-form', icon: '' },
                ],
            },
            { title: '上传', key: '/home/entry/upload', icon: '' },
        ],
    },
];

export default menus;
