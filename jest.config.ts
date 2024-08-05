module.exports = {
  roots: ["src"],
  testMatch: ["**/tests/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|js)$": "ts-jest",
  },
};
