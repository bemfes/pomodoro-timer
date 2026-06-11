/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/**/*.d.ts",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],

  moduleNameMapper: {
    "^@/shared/assets/(.*)\\.(png|jpg|jpeg|gif|webp|svg)$":
      "<rootDir>/config/jest/fileMock.js",

    "^@/(.*)$": "<rootDir>/src/$1",

    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
  },
};
module.exports = config;
