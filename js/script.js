var noon = 12; // 12PM
var evening = 17; // 5PM
var wakeUpTime = 6; // 6AM
var lunchTime = 12; // 12PM
var partyTime = 20; // 10PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
var isPartyTime = false; // set isPartyTime to false
var partTimeButton = document.getElementById("partTimeButton");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

var updateClock = function () {
	var messageText;
	var message = document.getElementById("timeEvent");
	var lolCatImage = document.getElementById("lolcat"); // getting your image element
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		// defining your default image

	if (time == partyTime){
	   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeUpTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good morning!";
	} else if (time > evening) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good Evening!";
	} else {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good afternoon!";
	}

	message.innerText = messageText;
	lolCatImage.src = image;

	showCurrentTime();
};

var showCurrentTime = function() { // display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    
    if (hours >= noon) { // Set hours 
        meridian = "PM"; 
   	} 
	if (hours > noon) { 
        hours = hours - 12; 
    }
    if (minutes < 10) { // Set Minutes
        minutes = "0" + minutes;
    }
    if (seconds < 10) { // Set Seconds
        seconds = "0" + seconds;
    }
	
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!"; // put together the string that displays the time
	
    clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
	if (isPartyTime === false) { // check isPartyTime
	   isPartyTime = true; // if isPartyTime is false, change it to true so we know the button has been clicked
	   time = partyTime; // set time to partyTime so the lolCat clock image and message update to the partyTime image and message
	   partyTimeButton.innerText = "Party Over"; // update button text so you can click to change it back 
	   partyTimeButton.style.background = "#0A8DAB";
	} else {
	   isPartyTime = false;
	   time = new Date().getHours();
	   partyTimeButton.innerText = "PARTY TIME!";
	   partyTimeButton.style.background ="#222";
	}
};

var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);