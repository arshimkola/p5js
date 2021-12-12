let wordInput;
let wordGiven;
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789`
let button1;

function setup() {
  createCanvas(200, 200);
  background("beige");
  noStroke();
  textFont("Times");

  createSpan("What's your name? "); 
  wordInput = createInput();
  wordInput.changed(entryCallback);

  button1 = createButton("Press me"); 
  button1.mouseClicked(button1Clicked);
}

function draw() {
  // put drawing code here
}


function entryCallback(){
  wordGiven = entry1.value();
  console.log("Word:"+wordGiven);
  wordGivenReverse = reverseString(wordGiven);
  console.log("Reversed:"+wordGivenReverse);
}


function button1Clicked() {
  wordGiven = entry1.value();
  console.log("Word:"+wordGiven);
  wordGivenReverse = reverseString(wordGiven);
  console.log("Reversed:"+wordGivenReverse);
  fill(0);
  textSize(10);
  var splitString = wordGivenReverse.split("");
  for (let i = 0; i < wordGivenReverse.length-1; i++) {
    // first do random letters 
    for(let j = 0;j<20;j++){
      const rand = int(random(0, letters.length-1));
      text(letters[rand], 20+(i*30), 40);
      sleep(200);
    }
    // then the letter at the spot
    text(splitString[i], 20+(i*30), 40);

    text(entry1.value(), random(width),
          random(height));
  }

}



function reverseString(str) {
  return str.split("").reverse().join("");
}