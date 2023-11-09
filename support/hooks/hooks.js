const playwright = require('playwright');
const {
  After,
  AfterAll,
  AfterStep,
  Before,
  BeforeAll,
  Status,
} = require('@cucumber/cucumber');

BeforeAll(async () => {
  console.log('Launch Browser');
  global.browser = await playwright['chromium'].launch({ headless: false });
});

Before(async () => {
  console.log('Create new context and page');
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async function ({ pickle, result }) {
  // Screenshot only for failure
  if (result?.status == Status.FAILED) {
    const image = await global.page.screenshot({
      path: `../test-results/screenshots/${pickle.name}.png`,
      type: 'png',
    });
    await this.attach(image, 'image/png');
  }

  // Screenshot after each scenario
  // const image = await global.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
  // await this.attach(image, "image/png");
  console.log('Close context and page');
  await global.page.close();
  await global.context.close();
});

AfterAll(async () => {
  console.log('Close Browser');
  await global.browser.close();
});

// AfterStep(async function({pickle}){
//     // Screenshot after each step
//     const image = await global.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
//     await this.attach(image, "image/png");
// })
