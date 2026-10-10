// @ts-check
module.exports = {
  root: false,
  env: { browser: true, node: true, es2022: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 2022, sourceType: "module", project: false },
  plugins: ["@typescript-eslint", "unused-imports", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "eqeqeq": ["error", "always"],
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: false }],
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
        "newlines-between": "always",
        "alphabetize": { order: "asc", caseInsensitive: true }
      }
    ]
  },
  settings: { react: { version: "detect" } }
};


