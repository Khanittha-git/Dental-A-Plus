function renderTime() {
// Date 
var myDate = new Date();
var year = myDate.getYear();
if (year < 1000) {
    year += 1900;
}
var day = myDate.getDay();
var month = myDate.getMonth();
var daym = myDate.getDate();
var dayArray = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
var monthArray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
// Date End

// Time
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

if (hours == 24) {
    hours = 0;
} else if (hours > 12) {
    hours = hours - 0 ;
}
if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}

var myDay = document.getElementById("dateSeven");
var myDate = document.getElementById("dateDisplay");
var myClock = document.getElementById("clockDisplay");

myDay.innerHTML = "<b>Today: </b>" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + hours + ":" + minutes;

setTimeout('renderTime()', 1000);
}
renderTime();