const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');

const loginPage = new LoginPage();

Given('I visit the login page', async () => {
  await loginPage.navigateToLoginScreen();
});

When('I fill the login form with valid credentials', async () => {
  await loginPage.submitLoginForm();
});

When(
  'I fill the login form with {string} and {string}',
  async (username, password) => {
    await loginPage.submitLoginFormWithParameters(username, password);
  }
);

Then('I should see the home page', async () => {
  await loginPage.assertUserIsLoggedIn();
});

Then('I wait for 3 seconds', async () => {
  await loginPage.pause();
});
