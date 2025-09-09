import ts from "typescript-eslint";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...ts.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  },
  {
    ignores: ["**/dist/**", "**/.next/**", "**/node_modules/**", "**/*.config.*"]
  }
];

export default config;
