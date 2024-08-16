function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

function getWeekNum() {
  let currentDate = new Date();
  let startDate = new Date(currentDate.getFullYear(), 0, 1);
  let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  let weekNumber = Math.ceil(days / 7);

  // Display the calculated result
  console.log("Week number of " + currentDate + " is :   " + weekNumber);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function buildRedisUserKey(key, username) {
  return key + "." + Math.abs(hashCode(username) % 256);
}

function hashCode(str) {
  return str
    .split("")
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0
    );
}
function hash() {
  return Math.floor(Math.random() * 5);
}

function getDateStringLearningReport(finishedTime) {
  let date = new Date(finishedTime);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return year + "" + month + "" + day;
}

let username = '975100135';
console.log(
  hash(username)
);

console.log(
  buildRedisUserKey("k12:product:user:profile:info", username)
);