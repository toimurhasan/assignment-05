function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  if (hour === 12) {
    const time = hour + ":" + minute + ":" + second + " PM";
    return time;
  } else if (hour > 12) {
    const pmHour = hour - 12;
    const time = pmHour + ":" + minute + ":" + second + " PM";
    return time;
  } else if (hour === 0) {
    const time = 12 + ":" + minute + ":" + second + " AM";
    return time;
  } else {
    const time = hour + ":" + minute + ":" + second + " AM";
    return time;
  }
}

function getToday() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const index = today.getDay();
  return days[index];
}

function getLongDate() {
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
    "Dec",
  ];

  const today = new Date();
  const monthIndex = today.getMonth();
  const month = months[monthIndex];
  const date = today.getDate();
  const year = today.getFullYear();

  longDate = month + " " + date + " " + year;
  return longDate;
}
