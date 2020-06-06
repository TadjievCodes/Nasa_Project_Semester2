/* deepscan-disable */

const container = document.getElementById('container');
//const date_btn = document.getElementById('go');
//const calendar = document.getElementById('date');
// just added  date1 for the first calendar to start from
//const calendar1 = document.getElementById('date1');

const calendar = document.getElementById('datepicker');

const min_date = new Date('1995, 06, 16');
const today_btn = document.getElementById('today_btn');

console.log(document.getElementsByName('res'))
const res_btns = document.getElementsByName('res')

// Our Global Array to store returned data from Asynchronous calls made
var nasaDays = [];

// Setting the max date as today's date in our Calendar
calendar.setAttribute('max', today_date());
//calendar1.setAttribute('max', today_date());


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
//getData(5).catch(err => {
//  console.log(err)
//})



// Event listner on click to get calendar's value the date
// And some validations so it doesn't go out of tge min_date range and new Date() which is today's range
// The reason I set min_date to "1995-06-16" as that's from when the images and data for APOD API is available
/*
// Second on the right date picker
date_btn.addEventListener('click', function(event) {
    let date_val = calendar.value;
    let date_val1 = calendar1.value;


    let actual_date = new Date(date_val); // convert string to Date Object
    let actual_date1 = new Date(date_val1); // convert string to Date Object

    // preventing default behaviour 
    event.preventDefault()
    if (actual_date < min_date || actual_date > new Date()) {
        console.log("out of range!!")
    } else {
        getData(date_val).catch(err => {
            console.log(err)
        });
    }


    if (actual_date1 < min_date || actual_date1 > new Date()) {
        console.log("out of range!!")
    } else {
        getData(date_val1).catch(err => {
            console.log(err)
        });
    }



})

*/

//const calendar2 = document.getElementById('datetimepicker7');
// just added  date1 for the first calendar to start from
//const calendar3 = document.getElementById('datepicker');
//const calendar3 = document.getElementsByName('input[name = "datefilter"]');

//calendar2.setAttribute('max', today_date());
//calendar3.setAttribute('max', today_date());

/*

date_btn.addEventListener('click', function(event) {
    // let date_val = calendar2.value;
    let date_val1 = calendar3.value;


    // let actual_date = new Date(date_val); // convert string to Date Object
    const calendar3 = document.getElementById('datepicker');
    let actual_date1 = new Date(date_val1); // convert string to Date Object



    // preventing default behaviour 
    event.preventDefault()
    if (actual_date1 < min_date || actual_date1 > new Date()) {
        console.log("out of range!!")
    } else {
        returndates(startDate, endDate).catch(err => {

            console.log(err)
        });
    }

});

*/



/*
    //moment().add(date_val1);
    let datesList = [];

    function returndates(start, end) {
        //let datesList = [];
        let current = moment(start);
        let finalDay = moment(end);
        for (let index = current; index.isBefore(finalDay, 'day'); index.add(1, 'day')) {
            datesList.push(index.format('MM/DD/YYYY'))
        }
        console.log(datesList);
    }


    var iterate = datesList.some(dateslist => {
        dateslist.stringify();

        //  createView(day)
        //nasaDays.push(new Day(day));
    });

*/
/*
    event.preventDefault()
    if (actual_date1 < min_date || actual_date1 > new Date()) {
        console.log("out of range!!")
    } else {
        getData(iterate).catch(err => {
            console.log(err)
        });
    }



})

*/
// First Date Picker
/*
date_btn.addEventListener('click', function(event) {
    let date_val = calendar1.value;
    let actual_date = new Date(date_val); // convert string to Date Object

    // preventing default behaviour 
    event.preventDefault()
    if (actual_date < min_date || actual_date > new Date()) {
        console.log("out of range!!")
    } else {
        getData(date_val).catch(err => {
            console.log(err)
        });
    }

})
*/



// Click event for our today's date button which shows today's data
/*
today_btn.addEventListener('click', function(event) {

    /*
        var myHeaders = new Headers();
        myHeaders.append("api-key", "32isbi7Lug22v8CKogygf5b2EZwpdFhS2OotvWem");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


         

        nasaDays.forEach(function(day) {
            nasaDays.push(new Day(day));
            day.createView(container, res_btns);
        }) 
    */
/*
    var url = "https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU";
    getJSONAsync(url);
    //.createView(container, res_btns);
    /*
     nasaDays.forEach(function(day) {
             day.createView(container, res_btns);
         })
         */
//    getData(today_date())

// Removes the button with this one line after each execution if needed
//event.target.remove();
//}) 


// Any time the call stack is empty, the event loop engine of JS pushes the first task from the callback queue onto the call stack and runs it.
// The Fetch API that I used here is a modern replacement for XMLHttpRequest which avoides callback function hell and kinda simplified

let date_val = calendar.value; // store the value of the calendar in date val first
let actual_date = new Date(date_val); // convert the same string to Date Object



// preventing default behaviour 
//event.preventDefault()
/*
if (actual_date < min_date || actual_date > new Date()) {
    alert("out of range!!");
} else {

*/

/*
setInterval(function() {
    if (response.state() == 'resolved' && response.state() !== 'pending') {
        returndates(picker.startDate, picker.endDate).catch(err => {
            console.log(err)
        });
    }
}); 
*/ // Trying code if already data exists don't send another AJAX request

async function returndates(start, end) {
    const api_link = "https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU&date=";
    let dataList = []
    let current = moment(start)
    let finalDay = moment(end)
    for (let index = current; index.isSameOrBefore(finalDay, 'day'); index.add(1, 'day')) {
        let response = await fetch(api_link + index.format('YYYY-MM-DD'))
        let data = await response.json()
        dataList.push(data)
    }
    console.log(dataList)

    dataList.forEach(function(day) {
        //  createView(day)
        nasaDays.push(new Day(day));
    })
    console.log(nasaDays);


    localStorage.setItem('recentSearches', JSON.stringify(nasaDays));




} // End of the async returndates Function for calling the API of APOD



//} //else closign bracket

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


/*
function helper() {
    var url = "https://api.nasa.gov/planetary/apod?api_key=tahQITZb6AOsbD2e9F8S3BC82ULVNCZ7Mg0scUhU";
    getJSONAsync(url);

}
*/


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

/*

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



// no neeed for slect variable?
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

                /*  nasaDays.forEach(function(day) {
                      day.createView(container, res_btns);
                  }) */
            }


        } // for loop inner
    } // function end




//down.innerHTML = "Elements Added";

/*
const departmentSelection = document.getElementById('displayFilter');

if (departmentSelection.value === optn) { // or optn.value

    nasaDays.forEach(function(day) {
        day.createView(container, res_btns)
    })


}

*/


// Kind of on load event listener function
// window.addEventListener("DOMContentLoaded", function name)