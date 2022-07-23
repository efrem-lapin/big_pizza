class CalendarDate {
  months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  date = new Date();
  oneDay = 24 * 60 * 60 * 1000;
  month = this.months[this.date.getMonth()];
  today = this.date.getDate();
  over = new Date(Date.now() + 31 * this.oneDay);

  getDays() {
    let current = new Date();
    const arr = [];

    for (let i = 0; i < 31; i++) {
      arr.push({
        day: current.getDate(),
        month: this.months[current.getMonth()],
        year: current.getFullYear(),
      });
      current = new Date(Date.now() + this.oneDay * (i + 1));
    }

    return arr;
  }

  getMonth() {
    return this.month;
  }

  getNextMonth() {
    return this.months[this.date.getMonth() + 1];
  }

  getToday() {
    return this.today;
  }
}

export default CalendarDate;
