module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest/setup.ts"],
  // transformIgnorePatterns: [
  //   "/node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|@ui-kitten/components)"
  // ]
  // transformIgnorePatterns: [
  //   "/node_modules/(?!(jest-)?react-native|@react-navigation|@ui-kitten/components)"
  // ]

  transformIgnorePatterns: [
    "node_modules/(?!@react-native|react-native|@react-navigation|@ui-kitten)"
  ]
};
