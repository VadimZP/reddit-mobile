module.exports = {
  root: true,
  extends: ["@react-native", "prettier"],
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react+(|-native)",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    "react/no-unstable-nested-components": [
      "off",
      {
        allowAsProps: true,
        customValidators:
          [] /* optional array of validators used for propTypes validation */
      }
    ]
  }
};
