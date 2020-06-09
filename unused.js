/ Setting the max date as today's date in our Calendar
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

// Returns randomly 5 items or datas from the JSON External file 
// Just trying to play with it
//getData(5).catch(err => {
//  console.log(err)
//})
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


/*
async function returndates(start, end) {
    const api_link = "https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU&date=";
    let dataList = [];
    let current = moment(start)
    let finalDay = moment(end)
    for (let index = current; index.isSameOrBefore(finalDay, 'day'); index.add(1, 'day')) {
        let response = await fetch(api_link + index.format('YYYY-MM-DD'))
        let data = await response.json()
        dataList.push(data)

    } // end of main for loop 
    console.log(dataList);


    dataList.forEach(function(day) {
        //  createView(day)
        nasaDays.push(new Day(day));
    })
    console.log(nasaDays);


    localStorage.setItem('recentDates', $('#datepicker').val());



} // End of the async returndates Function for calling the API of APOD

*/



// To store arrays or objects, you would have to convert them to strings with stringify

let datepicker = document.getElementById('datepicker').value;


//localStorage.setItem('recentSearches', JSON.stringify(datepicker));

// But for some reason with Local storage my images don't seem to load quick enough some load after many seconds  or first dont show up n then only later

/*

for (var i = 0; i < nasaDays.length; i++) {
    var optnDate = nasaDays[i].data.date;
    if (dataList != dataList) {
        localStorage.setItem('recentSearches', JSON.stringify(dataList));
    } else {
        localStorage.getItem('recentSearches', JSON.parse(dataList));
    }


}

*/

// To call the event listener if any data loads
window.addEventListener('storage', event => {
    console.log(event)
})

// Another way of doing the same thing
//window.onstorage = () => {};

// maybe use .hasOwnProperty() method ?




//document.addEventListener('DOMContentLoaded', init);


/*
 There's internal server eroor for June 4 so don't count it as a mistake 
 {
"code": 500,
"msg": "Internal Service Error",
"service_version": "v1"
}

 */




// Old API call function
// Steps in creating AJAX >>>>>>
// 1) Create an XMLHttpRequest Object.
// 2) Create or Define a Callback Function.
// 3) Open a Request (Which is usually GET or POST).          request.open("GET", url)
// 4) Send the Request (Which is usually GET or POST).        request.send();

/*

// Define your async ajax call function
function getJSONAsync(url) {
    // iN THIS THEME ALL THE AJAX AND JSON RELATED KEYWORDS HIGHLIGHTED IN YELLOW         
    // Or could name the variable as hxr as that's definition of AJAX     
    var request = new XMLHttpRequest();

    //onreadystatechange event and then callback function
    request.onreadystatechange = function() {
            // check if is finished readystate === 4 and everything is OK
            if (request.readyState === 4 && request.status === 200) {

                var jsonString = request.responseText;
                // handle resposne text here
                var jsonObject = JSON.parse(request.responseText);
                //Making the Empty array equal to the JSON object which is getting parsed converted to the JavaScript Object
                nasaDays = jsonObject;
                //document.getElementById('idAuthor').innerHTML = jsonObject[currentIndex].name;
                // We could have done jsonObject[15].download_url; to access specifically to the fifteenth JSON object inside the array
                //document.getElementById('beerName').src = jsonObject[currentIndex].image_url;

                //jsonObject.createView(container, res_btns);
                //var a = 0; for breakpoints if to test on dev tools
            }
        }
        // open a connection using URL
    request.open("GET", url)
        // Send the GET request
    request.setRequestHeader('api-key', '32isbi7Lug22v8CKogygf5b2EZwpdFhS2OotvWem');

    request.send();

}

*/



// Another async fetch function for making API calls but removed it and made another one  with returning dates integrated
/*
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

*/


// Kind of on load event listener function
// window.addEventListener("DOMContentLoaded", function name)


// preventing default behaviour 
//event.preventDefault()
/*
if (actual_date < min_date || actual_date > new Date()) {
    alert("out of range!!");
} else {

*/