'use strict';

const day_names = [['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']];

const month_names = [['Jan', 'January'], ['Feb', 'Febuary', 'Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'], ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']];

const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const cal_current_date = new Date();

function Calender(month, year) {
  this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
  this.year = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
  this.html = '';
}

Calender.prototype.generateHTML = function() {
  let firstDay = new Date(this.year, this.month, 1);
  let startingDay = firstDay.getDay();

  let monthLength = days_in_month[this.month];
  console.log('first', firstDay, 'start', startingDay, 'length', monthLength);
  if (this.month === 1) {
    if ((this.year % 4 === 0 && this.year % 100 != 0) || this.year % 400 === 0) {
      monthLength = 29;
    }
  }

  // header
  let monthName = month_names[this.month];
  let html = '<table class="calendar-table">';
  html = '<tr><th colspan="7">';
  html += monthName + "&nbsp;" + this.year;
  html += '</th></tr>';
  html += '<tr class="calendar-header">';
  for(var i = 0; i <= 6; i++) {
    html += '<td class="calendar-header-day">';
    html += day_names[i];
    html += '</td>'
  }
  html += '</tr><tr>';


// fill in days
  let day = 1;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j <= 6; j++) {
      html += '<td class="calendar-day">';
      if (day <= monthLength && (i > 0 || startingDay)) {
        html += day;
        day++;
      }
      html += '</td>';
    }

    if (day > monthLength) {
      break;
    } else {
      html += '</tr></tr>'
    }
  }
  html += '</tr></table>';

  this.html = html;
}

Calendar.prototype.getHTML = function() {
  return this.html;
}


var cal = new Calender(8, 2009);
cal.generateHTML();
document.write(cal.generateHTML());
