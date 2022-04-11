var todayDate = moment().format('dddd, MMMM Do')
var currentTime = moment().format('h:mm a');
var timeBlockArray = new Array("#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM");

// Displaying the current date
$("#currentDay").text(todayDate);

// Function to change textarea color based on time
var timeTrackColor = function(timeBlock) {
    // get time from timeBlock element
    var time = $(timeBlock).find("h4").text().trim();
    console.log(time);

    // turn time in to moment object
    var timeObject = moment(time, 'HH:mm a');
    console.log(timeObject);

    if (moment().isAfter(timeObject)) {
        $(timeBlock).children('textarea').addClass("past");
    }
    else if (moment().isBefore(timeObject)) {
        $(timeBlock).children('textarea').addClass("future");
    }
}

// Function to run every 5 minutes to check time and change time block colors accordingly 
var timeAudit = function(timeArray) {
    for (let i = 0; i < timeBlockArray.length; i++) {
        timeTrackColor(timeArray[i]);
    }
}

timeAudit(timeBlockArray);
