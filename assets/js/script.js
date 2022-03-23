var todaysDate = moment().format('dddd MM, YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

//gets the items from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));