import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: ["dist/**", ".next/**", "node_modules/**"],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;

