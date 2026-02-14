import { defineConfig } from "eslint/config"
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
  ...nextVitals,
  ...nextTs,
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
])
