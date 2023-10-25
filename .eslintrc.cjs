module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  // parser: "@typescript-eslint/parser",
  parser: "vue-eslint-parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
    "prettier/prettier": "error",
  },
  ignorePatterns: [
    "src/**/*.test.ts",
    "dist/**",
    ".output/**",
    ".nuxt/**",
    "node_modules/**",
  ],
};
