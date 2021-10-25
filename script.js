let t = 0;
let tim = 0; 
let sec = 0;
let min = 0;
let hou = 0;
let ras = 0;
let timeArr = [];
let tArr =[0,0];
let te = 0;

const countDownEl = document.getElementById("watch");

function timeUp () { 
    if (t < 0){
        t = 0
    } 
    mil = Math.floor((t % 60)) ,
    sec = Math.floor((t/60) % 60),
    min = Math.floor((t/60/60) % 60),
    hou = Math.floor((t/60/60/60) % 24), 
    sec = sec < 10 ? "0" + sec: sec,
    min = min < 10 ? "0" + min: min,
    mil = mil < 10 ? "0" + mil: mil,
    t +=  tim;

    countDownEl.innerHTML = `${hou}:${min}:${sec}:${mil}`;
};

function upWatch () {
    setInterval (timeUp, 1);
};

function startWatch (){
    if (timer.className === ''){
        tim = 1;
        start.className = 'none';
        pause.className = '';
        interval.className = '';
    }else{
        tim = -1;
        start.className = 'none';
        pause.className = '';
        interval.className = 'none';
    }
    houreUp.className = 'none'
    minetUp.className = 'none'
    secondUp.className = 'none'
    houreDown.className = 'none'
    minetDown.className = 'none'
    secondDown.className = 'none'
}

function pauseWatch () {
    tim = 0;
    start.className = '';
    pause.className = 'none';
    if (timer.className == 'none') {
        houreUp.className = ''
        minetUp.className = ''
        secondUp.className = ''
        houreDown.className = ''
        minetDown.className = ''
        secondDown.className = ''
    } 
}

function upInterval (){
    tArr.unshift(t)
    te = tArr[0] - tArr[1];
    
    let mile = Math.floor((te % 60)) ;
    let sece = Math.floor((te/60) % 60);
    let mine = Math.floor((te/60/60) % 60);
    let houe = Math.floor((te/60/60/60) % 24); 
    
    timeArr.unshift(`${hou}:${min}:${sec}:${mil} ( +${houe}:${mine}:${sece}:${mile} )`);
 
    let p = document.createElement('p');
    p.className = 'interval'
    p.innerHTML = timeArr[0];
    intervalDesck.append(p);
}

function resetWatch () {
    t = 0;
    tim = 0;
    te = 0;
    tArr = [0];
    timeArr = [];
    start.className = ''
    pause.className = 'none'
    interval.className = 'none'
    let el = [...document.getElementsByClassName ('interval')];
    el.forEach((ele) => ele.remove())
}

function watchstop (){
    timer.className = ''
    start.className = ''
    reset.className = ''
    stopwatch.className = 'none'
    houreUp.className = 'none'
    minetUp.className = 'none'
    secondUp.className = 'none'
    houreDown.className = 'none'
    minetDown.className = 'none'
    secondDown.className = 'none'
}

function timerWatch () {
    t = 0;
    tim = 0;
    te = 0;
    tArr = [0];
    timeArr = [];
    timer.className = 'none'
    start.className = ''
    reset.className = ''
    stopwatch.className = ''
    interval.className = 'none'
    houreUp.className = ''
    minetUp.className = ''
    secondUp.className = ''
    houreDown.className = ''
    minetDown.className = ''
    secondDown.className = ''
    let el = [...document.getElementsByClassName ('interval')];
    el.forEach((ele) => ele.remove());
}

document.addEventListener("DOMContentLoaded", upWatch);

start.addEventListener("click", startWatch);
pause.addEventListener("click", pauseWatch);
reset.addEventListener("click", resetWatch);
interval.addEventListener ( "click", upInterval);
stopwatch.addEventListener ("click", watchstop);
timer.addEventListener ("click", timerWatch )

houreUp.addEventListener ("click", () => {t = t + 3600*60})
houreDown.addEventListener ("click", () => {t = t - 3600*60}) 
minetUp.addEventListener ("click", () => {t = t + 3600})
minetDown.addEventListener ("click", () => {t = t - 3600})
secondUp.addEventListener ("click", () => {t = t + 60})
secondDown.addEventListener ("click", () => {t = t - 60})