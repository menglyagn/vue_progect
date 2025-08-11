/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2022-11-30 10:32:01
 * @LastEditors: mqr
 * @LastEditTime: 2022-12-05 10:21:43
 */
module.exports = {
  root: true,
  env: {
    node: true,
    // 'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  }
  // globals: {
  //   defineProps: 'readonly',
  //   defineEmits: 'readonly'
  // }
}
