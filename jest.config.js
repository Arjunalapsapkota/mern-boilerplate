module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  verbose: true,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "/client/"],
  coverageThreshold: {
    global: {
      Branches: 78,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
