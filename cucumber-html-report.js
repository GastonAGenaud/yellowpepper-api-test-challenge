const report = require("multiple-cucumber-html-reporter");
const moment = require("moment");

const currentDateTime = moment().format("YYYYMMDD_HHmmss");
const reportPath = `./reports/Report_${currentDateTime}`;
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: reportPath,
  metadata: {
    browser: {
      name: "chrome",
      version: "114.0.5735.134",
    },
    device: "LOCAL",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});