const Date = require("../utils/dateMethods");

// Methods to test:
//   getTimelessStamp
//   getDayStart
//   getDayEnd
//   getWeekStart
//   getWeekEnd
//   getMonthStart
//   getMonthEnd


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

  describe("getMidday", () => {
    it("should return date obj of noon on the given date", () => {
        const myDay = new Date(2023, 4, 21, 13, 21, 24, 74);
        const midday = new Date(2023, 4, 21, 12, 0, 0, 0);

        const result = myDay.getMidday();

      expect(result).toEqual(midday);
    });
  });
});
