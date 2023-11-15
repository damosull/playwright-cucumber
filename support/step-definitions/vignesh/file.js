const { When, Then } = require('@cucumber/cucumber');
const { FilePage } = require('../../page-objects/vignesh/file-page');

When('I type {string} as the file name', async (txt) => {
  const filePage = new FilePage(page);

  await filePage.txt.click();

  await filePage.txt.pressSequentially(txt);

  await filePage.btnCreateFile.click();
});

Then('I download the file with the default file name', async () => {
  const filePage = new FilePage(page);

  const download = await Promise.all([
    page.waitForEvent('download'),
    filePage.downloadLink.click(),
  ]);

  const path = await download[0].path();
  console.log('Downloaded Path: ', path);

  // Approach 1: Default File Name:
  const fileName = download[0].suggestedFilename();
  await download[0].saveAs(fileName);
});

Then('I download the file with the file name {string}', async (fileName) => {
  const filePage = new FilePage(page);

  const download = await Promise.all([
    page.waitForEvent('download'),
    filePage.downloadLink.click(),
  ]);

  // Approach 2: Customised File Name:
  const customFileName = fileName;
  await download[0].saveAs(customFileName);
});
