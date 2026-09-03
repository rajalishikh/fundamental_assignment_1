const getCngFare=(distance, isNight=false, waitingMinutes=0)=>{
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
const Cng_Fara=getCngFare(5, false, 10)
console.log(Cng_Fara)