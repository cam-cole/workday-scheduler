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

    if(Math.abs(moment().diff(timeObject, "hours")) <= 1) {
        $(timeBlock).children('textarea').addClass("present");
    }
    else if (moment().isAfter(timeObject)) {
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

// Recurring call for timeAudit
setInterval(function() {
    timeAudit(timeBlockArray);
}, 5000);


// save written tasks
$(".saveBtn").on("click", function() {
    var text = $(this).siblings("textarea").val();
    var time = $(this).parent().attr("id");

    // set items to local storage
    localStorage.setItem(time, text);
})

// load saved data from localStorage
$("#9AM textarea").val(localStorage.getItem("9AM"));
$("#10AM textarea").val(localStorage.getItem("10AM"));
$("#11AM textarea").val(localStorage.getItem("11AM"));
$("#12PM textarea").val(localStorage.getItem("12PM"));
$("#1PM textarea").val(localStorage.getItem("1PM"));
$("#2PM textarea").val(localStorage.getItem("2PM"));
$("#3PM textarea").val(localStorage.getItem("3PM"));
$("#4PM textarea").val(localStorage.getItem("4PM"));
$("#5PM textarea").val(localStorage.getItem("5PM"));

// time audit when open page
timeAudit(timeBlockArray);
