// Author: Lyndon H Modomo
// Created for: SDI Online Course (SDI 1201) : Project 1 / Deliverable 1
// Created on: 12/19/11

// Define/Set all the variables for this JS file
var goodWave = "Paddle to catch the wave.",
	badWave = "Let the wave pass and wait for another.",
	toManySurfers = "To many surfer\'s",
	surfersCatchingWave = 1,
	surfersInPosition = 3,  //number of surfers in position to catch a wave
	catchWave = true;

// Output each variable above in console.log
console.log ("(goodWave) This will display if a wave is catchable = ", goodWave);
console.log ("(badWave) This will display if a wave is not a good wave to take = ", badWave);
console.log ("(toManySurfers) If there are to many surfer's attempting to catch a wave this will output = ", toManySurfers);
console.log ("(surfersCatchingWave) Checks to see how many surfer's are catching a wave.  If more then 2 then let the wave pass = ", surfersCatchingWave);
console.log ("(surfersInPosition) Checks to see how many surfers are in position to catch the wave = ", surfersInPosition);
console.log ("(catchWave) This is to decide if the wave is catchable or not (if True then catching the wave) = ", catchWave);

//A very simplistic situation with "catching a wave, surfing"
if (catchWave === true) {
	if (surfersCatchingWave <= 2) {
		console.log (goodWave);
		surfersInPosition = surfersInPosition - 1;
		console.log ("Number of Surfers Now Position to Catch the Next Wave: " + surfersInPosition);
	}else {
		console.log (toManySurfers);
		console.log (badWave);
	};

}else {
	if (toManySurfers === "To many surfer\'s"){
		console.log (badWave);
	}else {
		var comment = toManySurfers + " " + badWave; 
		console.log (comment);
	};
};