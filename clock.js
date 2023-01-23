//understan the logic behind the code


// this time hours stored in variable,use for conditional operator,will put image//can use other variable**
var wakeup = 7
var lunch = 12
var noon = 12
var nap = lunch + 2
var party;
var evening = 5


//anonyumous function call with the variable//will call function later,new date,stored id,put condition/***can keep change variable a
var showCurrentTime = function()

{
var clock = document.getElementById("clock")
var CurrentTime = new Date()   //run date function in currenttime

var hours = CurrentTime.getHours()  //stored hrs from new date in hrs variable  //can take hrs from new date*****
var minutes = CurrentTime.getMinutes()
var seconds = CurrentTime.getSeconds()
var meridian = "AM"

//set hrs,min,sec

if(hours>=noon){
	meridian="PM"
}
if(hours>noon){
	hours = hours-12   //**********
}

if(minutes<10){
	minutes = "0" + minutes;
}
if(seconds<10){
	seconds = "0" + seconds;
}
 var clocktime = hours + ':' + minutes + ':' + seconds + " :" + meridian + "!";

clock.innerText = clocktime;

}


var updateclock  = function(){            //**********
var time = new Date().getHours()        //use for putting condition,,put image
var message;                //give the msg at particular moment
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"            //use ternary condition//change the image at particular time

var event = document.getElementById('event')//change message at partiicullar time//acc to time will give value
var lotcat = document.getElementById('lolcat')//change image at partiicullar time//acc to time will give value

//put condition using above variable mention
if(time=party){               //party doesn't store any time
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg"
	message="let's party"
}else if(time>noon){
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	message="wonderful goodafternoon"
}else if(time=lunch){
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"
	message="have enjoy your delicious food"
}else if(time>=evening){
	image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg"
	message="sith with your family freely mind"
}else if(time=nap){
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"
	message="take nap"
}else if(time<noon){
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"
	message="good morning"
}
 console.log(message); 
  event.innerText = message;
  lolcat.src = image;
  
showCurrentTime()
}
updateclock()

var oneSecond = 1000;
setInterval( updateclock, oneSecond);
