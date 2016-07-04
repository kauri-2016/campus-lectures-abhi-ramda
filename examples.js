var R = require('ramda')

// CURRYING______________________________________________________________
/*In mathematics and computer science, currying is the technique of translating
the evaluation of a function that takes multiple arguments
(or a tuple of arguments) into evaluating a sequence of functions,
each with a single argument.*/

console.log(R.multiply(2,10));

var multiplyByTwo = R.multiply(2);
// console.log(multiplyByTwo(10));

// CURRYING in RAMDA_____________________________________________________
/*Currying proceeds from right-to-left: when you skip some arguments,
Ramda assumes you’ve skipped the ones on the right. Because of that,
Ramda functions that take an array and a function normally expect the
function as the first argument and the array as the second.
*/

var functionFirst = R.map(R.add(1), [1,2,3]);
// console.log(functionFirst);

var addoneToAll = R.map(R.add(1));
// console.log(addoneToAll([1,2,3]))



// Example______________________________________________________________
var jobs = [
  { title: "IT Assistance", day: "Monday", money: 80, type: "Casual", startDate:'2016-07-06', complete:true },
  { title: "Promo Staff", day: "Friday", money: 40, type: "Casual", startDate:'2016-07-07', complete:false },
  { title: "Leaflet drop", day: "Friday", money: 30, type: "Casual", startDate:'2016-07-07', complete:true },
  { title: "Finance tutor needed", day: "Monday", money: 80, type: "Casual", startDate:'2016-07-08', complete:false },
  { title: "Usher for promo event needed", day: "Saturday", money: 100, type: "Casual", startDate:'2016-07-09', complete:true },
  { title: "Night club work", day: "Saturday", money: 80, type: "Casual", startDate:'2016-07-10', complete:true },
  { title: "Cafe work", day: "Saturday", money: 90, type: "Temp", startDate:'2016-07-20', complete:true }
];

var incomplete = R.filter(R.where({complete: R.equals(false)}));
// console.log(incomplete(jobs))

var importantFields = R.project(['title', 'startDate']);
// console.log(importantFields(jobs));

var sortByDate = R.sortBy(R.prop('startDate'));
// console.log(sortByDate(jobs));

var ImpFieldsSortByDate = R.compose(sortByDate,importantFields)
// console.log(ImpFieldsSortByDate(jobs));

var reverseSortByDateDescend = R.compose(R.reverse,sortByDate, ImpFieldsSortByDate)
// console.log(reverseSortByDateDescend(jobs));

var sortByDate = R.filter(R.where({startDate: R.equals('2016-07-07')})))
console.log(sortByDate(jobs));
