var schooldagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];

var vandaag = new Date().getDay();


if (vandaag >= 1 && vandaag <= 5) {
    var huidigeSchooldag = schooldagen[vandaag - 1];
    console.log("Het is " + huidigeSchooldag + ", dus ik moet naar school.");
} else {
    console.log("Het is geen schooldag, dus ik ben vrij.");
}

