

var interval;
var hr=0;
var min=0;
var sec=0;
var msec=0;
var getHr=document.getElementById('hr');
var getMin=document.getElementById('min');
var getSec=document.getElementById('sec');
var getMsec=document.getElementById('msec');

function timer(){
    msec++;
    getMsec.innerHTML=msec;
    if(msec>=100){
        sec++;
        getSec.innerHTML=sec+" : ";
        msec="00";
    }
    else if(sec>=60){
        min++;
        getMin.innerHTML=min+" : ";
        sec="00";
    }
    else if(min>=60){
        hr++;
        getHr.innerHTML=hr+" : ";
        min="00";
    }
    if(msec<10){
        getMsec.innerHTML="0"+msec;
    }
    if(sec<10){
        getSec.innerHTML="0"+sec+" : ";
    }
    if(min<10){
        getMin.innerHTML="0"+min+" : ";
    }
    if(hr<10){
        getHr.innerHTML="0"+hr+" : ";
    }
}
function start(){
clearInterval(interval);
interval = setInterval(timer,10);
}

function pause(){
    clearInterval(interval);
}


function reset(){
    getHr.innerHTML="00 : ";
    getMin.innerHTML="00 : ";
    getSec.innerHTML="00 : ";
    getMsec.innerHTML="00";
    pause();
}


