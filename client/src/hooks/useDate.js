import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

export const useDate = (recorded, nav) => {
  const [dateDisplay, setDateDisplay] = useState('');
  const [days, setDays] = useState([]);

  const recordForDate = date => recorded.find(e => e.date === date);
  var is_weekend =  function(date){
    var dt = new Date(date);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return true;
        } 
}

  useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();
    
    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPreviousMonth = new Date(year, month, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(`${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      const whichDay = new Date (dayString)
      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          record: recordForDate(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
          isWeekend : is_weekend(dayString),
          id: uniqid(),
          whichDay: whichDay
        });
      }
      else {
        daysArr.push({
          value:  daysInPreviousMonth - paddingDays + i,
          record: null,
          isCurrentDay: false,
          date: "",
          padding: true,
          id: uniqid(),
          whichDay: whichDay

        });
      }
    }

    setDays(daysArr);
  }, [recorded, nav]);

  return {
    days,
    dateDisplay,
  };
};