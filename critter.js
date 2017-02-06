/* PLAN:
- create and object that has blank values */

var critter = {
  "name": "",
  "legs": "",
  "houseBroken": ""
};

/*
- tell user what is happening */

alert("we're gong to make a critter together! get read to answer questions!");

/*- prompt user for name*/

/*- prompt user for "legs" value
  -check that it is integer
  -check between 0-100
    -if check fails, ask again!*/

var name = prompt("name?", "elvis");
critter.name=name;

if (name == "elivs") {
  critter.name = "elvis FOR REAL";
} else {
  critter.name = name;
}

console.log(critter);


/* -prompt user for "housebroken"
  - if value "yes", set to true
  - if value "no", set to false
  - if value is neither, ask again
  - of check succeeds sets "legs" value
  
  
- loop through object, output each value to console
*/

var legs = prompt("how many legs does" + critter.name + " have? legs? must be a number between 1-100");

var parsedLegs = parseInt(legs);

if(parsedLegs >= 0 && parsedLegs < 100) {
  critter.legs = parsedLegs;
}

console.log(critter);


/*housebroken*/

var houseBroken = prompt("housebroken? yes or no");
if(houseBroken == "yes") {
  critter.houseBroken = true;
} else if (houseBroken == "no"){
  critter.houseBroken = false; 
} else {
  //ask again
}

console.log(critter);

for (var key in critter) {
  console.log(key);
  console.log(critter[key]);
}

