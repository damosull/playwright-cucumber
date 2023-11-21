const { Then } = require('@cucumber/cucumber');
const {
  DragAndDropPage,
} = require('../../page-objects/vignesh/drag-and-drop-page');

Then(
  'I hover over {string} and use mouse controls to move it into {string}',
  async (capital, country) => {
    const dragAndDropPage = new DragAndDropPage(page);
    const washington = await dragAndDropPage.getCapital(capital);
    const unitedStates = await dragAndDropPage.getCountry(country);

    await washington.hover();
    await page.mouse.down();
    await unitedStates.hover();
    await page.mouse.up();
  }
);

Then('I can drag {string} into {string}', async (capital, country) => {
  const dragAndDropPage = new DragAndDropPage(page);
  const washington = await dragAndDropPage.getCapital(capital);
  const unitedStates = await dragAndDropPage.getCountry(country);

  await washington.dragTo(unitedStates);
});
