/* deepscan-disable */

const container = document.getElementById('container');

const calendar = document.getElementById('datepicker');

const min_date = new Date('1995, 06, 16');
const clear_btn = document.getElementById('today_btn');

console.log(document.getElementsByName('res'))
const res_btns = document.getElementsByName('res')


// Our Global Array to store returned data from Asynchronous calls made
var nasaDays = [];

// Setting the max date as today's date in our Calendar
//calendar.setAttribute('max', today_date());

// First used this to get today's date but then just thought to use Date.now
/*
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
*/


// Event listner on click to get calendar's value the date
// And some validations so it doesn't go out of tge min_date range and new Date() which is today's range
// The reason I set min_date to "1995-06-16" as that's from when the images and data for APOD API is available





// Click event for our clear Storage button which shows today's data

/*
clear_btn.addEventListener('click', function(event) {

    // Removes the button with this one line after each execution if needed
    //event.target.remove();
    //let date_val = calendar.value; // store the value of the calendar in date val first
    //let actual_date = new Date(date_val); // convert the same string to Date Object

    // Trying code if already data exists don't send another AJAX request and clear the Storage if button clicked








}); // closing bracket for callback function with event listener
*/





// Any time the call stack is empty, the event loop engine of JS pushes the first task from the callback queue onto the call stack and runs it.
// The Fetch API that I used here is a modern replacement for XMLHttpRequest which avoides callback function hell and kinda simplified lesser, cleaner code
// Also async await makes it asynchronous and waits till the promises get verified as fetch is a promise based browser in built API
// Pushing the items into the localStorage of the browser with setItem or getting items if already exists in the local storage

async function returndates(start, end) {
    if (localStorage.getItem('recentDates') !== $('#datepicker').val()) {
        const api_link = "https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU&date=";
        let dataList = [];
        let current = moment(start)
        let finalDay = moment(end)
        for (let index = current; index.isSameOrBefore(finalDay, 'day'); index.add(1, 'day')) {
            let response = await fetch(api_link + index.format('YYYY-MM-DD'))
            let data = await response.json()
            dataList.push(data)
        } // end of main for loop 
        localStorage.setItem('recentDates', $('#datepicker').val());

        dataList.forEach(function(day) {
            nasaDays.push(new Day(day));
        })
        console.log(nasaDays);
        // calling our startUp function to populate the dropdown instantly 
        startUp();
    }
} // End of the async returndates Function for calling the API of APOD



// Maybe create setInterval for this async function and clear button



// To call the event listener if any data loads
window.addEventListener('storage', event => {
    console.log(event)
})

// Another way of doing the same thing
//window.onstorage = () => {};





/*
 There's internal server eroor for June 4 so don't count it as a mistake 
 {
"code": 500,
"msg": "Internal Service Error",
"service_version": "v1"
}

 */






// defining our dom targeted element so we can target it in startup arrow function
var select = document.getElementById("displayFilter");

nasaDays = [];


// Main arrow function to fill the Select Dropdown List with our nasaDays array values accordingly
let startUp = () => {

        for (var i = 0; i < nasaDays.length; i++) {
            var optn = nasaDays[i].data.title;
            if (optn && optn != "") { // validating in case if there's empty data it won't go inside the dropdown list
                //var optn = nasaDays[i].data.title;
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            } // inner closing if statement tag
        } // for loop
    } // function end






// Isn't there any extra code? Double check buddy
// Used an arrow function from ES 2015
let selecting = () => {
        const departmentSelection = document.getElementById('displayFilter');

        // if (departmentSelection.value == optn.value) { // or optn.value

        for (let i = 0; i < nasaDays.length; i++) {

            var tempNasa = nasaDays[i];

            if (departmentSelection.value == tempNasa.data.title) { // This line seems ok now, goes to data and to title of it

                // created variable to compare in our super handy filter method
                let NasaSelected = departmentSelection.value;

                // again iterating through nasaDays Array and getting the selected value and same time inserting our method createView to display the item selected
                nasaDays.filter(nasa => {
                    return nasa.data.title === NasaSelected && nasa.createView(container, res_btns);
                });

                // If I wanna display all the items then this forEach iteration would be useful
                /*  nasaDays.forEach(function(day) {
                      day.createView(container, res_btns);
                  }) */
            }


        } // for loop inner
    } // function end



// End of the Project