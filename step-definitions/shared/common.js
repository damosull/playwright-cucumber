const { Given } = require('@cucumber/cucumber');

Given('I go to the {string} page', async (pageName) => {
  await page.goto(pageName);
});
