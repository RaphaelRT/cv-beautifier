import ts from "typescript-eslint";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...ts.configs.strictTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  },
  {
    ignores: ["**/dist/**", "**/.next/**", "**/node_modules/**"]
  }
];

export default config;
