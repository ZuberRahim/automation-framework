import {Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(elementKey: string, exepectedElementText: string){
        console.log(`the ${elementKey} should contain the text ${exepectedElementText}`);
        const content = await global.page.textContent("[data-id='contacts']");
        expect(content).toBe(exepectedElementText);
    }
)