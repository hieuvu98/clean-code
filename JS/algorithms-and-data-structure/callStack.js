function takeShower() {
  return "Showimg";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Pmaremks", "Tomato", "Eggs"];
  return items[Math.floor[Math.random() * items.length]];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
}

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    //
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(str) {
  if (str == "") return false;
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
  // and get the length of the string
  const len = str.length;

  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;

  // proper tail call optimized recursion
  return isPalindrome(str.slice(1, -1));
}

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(flatten([1, 2, 3, [4, 5]]));
