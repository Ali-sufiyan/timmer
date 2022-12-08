var MiliSecond = 0
var sec = 0
var min = 0
var Hour = 0
var MiliSecond = document.getElementById("displayMiliSecond")
var displaySec = document.getElementById("displaySec")
var displayMin = document.getElementById("displayMin")
var displayhour = document.getElementById("displayhour");

var interval;

function timer(){
    MiliSecond++;
    if(MiliSecond == 10){
        MiliSecond=0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }else if(min == 60){
            min = 0;
            Hour--;
           
        }
        
    }
displayhour.innerHTML = Hour
displayMiliSecond.innerHTML = MiliSecond
displayMin.innerHTML = min
displaySec.innerHTML = sec
}


function startTimer(){
    interval = setInterval(function(){
        timer()}, 0.1)
}
function pauseTimer(){
    clearInterval(interval)
}

function resetTimer(){
    pauseTimer()
    min = 0
    sec = 0
    MiliSecond = 0
    hour = 0
    displayhour.innerHTML = Hour
    displayMiliSecond.innerHTML = MiliSecond
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
}

