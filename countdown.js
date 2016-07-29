document.addEventListener('DOMContentLoaded', function() {
	'use strict'; // We're all grownups now, let's use strict mode: https://goo.gl/xmOUmj
	setInterval(update, 99);
});

function update() {
	//get nextSession
	var countdown = document.getElementById("countdown");
	var currentTime = new Date();
	var day = "4" //thursday
	var hour = "19"
	var minute = "00"
	var nextSession = new Date()
	nextSession.setDate(nextSession.getDate() + (4 - 1 - nextSession.getDay() + 7) % 7 + 1);
	nextSession.setHours(hour);
	nextSession.setMinutes(minute);
	nextSession.setSeconds(0);
	nextSession.setMilliseconds(0);
	//get difference
	var t = Date.parse(nextSession) - Date.parse(new Date());
	var days = Math.floor( t/(1000*60*60*24) )
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var seconds = Math.floor( (t/1000) % 60 );
	//construct String
	var output = days + "d:" + pad(hours,2) + "h:" + pad(minutes,2) + "m:" + pad(seconds,2) + "s"
	countdown.innerHTML = output;
}

function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length-size);
}