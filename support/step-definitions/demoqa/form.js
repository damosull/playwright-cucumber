const { Then } = require('@cucumber/cucumber');
const { FormPage } = require('../../page-objects/demoqa/form-page');

Then('I can enter data retrieved from a JSON file in the form', async () => {
  const formPage = new FormPage(page);
  const testData = require('../../../utils/userData.json');
  await formPage.txtFirstName.type(testData.firstName);
  await formPage.txtLastName.type(testData.lastName);
  await formPage.txtEmail.type(testData.email);
});

Then('I can enter data retrieved from a XLSX file in the form', async () => {
  const formPage = new FormPage(page);
  const XLSX = require('xlsx');
  const path = require('path');
  const filePath = path.resolve(__dirname, '../../../utils/userData.xlsx');
  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(worksheet);

  for (const row of data) {
    const firstName = row.Username;
    const lastName = row.Password;
    const email = row.Email;

    await formPage.txtFirstName.type(firstName);
    await formPage.txtLastName.type(lastName);
    await formPage.txtEmail.type(email);
  }
});
