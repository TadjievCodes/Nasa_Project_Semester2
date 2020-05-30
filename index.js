/* deepscan-disable */

const container = document.getElementById('container');
const date_btn = document.getElementById('go');
const calandar = document.getElementById('date');
// just added  date1 for the first calendar to start from
const calandar1 = document.getElementById('date1');

const min_date = new Date('1995, 06, 16');
const today_btn = document.getElementById('today_btn');

console.log(document.getElementsByName('res'))
const res_btns = document.getElementsByName('res')

var nasaDays = [];


calandar.setAttribute('max', today_date());

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


// Returns randomly 10 items or datas from the JSON External file 

getData(5).catch(err => {
    console.log(err)
})




date_btn.addEventListener('click', function(event) {
    let date_val = calandar.value;

    event.preventDefault()
    if (date_val < min_date || date_val > new Date()) {
        console.log("out of range!!")
    } else {
        getData(date_val).catch(err => {
            console.log(err)
        });
    }

})

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
})

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

    if (!(Array.isArray(data))) {
        data = [data];
    }

    data.forEach(function(day) {
        //  createView(day)
        nasaDays.push(new Day(day));
    })
    console.log(nasaDays);

    nasaDays.forEach(function(day) {
        day.createView(container, res_btns)
    })

}


/*
function arrayFilling() {

    for (var i = 0; i < nasaDays.length; i++) {
        // check for match


        nasaDays[i].title.push();



    } // for loop end 

} // function end
*/

var select = document.getElementById("displayFilter");

nasaDays = [];


// Main function 
function startUp() {

    for (var i = 0; i < nasaDays.length; i++) {
        var optn = nasaDays[i].data.title;
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    //down.innerHTML = "Elements Added";

    /*
        const departmentSelection = document.getElementById('displayFilter');

        if (departmentSelection.value === optn.value) {


        }
    */


}

// Kind of on load event listener function
// window.addEventListener("DOMContentLoaded", function name)