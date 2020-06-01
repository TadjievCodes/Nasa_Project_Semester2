/* deepscan-disable */

const container = document.getElementById('container');
const date_btn = document.getElementById('go');
const calendar = document.getElementById('date');
// just added  date1 for the first calendar to start from
const calendar1 = document.getElementById('date1');

const min_date = new Date('1995, 06, 16');
const today_btn = document.getElementById('today_btn');

console.log(document.getElementsByName('res'))
const res_btns = document.getElementsByName('res')

// Our Global Array to store returned data from Asynchronous calls made
var nasaDays = [];

// Setting the max date as today's date in our Calendar
calendar.setAttribute('max', today_date());
calendar1.setAttribute('max', today_date());


// Function to get the current day in our calendar
function today_date() {
    let today = new Date(); // deepscan-disable-line
    let today_obj = new Date();
    let year = today_obj.getFullYear();
    let month = today_obj.getMonth() + 1;
    let day = today_obj.getDate();
    console.log(month)
    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return `${year}-${month}-${day}`
}

console.log(min_date);


// Returns randomly 5 items or datas from the JSON External file 
// Just trying to play with it
getData(5).catch(err => {
    console.log(err)
})



// Event listner on click to get calendar's value the date
// And some validations so it doesn't go out of tge min_date range and new Date() which is today's range
// The reason I set min_date to "1995-06-16" as that's from when the images and data for APOD API is available

// Second on the right date picker
date_btn.addEventListener('click', function(event) {
    let date_val = calendar.value;

    //And Do I really need to convert it here to Date Object as it throws errors when I do it that way?
    let actual_date = new Date(date_val); // convert string to Date Object

    // preventing default behaviour 
    event.preventDefault()
    if (date_val < min_date || date_val > new Date()) {
        console.log("out of range!!")
    } else {
        getData(date_val).catch(err => {
            console.log(err)
        });
    }

})

// First Date Picker

date_btn.addEventListener('click', function(event) {
    let date_val = calendar1.value;
    let actual_date = new Date(date_val); // convert string to Date Object

    // preventing default behaviour 
    event.preventDefault()
    if (date_val < min_date || date_val > new Date()) {
        console.log("out of range!!")
    } else {
        getData(date_val).catch(err => {
            console.log(err)
        });
    }

})

// Now how to set them together so they produce the value dates between the range and I shouldn't allow users to select more than the 1-month worth of data?

// Why my jquery gives error when trying to be dependent on each other?
/*

$(document).ready(function() {
    $("#date").datepicker({
        format: 'dd/mm/yyyy',
        autoclose: 1,
        //startDate: new Date(),
        todayHighlight: false,
        //endDate: new Date()
    }).on('changeDate', function(selected) {
        var minDate = new Date(selected.date.valueOf());
        $('#txtToDate').datepicker('setStartDate', minDate);
        $("#txtToDate").val($("#txtFromDate").val());
        $(this).datepicker('hide');
    });

    $("#date1").datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        //endDate: new Date()
    }).on('changeDate', function(selected) {
        $(this).datepicker('hide');
    });
});

*/


// Click event for our today's date button which shows today's data
today_btn.addEventListener('click', function(event) {
    // let today = new Date();
    // let today_obj = new Date();
    // let year = today_obj.getFullYear();
    // let month = today_obj.getMonth()+ 1;
    // let day = today_obj.getDate();
    // console.log(month)
    // if(month < 10){
    //     month = '0' + month;
    // }

    // if (day < 10){
    //     day = '0' + day;
    // }

    event.preventDefault()

    getData(today_date())

    // Removes the button with this one line after each execution if needed
    //event.target.remove();
})


// Any time the call stack is empty, the event loop engine of JS pushes the first task from the callback queue onto the call stack and runs it.
// The Fetch API that I used here is a modern replacement for XMLHttpRequest which avoides callback function hell and kinda simplified

async function getData(arg) {

    var api_link;

    //var api_key = `tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU`;

    if (typeof arg === 'string') {
        api_link = `https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU&date=${arg}`;
    } else {
        api_link = `https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU&count=${arg}`;

    }

    var response = await fetch(api_link)
    var data = await response.json();
    console.log(data);


    /*
    if (response.text == "undefined") {
        response.text = "Unknown";
    }

    for (var i = 0; i < nasaDays.length; i++) {
        if (nasaDays[i].data.copyright.value == "undefined") {
            nasaDays[i].data.copyright.value = "Unknown";
        }

    }
*/

    //  isArray() method checks whether the passed variable is an Array object. It returns a true boolean value if the variable is an array and false if it is not.
    if (!(Array.isArray(data))) {
        data = [data];
    }

    // Iterating through it and pushing it into our array nasaDays which is according to the Class Constructor that's why new Day keyword is used
    data.forEach(function(day) {
        //  createView(day)
        nasaDays.push(new Day(day));
    })
    console.log(nasaDays);

    // Again iterating and creating the display for the selected days with createView method we have in our constructor
    nasaDays.forEach(function(day) {
        day.createView(container, res_btns)
    })

}





var select = document.getElementById("displayFilter");

nasaDays = [];


// Main function to fill the Select Dropdown List with our nasaDays array values accordingly
function startUp() {

    for (var i = 0; i < nasaDays.length; i++) {
        var optn = nasaDays[i].data.title;
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }

}
//down.innerHTML = "Elements Added";

/*
    const departmentSelection = document.getElementById('displayFilter');

    if (departmentSelection.value === optn.value) {


    }
*/

// Kind of on load event listener function
// window.addEventListener("DOMContentLoaded", function name)


// Jquery method doesn;t seem to work

/*
$(document).ready(function() {

    $('.firstdate input').on('change', function() {

        var datearray = $('.firstdate input').val().split("-");

        var montharray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var year = "20" + datearray[2];

        var month = montharray.indexOf(datearray[1]) + 1;

        var day = datearray[0];

        var minDate = (year + "-" + month + "-" + day);

        $('.seconddate input').attr('min', minDate);

    });

});
*/