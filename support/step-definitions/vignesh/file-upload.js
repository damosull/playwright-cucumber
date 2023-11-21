const { When, Then } = require('@cucumber/cucumber');

let uploadFile = null;

When('I click on the file input field', async () => {
  uploadFile = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('input[name="files[]"]').click(),
  ]);
});

Then('I choose a file to upload', async () => {
  uploadFile = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('input[name="files[]"]').click(),
  ]);
  await uploadFile[0].setFiles(['utils/dog.jpg']);
});

Then('I upload a file from my file system', async () => {
  await page.setInputFiles('input[name="files[]"]', ['utils/dog.jpg']);
});
