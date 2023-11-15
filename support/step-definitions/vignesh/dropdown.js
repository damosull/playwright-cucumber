const { When, Then } = require('@cucumber/cucumber');
const { DropdownPage } = require('../../page-objects/vignesh/dropdown-page');

When('I select an option by value {string}', async (val) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.skillsSelect.selectOption({ value: val });
});

When('I select an option by label {string}', async (val) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.skillsSelect.selectOption({ label: val });
});

When('I select an option by index {int}', async (i) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.skillsSelect.selectOption({ index: i });
});

When('I select multiple optiobs by value, label, and index', async () => {
  await page.selectOption('#multi-select', [
    { value: 'Ohio' },
    { label: 'Texas' },
    { index: 3 },
  ]);
});

When('I search for {string}', async (country) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.sltCountry.click();
  await dropdownPage.txtCountry.fill(country);
});

Then('I click the country result', async () => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.countryResult.click();
});

Then('I select {string}', async (country) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.sltCountry.click();
  await page
    .locator('ul#select2-country-results')
    .locator('li', {
      hasText: country,
    })
    .click();
});
