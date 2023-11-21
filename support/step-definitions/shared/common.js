const { Given } = require('@cucumber/cucumber');

Given('I go to {string}', async (url) => {
  await page.goto(url);
});

Given('I click {string}', async (txt) => {
  await page.locator(`text=${txt}`).click();
});
