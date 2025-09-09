import shared from "@cv-beautifier/config/eslint";

export default [
  ...shared,
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**"]
  }
];
