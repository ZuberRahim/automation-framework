import {Given} from "@cucumber/cucumber";

Given(
    /^I am on the "([^"]*)" page$/, //the other regex you could use is "(.*)" this is more flexible 
    async function(pageId: string){
        const {
            screen: {page}
        } = this
        console.log(`I am on the ${pageId} page`);
        await page.goto("http://localhost:3000/");
    }
)