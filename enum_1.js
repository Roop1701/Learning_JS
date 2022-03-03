var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
//One more testing
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
    WeekEnds[WeekEnds["Monday"] = 1] = "Monday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
console.log(WeekEnds.Monday);
