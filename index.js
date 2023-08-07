let numberVariable = 3;
let text = "text";
let boolVariable = true;
const constValue = 5;
let dummy;

let a = 4;
let b = 5;

b = a;

console.log(a, b);
b = 6;
console.log(a, b);

number = 5;

console.log(dummy);

let myEvent1 = {
  title: "Fußball",
  location: "Stadion",
  numPlayers: 22,
};

myEvent1.location = "Arena";

let myEvent2 = {
  title: "Volleyball",
  location: "Halle",
  numPlayers: 12,
};

myEvent1 = myEvent2;

myEvent1.location = "Pferderennbahn";

console.log(myEvent1);
console.log(myEvent2);

let myList = [1, "Ulrich", true, undefined, { name: "Ulrich" }];

console.log(myList[4]);

let events = [
  {
    title: "Fußball",
    location: "Stadion",
    numPlayers: 22,
  },
  {
    title: "Volleyball",
    location: "Halle",
    numPlayers: 12,
  },
];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push("Anton");
console.log(numbers);

events.push({
  title: "Tennis",
  location: "Halle",
  numPlayers: 2,
});

console.log(events);
console.log(events[3]);
