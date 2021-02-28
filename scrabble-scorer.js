// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   let newWord=input.question();
   return newWord;
};

console.log(oldScrabbleScorer(initialPrompt()));

let simpleScore= (usr) => usr.length;

//console.log(simpleScore("Bolal"));


let vowelBonusScore= (usrA)=>{
let count=0;
 
 
let vowels=["a","e","i","o","u"];
for(let i=0; i<usrA.length; i++){
  if(vowels.includes(usrA[i])===true){
    count+=3;
    continue;
  }
count++;
  
}
return count;
}
 //console.log(vowelBonusScore("bilal"));

let scrabbleScore = (word) => {
  word = word.toUpperCase();
  let points = 0;

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        points += parseInt(pointValue);
      }
    }
  }
  return points;
};


const scoringAlgorithms = [
 {
    name: "simple",
  description: "Simple Score",
  scorerFunction:simpleScore,
 },
 {
name:"vowel",
description:"Bonus-vowels",
scorerFunction:vowelBonusScore,
 },
 {
name:"scrabble",
description:"Scrabble",
scorerFunction:scrabbleScore,
 }
];

function scorerPrompt(a) {
  let i =0; 
  let info = scoringAlgorithms.map(
    (e)=> `${i++} ${e.name} : ${e.description}`
  );
  info = info.join("\n");
   console.log(info);
  const num = input.question("Pick Algorihm : ");

console.log("Algorithm name: ", scoringAlgorithms[num].name);
console.log("ScorerFunction result: ", scoringAlgorithms[num].scorerFunction(a));

}

function transform(prm) {


const newObj={};
for(let i of Object.entries(prm)){
  for(let v of i[1]){
    newObj[v]=i[0];
  }

}
return newObj;
};

newObj=transform(oldPointStructure)
console.log(newObj);
//console.log(oldPointStructure);


let newPointStructure;

function runProgram() {
  
   scorerPrompt(initialPrompt());
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

