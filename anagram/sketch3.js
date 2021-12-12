
//let words=['Simran','Kabir','Nikki','Alok','Family','Love'];
let story="This is the story of two siblings, one of them was Simran and the other was Kabir. Both of \n them were very good children. Simran and Kabir loved finding their lost things and used \n  to search it like a detective. They both had a magnifying glass and had a telescope. \n Simran and Kabir used to see distant things from that telescope nearby. \n \n Both of them were also very fond of sports and played especially with their ball. They used \n  to throw it to each other with great pleasure. \n "
let words=story.split(" ");
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%#%%#%%$@$^&*()!%$#^<>?~`

let wordIndex=0;
let word=words[wordIndex];
let letterIndex=0;
let maxRandomLetters=10;
let randomLettersIndex=-1;
let printedWord="";
let row = 90;
let wait = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0,0,0);
    fill(255);
    noStroke();
    textFont("Times");
    frameRate(6);
    textSize(30);
}

function draw(){

    drawText();
}


function drawText(){
    
    fill(0,255,0);
    let letters = word.split("");
    randomLettersIndex++;
    if(randomLettersIndex > maxRandomLetters){
        printedWord=printedWord+letters[letterIndex];
        randomLettersIndex=-1;
        maxRandomLetters=int(random(0, 2));
        letterIndex++;
        if(letterIndex == letters.length){
            letterIndex=0;
            wordIndex++;
            
            if(wordIndex == words.length){
                wordIndex=0;
                printedWord=""
            }
            word=words[wordIndex];
            if(word == "<p>"){
                printedWord=printedWord+"\n"
            }
            else{
                printedWord=printedWord+" "
            }
        }
    }
    else if(randomLettersIndex ==maxRandomLetters ){
        let rL = letters[letterIndex];
        background(0);
        text(printedWord+rL,60+(letterIndex),row);
    }else{
        let rL= getRandomLetter();
        background(0);
        text(printedWord+rL,60+(letterIndex),row);
    }

}

function getRandomLetter(){
    const rand = int(random(0, letters.length-1));
    return letters[rand];
}