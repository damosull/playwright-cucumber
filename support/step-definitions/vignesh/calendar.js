const { When } = require('@cucumber/cucumber');
const { CalendarPage } = require('../../page-objects/vignesh/calendar-page');

When('I fill the date as {string}', async (date) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.birthday.fill(date);
});

When('I enter a date {string} {string}', async (date, monthYear) => {
  const calendarPage = new CalendarPage(page);

  await calendarPage.txtStartDate.click();
  await calendarPage.selectDate(date, monthYear);
});
