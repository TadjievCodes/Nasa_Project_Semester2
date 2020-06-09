Project using Nasa's A.P.O.D API README:

1) When you open up the date picker on the right side, after selecting the date range let's say 1 to 5, click apply always. And then on the left
side, it will populate the dropdown and you can see the list of titles in the dropdown list. There will be validations in the
date picker as well, further date than today and more than 30 days cannot be selected.  
The dropdown might take time to be filled if you select more than 2 or 3 days. Please wait as it's coming from Nasa's API and especially it's also loading and adding heavy videos that are coming from youtube or vimeo. If you click immediately and nothing comes up just click again and the dropdown should be filled accordingly.  

2) /*
 There's internal server error for June 4 so don't count it as a mistake . I have checked the URL so that's an error from NASA
 {
"code": 500,
"msg": "Internal Service Error",
"service_version": "v1"
}

 */
 To fix that issue > I did  if (optn && optn != "") in startUp function so it'll never add an empty data to the dropdown list    

3) // Validation of task 9 if anything includes undefined then change to Unknown happens inside the CLass Contructor Day inside day.js  

4) I also made a choice of video in SD or HD quality by selecting the button. So that the Nasa data could display the videos from Youtube and Vimeo
which is done as a method inside the CLass Contructor Day inside day.js  

5) Datepicker is acquired from datepicker.com and so the validations were a bit easier to do with the possibilities of this datepicker

6) selecting = () => arrow function shows the chosen item in the dropdown and creates a display of the data with the method from the Class Constructor

7) I know how to use the AJAX method which you taught us. But I tried to use another newer and more efficient way with Fetch API and 
also converted it into async await function which leads into lesser code.  

8) Starfield.js was inspired from the following youtube video https://www.youtube.com/watch?v=17WoOqgXsRM  
I think it looks better with these stars anmation and there's a regulation for the speed of the stars down on the right side which is fixed in CSS

9) I kept some of my old commented not active code as I like to look back and remember What I did and what I have changed

10) I used 'DD/MM/YYYY' in the Datepicker as written in the Project Details and 'YYYY-MM-DD' format in the query Details for API as stated in the outline  

11) Task 6 of the Project was implemeted within the returndates async function where it checks to store into the localStorage with setItem if it doesn't
exist in the localStorage already so that there won't be a double call of the Fetch API if the data already exists