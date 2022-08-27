"use strict";

/* Name: Ann Maria Jiji
   Class: DISM/1A/04
   Admin No.: 2227522
*/

/* Execute the function to run and display the countdown clock*/
runClock();
setInterval("runClock()" , 1000);

/*Function to create and run the countdown clock*/
function runClock() {
    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById('dateNow').innerHTML = dateStr + "<br />" + timeStr;

    /* Calculate the days until 31st March */
    var newYear = new Date("March 31, 2025");
    var nextYear = currentDay.getFullYear() + 3;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

    /* Calculate the hours left in the current day */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    /*Calculate the minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /* Diaplay the time left until New Year's Eve */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}
        