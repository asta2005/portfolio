let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());
if((huidigeTijd.getHours() > 9) || (huidigeTijd.getHours() < 6)){
    console.log("moet naar school")
} else {
console.log("ben vrij")
}