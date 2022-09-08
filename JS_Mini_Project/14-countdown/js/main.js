var countDown;
const date_time = document.querySelector(".date_time");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const dateSection = document.querySelector(".date-selection");
var radios = document.querySelectorAll('input[type=radio][name="test-option"]');
console.log(radios);
radios.forEach((radio) =>
  radio.addEventListener("change", function (e) {
    console.log(radio.value);
    if (radio.value === "default") {
      dateSection.classList.remove("show");
      console.log("default", countDown);
      clearInterval(countDown);
      defaultSetup();
    } else {
      clearInterval(countDown);
      dateSection.classList.add("show");
    }
  })
);
const form = document.querySelector("#form");
const start_time = document.querySelector("#start");
const end_time = document.querySelector("#end");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(end_time.value);
  let endDate = new Date(end_time.value);
  console.log(endDate);
  startCounter(endDate);
});

const defaultSetup = function () {
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  // const endDate = new Date(2022, 8, 8, 17, 30, 00);
  const endDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 30, 0);
  startCounter(endDate);
};

const startCounter = function (endDateValue) {
  const endDate = endDateValue;
  const dayIndex = endDate.getDay();
  const dateVal = endDate.getDate();
  const monthIndex = endDate.getMonth();
  const year = endDate.getFullYear();
  const hours = endDate.getHours();
  const mins = endDate.getMinutes();
  date_time.textContent = `${weekdays[dayIndex]},\u00A0 ${dateVal} ${months[monthIndex]} ${year} \u00A0 ${hours}:${mins} AM`;
  const endTime = endDate.getTime();
  countDown = setInterval(getRemainingTime, 1000, endTime);
  console.log(countDown);
  getRemainingTime(endTime);
};

// Get current date and add 10 days to get future end date

const getRemainingTime = function (endTime) {
  const currentTime = new Date().getTime();
  const t = endTime - currentTime;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  //console.log(t);
  if (t < 0) {
    // clearing the setInterval when current time is bigger than future end date so it will stop calling getRemainingTime function
    clearInterval(countDown);
    deadline.innerHTML = `<h6 class='expired'> Sorry, this giveaway has expired.</h6>`;
  }
};
