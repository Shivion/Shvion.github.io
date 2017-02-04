var audio;

document.addEventListener('DOMContentLoaded', function() {
	'use strict';
	setInterval(update, 1000);
	audio = new Audio('Drum_of_Endurance.mp3');
});

function inputChanged(checkboxElem) {
	if (!checkboxElem.checked) {
		audio.pause();
		audio.currentTime = 0;
	}
}

function update() {
	//get nextSession
	var countdown = document.getElementById("countdown");
	var nextSessionElement = document.getElementById("nextSession");
	var currentTime = new Date();
	var day = "5"; //Friday for me (CST)
	var hour = "04"; //10pm
	var minute = "00";
	var nextSession = new Date();
	nextSession.setUTCHours(hour);
	nextSession.setUTCMinutes(minute);
	nextSession.setUTCSeconds(0);
	nextSession.setUTCMilliseconds(0);
	nextSession.setUTCDate(currentTime.getUTCDate() + (day + (7 - currentTime.getUTCDay())) % 7);
	if(currentTime.getUTCHours() >= hour && currentTime.getUTCMinutes() >= minute && nextSession.getUTCDate() == currentTime.getUTCDate())
	{
		nextSession.setUTCDate(nextSession.getUTCDate()+7)
	}
	//get difference
	var now = new Date(); 
	var t = Date.UTC(nextSession.getUTCFullYear(), nextSession.getUTCMonth(), nextSession.getUTCDate(),  nextSession.getUTCHours(), nextSession.getUTCMinutes(), nextSession.getUTCSeconds()) - Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
	var days = Math.floor( t/(1000*60*60*24) )
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var seconds = Math.floor( (t/1000) % 60 );
	//construct String
	var output = days + "d:" + pad(hours,2) + "h:" + pad(minutes,2) + "m:" + pad(seconds,2) + "s";
	countdown.innerHTML = output;
	nextSessionElement.innerHTML = nextSession.toString();
	var audioCheckbox = document.getElementById("audio");
	if(audioCheckbox.checked && seconds <= 1 && days == 0 && hours == 0 && minutes == 0){
		audio.play();
	}
}

function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length-size);
}