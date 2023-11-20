const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let frame = null;
let childFrames = null;

Then('there are {int} frames', async (count) => {
  const noOfFrames = page.frames().length;
  await expect(noOfFrames).to.equal(count);
});

Then('I get the frame using page.frame', async () => {
  frame = page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_1.html',
  });
});

Then('I get the frame using page.frameLocator', async () => {
  frame = page.frameLocator('frame[src="frame_1.html"]');
});

Then('I type text in the first frame', async () => {
  await frame?.locator('input[name="mytext1"]').fill('Playwright');
});

Then('the 3rd frame has {int} child frames', async (count) => {
  frame = page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_3.html',
  });
  childFrames = frame?.childFrames();

  await expect(childFrames?.length).to.equal(count);
});

Then('I click buttons in the child frame', async () => {
  await childFrames[0].locator('//div[@id="i8"]').click();
  await childFrames[0].locator('//div[@id="i19"]').click({ force: true });
});
