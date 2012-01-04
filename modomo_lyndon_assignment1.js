// Author: Lyndon H Modomo
// Created for: SDI Online Course (SDI 1201) : Project 1 / Deliverable 1
// Created on: 12/19/11

// Define/Set all the variables for this JS file
var goodWave = "Paddle to catch the wave.",
	badWave = "Let the wave pass and wait for another.",
	toManySurfers = "To many surfer\'s",
	surfersCatchingWave = 2,
	surfersInPosition = 4,  //number of surfers in position to catch a wave.  This cannot be larger the surfersCatchingWave.
	surfPercent = 0,
	catchWave = true,
	inPosition = true		//in position 1 or 2 = True, else false.
	;

// Output each variable above in console.log
console.log ("(goodWave) This will display if a wave is catchable = ", goodWave);
console.log ("(badWave) This will display if a wave is not a good wave to take = ", badWave);
console.log ("(toManySurfers) If there are to many surfer's attempting to catch a wave this will output = ", toManySurfers);
console.log ("(surfersCatchingWave) Checks to see how many surfer's are catching a wave.  If more then 2 then let the wave pass = ", surfersCatchingWave);
console.log ("(surfersInPosition) Checks to see how many surfers are in position to catch the wave = ", surfersInPosition);
console.log ("(surfPercent) Percent of surfer's (who are in position) catching a wave = ", surfPercent);
console.log ("(catchWave) This is to decide if the wave is catchable or not (if True then attempt to catch the wave) = ", catchWave);
console.log ("(inPosition) Is the surfer in position 1 or 2 (in surf etiquette), to not interrupt another surfer = ", inPosition);

//A very simplistic situation with "catching a wave, surfing"
if (catchWave && inPosition) {
	if (surfersCatchingWave <= 2) {
		console.log (goodWave);
		surfPercent = surfersCatchingWave / surfersInPosition;
		console.log ("Percent of surfer's (who are in position) attempting to catch a wave = ", surfPercent);
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