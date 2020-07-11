
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
        getSec.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        getMin.innerHTML=min;
        sec=0;
    }
    else if(min>=60){
        hr++;
        getHr.innerHTML=hr;
        min=0;

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
    getMin.innerHTML=0;
    getSec.innerHTML=0;
    getMsec.innerHTML=0;
    pause();
}

