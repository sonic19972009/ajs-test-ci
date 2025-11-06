import js from "@eslint/js";
import globals from "globals";
import pluginJest from "eslint-plugin-jest";

export default [
  js.configs.recommended, // базовые правила ESLint
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
