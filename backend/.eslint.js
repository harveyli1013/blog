/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 16:37:39
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 16:37:44
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */

module.exports = {
  root: true,
  // 扩展规则
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  // 注册插件
  plugins: ['@typescript-eslint', 'prettier'],
  // 规则 根据自己需要增加
  rules: {
    'no-var': 'error',
    'no-undef': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
}
