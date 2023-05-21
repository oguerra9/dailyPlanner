const Date = require("../src/utils/dateMethods");

// Methods to test:
//   getTimelessStamp
//   isLeapYear
//   getDaysInMonth
//   nextDay
//   prevDay
//   nextWeek
//   prevWeek
//   nextMonth
//   prevMonth
//   getMonthName
//   getDayName
//   getDayStart
//   getDayEnd
//   getWeekStart
//   getWeekEnd
//   getMonthStart
//   getMonthEnd
//   getDisplayMonth


describe("Date", () => {
  describe("getTimelessStamp", () => {
    // 'reverse' should reverse "Hello World!"
    it("should return the timestamp of the date object but where the hrs, mins, secs, and ms have been set to 0", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
      const dayStart = new Date(2023, 4, 21, 0, 0, 0, 0);
      // Next we define 'reversed' as the value of 'str' reversed.
      const expectedTS = dayStart.getTime();
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = myDay.getTimelessStamp();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(expectedTS);
    });
  });

  describe("isLeapYear", () => {
    it("should return false if the date obj's year is not a leap year", () => {
        const myDay = new Date(2023, 4, 21);
        const isLeap = false;

        const result = myDay.isLeapYear();

      expect(result).toEqual(isLeap);
    });

    it("should return true if the date obj's year is a leap year", () => {
        const myDay = new Date(2024, 4, 21);
        const isLeap = true;

        const result = myDay.isLeapYear();

      expect(result).toEqual(isLeap);
    });
  });

  describe("getDaysInMonth", () => {
    it("should return num of days in the month of the day obj", () => {
        const myDay = new Date(2023, 4, 21);
        const numDays = 31;

        const result = myDay.getDaysInMonth();

      expect(result).toEqual(numDays);
    });
  });
  //////////////////////////////////////////////////////////

  describe("nextDay", () => {
    it("should return a date obj with the date of the next day", () => {
        const myDay = new Date(2023, 4, 21);
        const nextDay = new Date(2023, 4, 22);

        const result = myDay.nextDay();

      expect(result).toEqual(nextDay);
    });
  });

  describe("prevDay", () => {
    it("should return a date obj with the date of the previous day", () => {
        const myDay = new Date(2023, 4, 21);
        const prevDay = new Date(2023, 4, 20);

        const result = myDay.prevDay();

      expect(result).toEqual(prevDay);
    });
  });

  describe("nextWeek", () => {
    it("should return a date obj with the date of the next week", () => {
        const myDay = new Date(2023, 4, 21);
        const nextWeek = new Date(2023, 4, 28);

        const result = myDay.nextWeek();

      expect(result).toEqual(nextWeek);
    });
  });

  describe("prevWeek", () => {
    it("should return a date obj with the date of the previous week", () => {
        const myDay = new Date(2023, 4, 21);
        const prevWeek = new Date(2023, 4, 14);

        const result = myDay.prevWeek();

      expect(result).toEqual(prevWeek);
    });
  });

  describe("nextMonth", () => {
    it("should return num of days in the month of the next month", () => {
        const myDay = new Date(2023, 4, 21);
        const nextMonth = new Date(2023, 5, 21);

        const result = myDay.nextMonth();

      expect(result).toEqual(nextMonth);
    });
  });

  describe("prevMonth", () => {
    it("should return num of days in the month of the previous month", () => {
        const myDay = new Date(2023, 4, 21);
        const prevMonth = new Date(2023, 3, 21);

        const result = myDay.prevMonth();

      expect(result).toEqual(prevMonth);
    });
  });

  describe("getMonthName", () => {
    it("should return a string of the name of the date obj's month", () => {
        const myDay = new Date(2023, 4, 21);
        const monthName = "May";

        const result = myDay.getMonthName();

      expect(result).toEqual(monthName);
    });
  });

  describe("getDayName", () => {
    it("should return a string of the day of the week", () => {
        const myDay = new Date(2023, 4, 21);
        const dayName = "Sunday";

        const result = myDay.getDayName();

      expect(result).toEqual(dayName);
    });
  });

  describe("getDisplayMonth", () => {
    it("should return the date obj's month 1-12", () => {
        const myDay = new Date(2023, 4, 21);
        const displayMonthNum = 5;

        const result = myDay.getDisplayMonth();

      expect(result).toEqual(displayMonthNum);
    });
  });

  //////////////////////////////////////
  describe("getDayStart", () => {
    it("should return date obj of start of day", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const dayStart = new Date(2023, 4, 21, 0, 0, 0, 0);

        const result = myDay.getDayStart();

      expect(result).toEqual(dayStart);
    });
  });

  describe("getDayEnd", () => {
    it("should return date obj of end of day", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const dayEnd = new Date(2023, 4, 21, 23, 59, 59, 99);

        const result = myDay.getDayEnd();

      expect(result).toEqual(dayEnd);
    });
  });

  describe("getWeekStart", () => {
    it("should return date obj of start of week", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const weekStart = new Date(2023, 4, 21, 0, 0, 0, 0);

        const result = myDay.getWeekStart();

      expect(result).toEqual(weekStart);
    });
  });

  describe("getWeekEnd", () => {
    it("should return date obj of end of week", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const weekEnd = new Date(2023, 4, 27, 23, 59, 59, 99);

        const result = myDay.getWeekEnd();

      expect(result).toEqual(weekEnd);
    });
  });

  describe("getMonthStart", () => {
    it("should return date obj of start of month", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const monthStart = new Date(2023, 4, 1, 0, 0, 0, 0);

        const result = myDay.getMonthStart();

      expect(result).toEqual(monthStart);
    });
  });

  describe("getMonthEnd", () => {
    it("should return date obj of end of month", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const monthEnd = new Date(2023, 4, 31, 23, 59, 59, 99);

        const result = myDay.getMonthEnd();

      expect(result).toEqual(monthEnd);
    });
  });
});
