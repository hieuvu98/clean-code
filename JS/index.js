function getWeekNum() {
  let currentDate = new Date();
  let startDate = new Date(currentDate.getFullYear(), 0, 1);
  let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  let weekNumber = Math.ceil(days / 7);

  // Display the calculated result
  console.log("Week number of " + currentDate + " is :   " + weekNumber);
}


