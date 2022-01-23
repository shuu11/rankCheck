module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
    "googleappsscript/googleappsscript": true
  },
  parserOptions: {
    sourceType: "module"
  },
  globals: {
    jQuery: "readonly",
    $: "readonly",
    velocity: "readonly"
  },
  extends: ["eslint:recommended",'prettier'],
  plugins: ["googleappsscript"]
};
