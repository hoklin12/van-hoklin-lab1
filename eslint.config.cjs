const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    // ✅ Completely ignore Yarn Plug'n'Play & other non-source files
    ignores: [
      "**/.pnp.*", // ignore ALL .pnp.* files (covers .cjs, .mjs, etc.)
      "node_modules/**",
      "dist/**",
      "build/**",
    ],
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        ...globals.node,
        ...globals.mocha,
        ...globals.es2021,
      },
    },
    rules: {
      // Optional: silence any possible warnings
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-console": "off",
      "operator-linebreak": "off",
      "eslint-comments/no-unused-disable": "off",
    },
  },
];
