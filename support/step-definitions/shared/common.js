const { Given } = require('@cucumber/cucumber');

Given('I go to {string}', async (url) => {
  await page.goto(url);
});
