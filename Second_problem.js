const getDayType=(dayName)=>{
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
const test= getDayType("Bandarban")
console.log(test)