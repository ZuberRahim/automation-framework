"use strict";

var _cucumber = require("@cucumber/cucumber");
// const {chromium} = require("playwright");

//Runs only once before the test cases are executed
// BeforeAll(async () => {
//     global.browser = await chromium.launch({
//         headless:false
//     })
// });

// //Runs only once after the test cases are executed
// AfterAll(async () => {
//     await global.browser.close();
// });

//Runs before every test case is executed
// Before(async (scenario) => {
//     // global.context = await global.browser.newContext();
//     global.context = await global.browser.newContext({
//         recordVideo:{
//             dir: './reports/videos/'+scenario.pickle.name,
//         }
//     })
//     global.page = await global.context.newPage();
// });

(0, _cucumber.Before)(async function (scenario) {
  console.log("Running scenario ".concat(scenario.pickle.name));
  const contextOptions = {
    recordVideo: {
      dir: './reports/videos/' + scenario.pickle.name
    }
  };
  const ready = await this.init(contextOptions);
  return ready;
});
//Runs after every test case is executed
//After(async (scenario) => {
//     const scenarioStatus = scenario.result?.status;
//     if (scenarioStatus === 'FAILED'){
//         await global.page.screenshot({
//             path: `./reports/screenshots/${scenario.pickle.name}.png`
//         })
//     }
//     await global.page.close();
// });

(0, _cucumber.After)(async function (scenario) {
  var _scenario$result;
  const {
    screen: {
      page,
      browser
    }
  } = this;
  const scenarioStatus = (_scenario$result = scenario.result) === null || _scenario$result === void 0 ? void 0 : _scenario$result.status;
  if (scenarioStatus === 'FAILED') {
    await page.screenshot({
      path: "./reports/screenshots/".concat(scenario.pickle.name, ".png")
    });
  }
  //await global.page.close();
  await browser.close();
  return browser;
});