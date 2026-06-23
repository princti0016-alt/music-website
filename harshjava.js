// Welcome Message
window.onload = function () {
    alert("Welcome to our Music Website!");
};

// Song Counter
let songCount = 0;

function increaseCount() {
    songCount++;
    document.getElementById("count").innerHTML =
        "Songs Opened: " + songCount;
}

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark-mode");
}

// Current Time
function updateTime() {
    document.getElementById("time").innerHTML =
        "Current Time: " + new Date().toLocaleTimeString();
}

setInterval(updateTime, 1000);


