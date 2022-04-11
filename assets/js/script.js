var todayDate = moment().format('dddd, MMMM Do')
var currentTime = moment().format('h:mm a');

// Displaying the current date
$("#currentDay").text(todayDate);

// Change textarea color based on time
console.log(currentTime);
