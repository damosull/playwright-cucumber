const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../../page-objects/conduit/home-page');
const { LoginPage } = require('../../page-objects/conduit/login-page');
const { DashboardPage } = require('../../page-objects/conduit/dashboard-page');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await homePage.btnSignIn.click();
});

When('I log in with valid credentials', async function () {
  const loginPage = new LoginPage(page);
  await loginPage.txtEmail.fill('playwrightdemo@gmail.com');
  await loginPage.txtPassword.fill('playwrightdemo');
  await loginPage.btnSignIn.click();
});

When('I click on the settings button', async function () {
  const dashboard = new DashboardPage(page);
  await dashboard.btnSettings.click();
});

When('I click on the log out button', async function () {
  const dashboard = new DashboardPage(page);
  await dashboard.btnLogOut.click();
});

Then('I route back to the home page', async function () {
  const homePage = new HomePage(page);
  await expect(homePage.btnSignIn).toBeVisible();
});
