let button;
let blueness = 255;
let word = "WHAT DO YOU REMEMBER?";
let a = 100;
let frame = 0;
let selmemories;
let songnames = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    fetch("./json/selectedmems.json").then(function(response) {
        return response.json();
      }).then(function(data) {
    
        console.log(data);
        selmemories = data.selectedmemories;
        
      }).catch(function(err) {
        console.log(`Something went wrong: ${err}`);
      });
    for (let i = 0; i++; i < selmemories.length){
        let song = selmemories[i].Title
        songnames.push(song);
    }

    
  }

function draw(){
    
    let redness = map(mouseX,0,width,0,255);
    let greenness = map(mouseY,0,height,0,255);
    let xPos = mouseX;
    let yPos = mouseY;
    background(redness,greenness,blueness); 
    

    fill(255,255,255,a);
    textSize(20);  
    textAlign(CENTER); 
    text(word, xPos,yPos);
    
    text(testword, 50,50);
    
    makeWhite();
    wordDrop();


    frame++;
}

function makeWhite (){
    if (mouseIsPressed == true){
        word = "I REMEMBER . . ."
        a = 255;
    } else {
        a = 100;
        word = "WHAT DO YOU REMEMBER?"
    }
}

function wordDrop(){
    text('test',random(0,width),random(0,height));
}



function colorChange(){
    if (blueness == 255){
        blueness = 0;
    } else {
        blueness = 255;
    }
}