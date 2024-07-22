"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
const common = "./src/features/**/*.feature --require-module ts-node/register --require ./src/step-definitions/**/**/*.ts -f json:./reports/report.json --format progress-bar";
const dev = exports.dev = "".concat(common, " --tags \"@dev\"");
const smoke = exports.smoke = "".concat(common, " --tags \"@smoke\"");
const regression = exports.regression = "".concat(common, " --tags \"@regression\"");