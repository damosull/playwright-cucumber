const { Given, When, Then } = require('@cucumber/cucumber');

const { DashboardPage } = require('../../page-objects/conduit/dashboard-page');
const { FormPage } = require('../../page-objects/conduit/form-page');
const articleName = 'Playwright: ' + Math.random();

const { expect } = require('@playwright/test');

When('I click on New Post button', async function () {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.btnNewPost.click();
});

When('I fill the requried fields', async function () {
  const formPage = new FormPage(page);
  await formPage.fillForm(articleName);
});

When('I publish the article', async function () {
  const formPage = new FormPage(page);
  await formPage.btnPublish.click();
  await page.pause();
});

Then('I see the article posted', async function () {
  const formPage = new FormPage(page);
  await expect(formPage.articles).toHaveText(articleName);
});
