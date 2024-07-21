import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";
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

Before(async function(this: ScenarioWorld, scenario) {
    console.log(`Running scenario ${scenario.pickle.name}`);
    const contextOptions = {
        recordVideo:{
            dir: './reports/videos/'+scenario.pickle.name,
        }
    }
    const ready = await this.init(contextOptions);
    return ready
})
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

After(async function(this: ScenarioWorld, scenario) {
    const {
        screen: {page, browser}
    } = this
    const scenarioStatus = scenario.result?.status;
    if (scenarioStatus === 'FAILED'){
        await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        })
    }
    //await global.page.close();
    await browser.close();
    return browser;
});