const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.time');

const h = document.getElementById('hrs');
const m = document.getElementById('mins');
const s = document.getElementById('secs');

const start = document.getElementById('start');


//input
start.addEventListener("click", startUp)
var stat = "off"

function startUp(){
    // stat = "on"
    const hrs = 0;
    const mins = 0;
    const secs = Number(s.value);
    console.log(secs)
    const hours = hrs * 3600000;
    const minutes = mins * 60000;    
    const seconds = secs * 1000;
    const setTime = hours + minutes + seconds;
    const startTime = Date.now();
    console.log(setTime)
    return [setTime, startTime]
}

let value = startUp()

const setTime = value[0]
const startTime =value[1]


    const timerloop = setInterval(countDownTimer);
    

function countDownTimer() {

    const futureTime = startTime + setTime;s
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    console.log(remainingTime)
    const angle = (remainingTime / setTime) * 360;

    //progress indicator
    if (angle > 180) {
        semicircles[2].style.display = 'none';
        semicircles[0].style.transform = 'rotate(180deg)';
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    } else{
        semicircles[2].style.display = 'block';
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    }

    //timer
        let hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        let mins = Math.floor((remainingTime / (1000 * 60)) % 60);
        let secs = Math.floor((remainingTime / 1000) % 60);

        if (secs < 10) secs = '0' + secs;
        if (mins < 10) mins = "0" + mins;
        if (hrs < 10) hrs = "0" + hrs;

        timer.innerText = `${hrs}:${mins}:${secs}`;
    
    

    //5sec-condition
    if (remainingTime <= 6000) {
        semicircles[0].style.backgroundColor = 'red';
        semicircles[1].style.backgroundColor = 'red';
        timer.style.color = 'red';
    }



    //end
    if (remainingTime < 0) {
        clearInterval(timerloop);
        semicircles[0].style.display = 'none';
        semicircles[1].style.display = 'none';
        semicircles[2].style.display = 'none';
        timer.innerText = "00:00:00"
        timer.style.color = 'lightgrey'
    }

    
}
