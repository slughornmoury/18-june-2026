function showTime() {

    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleString();

}

setInterval(showTime, 1000);