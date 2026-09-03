const validateUsername=(user_name)=>{
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
const test_user_name=validateUsername("Admin_Rahim")
console.log(test_user_name)