let words=['Simran','Kabir','Nikki','Alok','Family','Love'];
let wordGiven;
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789`
let button1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    textSize(24);
    noStroke();
    textFont("Times");
    //test();
    generateLoop();
}

function draw() {
   // generateLoop();
}

function generateLoop(){
    for(let p = 0;p<10;p++){
        const rand = int(random(0, words.length-1));
        generateRandomWordAnagram(words[rand])
    }
    
}

async function generateRandomWordAnagram(wordGiven) {
  
  console.log("Word:"+wordGiven);
  wordGivenReverse = reverseString(wordGiven);
  console.log("Reversed:"+wordGivenReverse);
  fill(0);
  textSize(30);
  var splitString = wordGivenReverse.split("");
  for (let i = 0; i < wordGivenReverse.length-1; i++) {
    // first do random letters 
    for(let j = 0;j<5;j++){
      const rand = int(random(0, letters.length-1));
      text(letters[rand], 20+(i*30), 40);
     // await sleep(4000)  
      text(" ", 20+(i*30), 40);
    }
    // then the letter at the spot
    text(splitString[i], 20+(i*30), 40);
  }
  //await sleep(60000);
}



function reverseString(str) {
  return str.split("").reverse().join("");
}


function test(){
  
    for(let i = 0; i<10; i++){
     const rand = int(random(0, letters.length-1));
     fill(0);
     textSize(10);
     text(letters[rand], 20+(i*30), 40);
 
   }
 }


function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}