const { DateTime } = require('luxon');

class CalendarPage {
  constructor(page) {
    this.birthday = page.locator('#birthday');
    this.txtStartDate = page.locator('input[placeholder="Start date"]');
    this.monthYear = page.locator(
      'div[class="datepicker-days"] th[class="datepicker-switch"]'
    );

    this.btnPrev = page.locator(
      'div[class="datepicker-days"] th[class="prev"]'
    );
    this.btnNext = page.locator(
      'div[class="datepicker-days"] th[class="next"]'
    );
  }

  async selectDate(date, monthYearToSelect) {
    const formattedMonth = DateTime.fromFormat(monthYearToSelect, 'MMMM yyyy');

    while ((await this.monthYear.textContent()) != monthYearToSelect) {
      if (formattedMonth < DateTime.fromJSDate(new Date())) {
        await this.btnPrev.click();
      } else {
        await this.btnNext.click();
      }
    }
    await page.locator(`//td[@class="day"] [text()="${date}"]`).click();
  }
}

module.exports = { CalendarPage };
