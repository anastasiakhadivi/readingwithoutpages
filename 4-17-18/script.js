$(document).ready(function(){
	console.log("Ready Freddy!");
	// 1. if you click on "about", and the about section comes up.
	$("#about").click(function(){
	// 2. everything else disappears
		$(".disappear").toggle();
		console.log("hiding/showwing now!");
		// 3. Show writeup
		$("#about-writeup").toggle();
		
	});
	// audio variables
	var audio1 = document.createElement("audio");
 					audio1.src = "media/an-angry-president.m4a";
  					audio1.volume = 0.1;
  				// 	audio1.autoPlay = false;
 					// audio1.preLoad = true;
 					// audio1.controls = true;
 				var audio2 = document.createElement("audio");
 				audio2.src="media/fda-worried.m4a"; 
 				audio1.volume = 0.1;

 				var audio3 = document.createElement("audio");
 				audio3.src= "media/this-new-memorial.m4a"; 
 				audio1.volume = 0.1;

 				var weatherNow = document.createElement("audio");
 				weatherNow.src= "media/weather.m4a";
 				audio1.volume = 0.1;

 				var timeNow = document.createElement("audio");
 				timeNow.src= "media/time.m4a";
 				audio1.volume = 0.1;

 				var storyOne = document.createElement("audio");
 				storyOne.src= "media/fbi-raid.m4a";
 				audio1.volume = 0.1;
 	// audio functions

  $("#news1").mouseover(function() {
    audio1.play();
    console.log("news 1 playing!");
  });
	$("#news1").mouseout(function() {
    audio1.pause();
    console.log("news 1 stopped!");
  });
    $("#news2").mouseover(function() {
    audio2.play();
    console.log("news 2 playing!");
  });
    $("#news2").mouseout(function() {
    audio2.pause();
    console.log("news 2 stopped!");
  });
    $("#news3").mouseover(function() {
    audio3.play();
    console.log("news 3 playing!");
  });
    $("#news3").mouseout(function() {
    audio3.pause();
    console.log("news 3 stopped!");
  });
   $("#weather1").mouseover(function() {
    weatherNow.play();
  });	
   $("#time1").mouseout(function() {
    weatherNow.pause();
  });
    $("#time1").mouseover(function() {
    timeNow.play();
  });
  $("#time").mouseout(function() {
    timeNow.play();
  });	
    $("#news1").click(function() {
    storyOne.play();
    console.log("news1 full story playing");
  });
});