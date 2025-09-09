import config from "@cv-beautifier/config/eslint";

export default [
  ...config,
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "*.tsbuildinfo"
    ]
  }
];
