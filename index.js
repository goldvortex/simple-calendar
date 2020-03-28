const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
const selectDate = document.getElementById("selectDate");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const monthyear = document.getElementById("monthyear");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
previous.addEventListener("click", () => {
  currentMonth === 0 ? (currentYear -= 1) : currentYear;

  currentMonth === 0 ? (currentMonth = 11) : (currentMonth -= 1) % 12;

  presentCalendar(currentMonth, currentYear);
});

next.addEventListener("click", () => {
  currentMonth === 11 ? (currentYear += 1) : currentYear;

  currentMonth = (currentMonth + 1) % 12;

  presentCalendar(currentMonth, currentYear);
});

selectDate.addEventListener("change", () => {
  currentYear = parseInt(event.target.value.split("-")[0]);
  currentMonth = parseInt(event.target.value.split("-")[1]) - 1;
  presentCalendar(currentMonth, currentYear);
});

// console.log(currentMonth);

function presentCalendar(month, year) {
  let firstDay = new Date(year, month).getDay(); // Need to pass to the father function the currentYear and currentMonth on the call

  monthyear.innerHTML = `${months[month]} ${currentYear}`;
  tb1 = document.getElementById("calendar-body");
  tb1.innerHTML = "";

  // console.log(firstDay);
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > checkDays(year, month)) {
        break;
      } else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }
    tb1.appendChild(row);
  }
}

presentCalendar(currentMonth, currentYear);

function checkDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
