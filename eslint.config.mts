import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"
import nextPlugin from "@next/eslint-plugin-next"
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([

  {
    files: ["/**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { "@next/next": nextPlugin, "js": js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },

  },
  {
    files: ["/**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { "@stylistic": stylistic },
    rules: {
      ...stylistic.configs.recommended.rules,

      // Override
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
    },
  },
  tseslint.configs.recommended,
])
