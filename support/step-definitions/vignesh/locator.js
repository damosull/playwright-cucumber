const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Then('I get the textbox based on ID', async () => {
  await page.locator('#user-name').fill('standard_user');
});

Then('I get the textbox based on name', async () => {
  await page.locator('[name="user-name"]').fill('standard_user');
});

Then('I get the button based on text', async () => {
  await page.locator('text=Login').click();
});

Then('I get the button based on has-text', async () => {
  await page.locator('input:has-text("Login")').click();
});
