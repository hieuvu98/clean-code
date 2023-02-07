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
 
 wakeUp()