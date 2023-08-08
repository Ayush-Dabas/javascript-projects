window.onload = function () {
  var currentSec = document.getElementById("sec");
  var currentMilSec = document.getElementById("milsec");
  var sec = 0o0;
  var tens = 0o0;
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("stop");
  var buttonReset = document.getElementById("reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    sec = "00";
    currentMilSec.innerHTML = tens;
    currentSec.innerHTML = sec;
  };
  function startTimer() {
    tens++;

    if (tens <= 9) {
      currentMilSec.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      currentMilSec.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      sec++;
      currentSec.innerHTML = "0" + sec;
      tens = 0;
      currentMilSec.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      currentSec.innerHTML = sec;
    }
  }
};
