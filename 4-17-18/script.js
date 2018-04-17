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
 				
 				var audio2 = document.createElement("audio");
 				audio2.src="media/fda-worried.m4a"; 
 				// audio1.volume = 0.1;

 				var audio3 = document.createElement("audio");
 				audio3.src= "media/soup1.m4a"; 
 				// audio1.volume = 0.1;

 				var weatherNow = document.createElement("audio");
 				weatherNow.src= "media/Weather.m4a";
 				// audio1.volume = 0.1;

 				var timeNow = document.createElement("audio");
 				timeNow.src= "media/Time.m4a";
 				// audio1.volume = 0.1;

 				var storyOne = document.createElement("audio");
 				storyOne.src= "media/fbi-raid.m4a";
 				// audio1.volume = 0.1;

 				var storyTwo = document.createElement("audio");
 				storyTwo.src= "media/nuplazid.m4a";

 				var storyThree = document.createElement("audio");
 				storyThree.src="media/soup2.m4a";

 				var sportsScores = document.createElement("audio");
 				sportsScores.src="media/sports.m4a";
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
    timeNow.pause();
  });	
  $("#sports1").mouseover(function(){
  	sportsScores.play();
  });
  $("#sports1").mouseout(function(){
  	sportsScores.pause();
  });
    $("#news1").click(function() {
    storyOne.play();
    console.log("news1 full story playing");
  });
    $("#news2").click(function() {
    storyTwo.play();
    console.log("news2 full story playing");
  });
    $("#news3").click(function() {
    storyThree.play();
    console.log("news3 full story playing");
  });
    $("#news1").dblclick(function(){
    	console.log("i've been double clicked!");
    	$(".weather-boxes").hide();
    	$(".sports-boxes").hide();
    });
});