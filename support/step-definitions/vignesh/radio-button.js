const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { RdoBtnPage } = require('../../page-objects/vignesh/radio-button-page');

When('I check the Male radio button', async () => {
  const rdoBtnPage = new RdoBtnPage(page);
  await rdoBtnPage.rdoMale.check();
});

When('I check the Female radio button', async () => {
  const rdoBtnPage = new RdoBtnPage(page);
  await rdoBtnPage.rdoFemale.check();
});

Then('the Male radio button is not checked', async () => {
  const rdoBtnPage = new RdoBtnPage(page);

  // Assertion Method 1:
  expect(rdoBtnPage.rdoMale).not.toBeChecked();
  // Assertion Method 2:
  expect(await rdoBtnPage.rdoMale.isChecked()).toBeFalsy();
});

Then('the Female radio button is not checked', async () => {
  const rdoBtnPage = new RdoBtnPage(page);

  // Assertion Method 1:
  expect(rdoBtnPage.rdoFemale).not.toBeChecked();
  // Assertion Method 2:
  expect(await rdoBtnPage.rdoFemale.isChecked()).toBeFalsy();
});

Then('the Male radio button is checked', async () => {
  const rdoBtnPage = new RdoBtnPage(page);

  // Assertion Method 1:
  expect(rdoBtnPage.rdoMale).toBeChecked();
});

Then('the Female radio button is checked', async () => {
  const rdoBtnPage = new RdoBtnPage(page);

  // Assertion Method 2:
  expect(await rdoBtnPage.rdoFemale.isChecked()).toBeTruthy();
});
