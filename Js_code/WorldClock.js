let time = document.getElementById("time");


setInterval(() => {
    let newTime = new Date();
    time.innerHTML = newTime.toLocaleTimeString();
}, 1000);
