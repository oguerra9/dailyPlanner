
Date.prototype.getDaysInMonth = function() {
    let monthNum = this.getMonth();
    if (monthNum == 0 || monthNum == 2 || monthNum == 4 || monthNum == 6 || monthNum == 7 || monthNum == 9 || monthNum == 11) {
        return 31;
    }
    else if (monthNum == 3 || monthNum == 5 || monthNum == 8 || monthNum == 10) {
        return 30;
    }
    else if (monthNum == 1) {
        if (this.isLeapYear === true) {
            return 29;
        }
        else {
            return 28;
        }
    }
};


Date.prototype.getTimelessStamp = function() {
    let timeStamp = this.getTime();
    let newDate = new Date(timeStamp);
    newDate.setHours(0, 0, 0, 0);
    return newDate.getTime();
};


Date.prototype.getDayStart = function() {
    let dayStart = new Date(this.getTimelessStamp());
    return dayStart;
};


Date.prototype.getDayEnd = function() {
    let currDay = new Date(this.getTime());
    let dayEnd = new Date(currDay.setHours(23, 59, 59, 99));
    return dayEnd;
};


Date.prototype.getWeekStart = function() {
    let currDay = new Date(this.getTime());
    let weekDay = this.getDay();
    let weekStart = new Date(currDay.setDate(currDay.getDate() - weekDay));
    weekStart = new Date(weekStart.getDayStart());
    return weekStart;
};


Date.prototype.getWeekEnd = function() {
    let currDay = new Date(this.getTime());
    let weekDay = this.getDay();
    let dayDiff = 6 - weekDay;
    let weekEnd = new Date(currDay.setDate(currDay.getDate() + dayDiff));
    weekEnd = new Date(weekEnd.getDayEnd());
    return weekEnd;
};


Date.prototype.getMonthStart = function() {
    let currDay = new Date(this.getTime());
    let monthStart = new Date(currDay.setDate(1));
    monthStart = monthStart.getDayStart();
    return monthStart;
};


Date.prototype.getMonthEnd = function() {
    let numDays = this.getDaysInMonth();
    let currDay = new Date(this.getTime());
    let monthEnd = new Date(currDay.setDate(numDays));
    monthEnd = monthEnd.getDayEnd();
    return monthEnd;
};

Date.prototype.getMidday = function() {
    let currDay = new Date(this.getTime());
    let midday = new Date(currDay.setHours(12, 0, 0, 0));
    return midday;
}



module.exports = Date;