import {Given} from "@cucumber/cucumber";

Given(
    /^I am on the "([^"]*)" page$/, //the other regex you could use is "(.*)" this is more flexible 
    async function(pageId: string){
        console.log(`I am on the ${pageId} page`);
        await global.page.goto("http://localhost:3000/");
    }
)