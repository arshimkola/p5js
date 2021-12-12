const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(24);
  noStroke();
  textFont("Times");
  test();
}

function draw() {
  
  
  fill(255);
}

function test(){
  
   for(let i = 0; i<10; i++){
    const rand = int(random(0, letters.length-1));
    fill(0);
    textSize(10);
    text(letters[rand], 20+(i*30), 40);

  }
}