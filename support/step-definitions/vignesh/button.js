const { When, Then } = require('@cucumber/cucumber');
const { ButtonPage } = require('../../page-objects/vignesh/button-page');
const { expect } = require('@playwright/test');

When('I click on the area', async () => {
  const buttonPage = new ButtonPage(page);
  buttonPage.area.click();
});

When('I double click on the area', async () => {
  const buttonPage = new ButtonPage(page);
  buttonPage.area.dblclick();
});
When('I right click on the area', async () => {
  const buttonPage = new ButtonPage(page);
  buttonPage.area.click({ button: 'right' });
});

Then('the text reads {string}', async (txt) => {
  const buttonPage = new ButtonPage(page);
  await expect(buttonPage.lblClickType).toHaveText(txt);
});
