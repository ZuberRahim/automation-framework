"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/,
//the other regex you could use is "(.*)" this is more flexible 
async function (pageId) {
  const {
    screen: {
      page
    }
  } = this;
  console.log("I am on the ".concat(pageId, " page"));
  await page.goto("http://localhost:3000/");
});