import nextPlugin from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin"


const eslintConfig = [
  {
    plugins: {"@stylistic": stylistic, "@next/next": nextPlugin},
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": [2, "double"],
      ...nextPlugin.configs.recommended.rules
    },
  }
];

export default eslintConfig;
