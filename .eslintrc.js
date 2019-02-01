module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['airbnb'],
    // cdn 引用作为的全局对象
    globals: {
        'window': true,
        'document': true,
        '$': true,
        'echarts': true,
        'moment': true,
        'axios': true,
        'Hammer': true,
        '_': true,
    },
    rules: {
        indent: [2, 4], // 缩进风格
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'max-len': [2, { 'code': 130 }],
        'global-require': 0, // 关闭require必须在顶部（懒加载组件用）
        'import/no-dynamic-require': 0, //关闭require格式校验（懒加载组件用）
        'import/extensions': 0, // 关闭导入文件后缀校验（cdn引入用）
        'import/no-unresolved': 0, // 关闭导入文件校验（cdn引入用）
        'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // ? 允许 a && a()写法

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
