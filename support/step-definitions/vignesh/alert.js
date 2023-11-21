const { Then } = require('@cucumber/cucumber');
const { AlertPage } = require('../../page-objects/vignesh/alert-page');
const { expect } = require('@playwright/test');

Then('I click the Simple Alert button and the Accept button', async () => {
  const alertPage = new AlertPage(page);

  // Define this before the click that triggers the dialog box
  page.on('dialog', async (alert) => {
    await expect(alert.message()).toEqual('I am a JS Alert');
    await alert.accept();
    await expect(alertPage.lblResult).toHaveText(
      'You successfully clicked an alert'
    );
  });

  await alertPage.btnJSAlert.click();
});

Then('I click the Confirm Alert button and the OK button', async () => {
  const alertPage = new AlertPage(page);

  // Define this before the click that triggers the alert box
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS Confirm');
    await alert.accept();
    await expect(alertPage.lblResult).toHaveText('You clicked: Ok');
  });

  await alertPage.btnJSConfirm.click();
});

Then('I click the Confirm Alert button and the Cancel button', async () => {
  const alertPage = new AlertPage(page);

  // Define this before the click that triggers the alert box
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS Confirm');
    await alert.dismiss();
    await expect(alertPage.lblResult).toHaveText('You clicked: Cancel');
  });

  await alertPage.btnJSConfirm.click();
});

Then('I open the Prompt and enter some text and click OK', async () => {
  const alertPage = new AlertPage(page);

  // Define this before the click that triggers the alert box
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS prompt');
    await alert.accept('Playwright');
    await expect(page.locator('#result')).toHaveText('You entered: Playwright');
  });

  await alertPage.btnJSPrompt.click();
});

Then('I open the Prompt and enter some text and click Cancel', async () => {
  const alertPage = new AlertPage(page);

  // Define this before the click that triggers the alert box
  page.on('dialog', async (alert) => {
    expect(alert.message()).toEqual('I am a JS prompt');
    await alert.dismiss();
    await expect(page.locator('#result')).toHaveText('You entered: null');
  });

  await alertPage.btnJSPrompt.click();
});
