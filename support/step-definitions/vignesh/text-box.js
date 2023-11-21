const { When } = require('@cucumber/cucumber');

When('I fill in the {string} username', async (text) => {
  const txtUsername = page.locator('input[placeholder="Username"]');
  await txtUsername.fill('Admin');
});

When(
  'I press sequentially with a delay the {string} password',
  async (text) => {
    const txtPassword = page.locator('input[placeholder="Password"]');
    await txtPassword.pressSequentially('admin123', { delay: 500 }); // `delay` is optional
  }
);

When('I press the Enter key', async () => {
  const txtPassword = page.locator('input[placeholder="Password"]');
  await txtPassword.press('Enter');
});
