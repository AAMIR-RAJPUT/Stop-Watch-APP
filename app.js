//define vars to hold time values

let ms=0;
let sec=0;
let min=0;
let hrs=0;
//define vars to hold "display values"


let displayms=0;
let displaysec=0;
let displaymin=0;
let displayhrs=0;
//define var to hold setinterval() function
let interval = null;

// define var to hold stopwatch status

let status="stopped"


//stopwatch function (logic to determine when to increment next value, etc.)
function stopwatch(){

ms++;
//logic to determine when to increment next value
if (ms / 100 ===1){
    ms=0;
    sec++;
    if(sec / 60 ===1){
    sec = 0;
    min++;
        if (min / 60 ===1){
        min = 0;
        hrs++;
        }
    }
}
//if milliseconds/seconds/minutes/hours are only one digit, add a loading 0 to the value
if (ms < 10){
    displayms = "0" + ms.toString();
}
else{
    displayms=ms;
}
if (sec < 10){
    displaysec = "0" + sec.toString();
}
else{
    displaysec=sec;
}
if (min < 10){
    displaymin = "0" + min.toString();
}
else{
    displaymin=min;
}
if (hrs < 10){
    displayhrs = "0" + hrs.toString();
}
else{
    displayhrs=hrs;
}
//dispaly updated time values to user
document.getElementById("display").innerHTML = displayhrs + ":" + displaymin + ":" + displaysec+":"+ displayms;
}


function startstop(){

    if(status ==="stopped"){

    //startthe stopwatch (by calling the setinterval() function)
    interval=window.setInterval(stopwatch,10);
document.getElementById("startstop").innerHTML = "Stop";
status="started"
}
    else{
    window.clearInterval(interval);
document.getElementById("startstop").innerHTML = "Start";
status="stopped";

    }
}
//function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    ms=0;
    sec=0;
    min=0;
    hrs=0;
    document.getElementById("display").innerHTML="00:00:00:00";
    document.getElementById("startstop").innerHTML="Start";

}