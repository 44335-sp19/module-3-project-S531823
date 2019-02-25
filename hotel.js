/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
function genRand() {
    return Math.round((Math.random() * 300) + 100);
}

// PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires(date) {
    var weekDay, month;
    
    switch (date.getDay()) { //convert week day to String output
        case 0: weekDay = "SUNDAY"; break;
        case 1: weekDay = "MONDAY"; break;
        case 2: weekDay = "TUESDAY"; break;
        case 3: weekDay = "WEDNESDAY"; break;
        case 4: weekDay = "THURSDAY"; break;
        case 5: weekDay = "FRIDAY"; break;
        case 6: weekDay = "SATURDAY"; break;
    }
    
    switch (date.getMonth()) { //convert month to String output
        case 0: month = "JANURARY"; break;
        case 1: month = "FEBRUARY"; break;
        case 2: month = "MARCH"; break;
        case 3: month = "APRIL"; break;
        case 4: month = "MAY"; break;
        case 5: month = "JUNE"; break;
        case 6: month = "JULY"; break;
        case 7: month = "AUGUST"; break;
        case 8: month = "SEPTEMBER"; break;
        case 9: month = "OCTOBER"; break;
        case 10: month  = "NOVEMBER"; break;
        case 11: month  = "DECEMBER"; break;
    }
    
    return "OFFER EXPIRES NEXT " + weekDay + "<br>" + " (" + date.getDate() + " " + month + " " + date.getFullYear() + ")";
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
document.getElementById("specialRate").innerHTML = genRand();

//create a new Date object
var date = new Date();
date.setDate(date.getDate() + 7); //sets date to next week

//Call the function passing the date object to it and write it to the offer ends section on the webpage
document.getElementById("offerEnds").innerHTML = offerExpires(date);
