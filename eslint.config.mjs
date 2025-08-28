import shared from "@cv-beautifier/config/eslint/index.mjs";

export default [
  ...shared,
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**"]
  }
];
