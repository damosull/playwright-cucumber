const { When, Then } = require('@cucumber/cucumber');
const { CheckboxPage } = require('../../page-objects/vignesh/checkbox-page');
const { expect } = require('@playwright/test');

When('the checkboxes are not checked', async () => {
  const checkboxPage = new CheckboxPage(page);

  expect(checkboxPage.chk1).not.toBeChecked();
  expect(checkboxPage.chk2).not.toBeChecked();
  expect(checkboxPage.chk3).not.toBeChecked();

  expect(await checkboxPage.chk1.isChecked()).toBeFalsy();
  expect(await checkboxPage.chk2.isChecked()).toBeFalsy();
  expect(await checkboxPage.chk3.isChecked()).toBeFalsy();
});

When('I check the {string} checkbox', async (pos) => {
  const checkboxPage = new CheckboxPage(page);

  switch (pos) {
    case '1st':
      await checkboxPage.chk1.check();
      break;

    case '2nd':
      await checkboxPage.chk2.check();
      break;

    case '3rd':
      await checkboxPage.chk3.check();
      break;

    default:
      throw new Error(`Unspecified Postion: ${pos}`);
  }
});

Then('the {string} checkbox is checked', async (pos) => {
  const checkboxPage = new CheckboxPage(page);
  let checkbox = null;

  switch (pos) {
    case '1st':
      checkbox = checkboxPage.chk1;
      break;

    case '2nd':
      checkbox = checkboxPage.chk2;
      break;

    case '3rd':
      checkbox = checkboxPage.chk3;
      break;

    default:
      throw new Error(`Unspecified Postion: ${pos}`);
  }
  await expect(checkbox).toBeChecked();
  expect(await checkbox.isChecked()).toBeTruthy();
});
