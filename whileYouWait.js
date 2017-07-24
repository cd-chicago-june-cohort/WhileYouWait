var Hour = 8;
var Minute = 50;
var Period = 'AM';


//            If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
// AM / PM, "in the morning", "in the evening",

if (Period == "AM") {
    if (Minute < 30) {
        console.log("Just After", Hour, "in the morning");
    } else if (Minute > 30) {
        console.log("it's almost", Hour + 1, "in the morning");
    }
} else if (Period == "PM") {
    if (Minute > 30) {
        console.log("it's almost", Hour + 1, "in the evening");
    } else if (Minute < 30) {
        console.log("Just After", Hour, "in the evening");
    }
}