// Question No. 1
function describeValue(value){
    if(typeof value==="string" && value.length >0){
        return ` "string | truthy" `
    }
    else if (typeof value==="string" && value.length <= 0){
         return ` "string | falsy" `
    }
    else if (typeof value==="number" && value != 0){
         return ` "number | truthy" `
    }
     else if (typeof value==="number" && value === 0){
         return ` "number | falsy" `
    }
    else if (typeof value==="true"){
         return `"boolean | truthy"`
    }
    else if ( value=== null){
         return `"object | falsy"`
    }
     else if (typeof value==="undefined"){
         return `"undefined | falsy"`
    }
   
   



}

// Question No. 2
function getDayType(dayName){
    let convert_in_lower_case=dayName.toLowerCase();
    if(convert_in_lower_case=== "friday" || convert_in_lower_case==="saturday"){
        return "Weekend"
    }
    else if(convert_in_lower_case === "sunday" || convert_in_lower_case === "monday" || convert_in_lower_case === "tuesday" || convert_in_lower_case === "wednesday" || convert_in_lower_case === "thursday"){
        return "Working Day"
    }
    else {
        return "Invalid Day"

    }


}

// Question No. 3
function validateUsername(user_name){
    const convert_in_lower_case=user_name.toLowerCase()

    if(convert_in_lower_case.length<4){
        return "Too Short"
    }
    else if(convert_in_lower_case.includes(" ")=== true){
        return "No Space Allowed"
    }
    else if (convert_in_lower_case.includes("admin")=== true){
        return "Reserved Word"
    }
    else {
        return "Available"
    }

}

// Question No. 4

function getCngFare(distance, isNight=false, waitingMinutes=0){
    let vara=50;
    if (distance > 2) {
        vara += (distance - 2) * 15;
    }
    vara += waitingMinutes * 2;
    if (isNight) {
        vara += vara* 0.20;
    }
    
    return vara ;

}

// Question No. 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let final_answer = "";

    if (requiredRate <= 6) {
        final_answer = "Comfortable";
    } else if (requiredRate <= 12) {
        final_answer = "Tough";
    } else {
        final_answer = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${final_answer}`;
};







