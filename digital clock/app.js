window.onload = function () {
  var hr = document.getElementById("hour");
  var min = document.getElementById("minute");
  var sec = document.getElementById("second");
  var interval = 1000;
  setInterval(() => {
    const d = new Date();
    var currentHour = d.getHours();
    var currentMinute = d.getMinutes();
    var currentSecond = d.getSeconds();
    hr.innerHTML = currentHour;
    min.innerHTML = currentMinute;
    sec.innerHTML = currentSecond;
  }, interval);
};
