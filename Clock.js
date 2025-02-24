const clock = document.querySelector(".clock");
    if (clock) {
        function time() {
            let date = new Date();
            let hours = date.getHours().toString().padStart(2, "0");
            let min = date.getMinutes().toString().padStart(2, "0");
            let sec = date.getSeconds().toString().padStart(2, "0");
            clock.innerHTML = `${hours}:${min}:${sec}`;
        }
        setInterval(time, 1000);
        time(); 
    }