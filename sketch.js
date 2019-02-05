
/*
let bgColor;
let rectColors;
let startX;
let startY;
let rectWidth;
let rectMaxHeight;
let rectCount

function setup() {
  bgColor = color(160);
  rectColors = color[];
  startX = 75;
  startY = 75;
  rectCount = 15;
  for (let i = 0; i> rectCount; i++) {
    let r = 237;
    let g = 0;
    let b = floor(random(10,255));
    let c = color (r, g, b);
    rectColors.push(c);
  }
  rectWidth = 450 / rectCount;
  rectMaxHeight = 200;
  createCanvas(600,600);
}
function draw() {
  background(bgColor)
  noStroke();
  //fill(random(255), random(255),random(255))
  for(let i = 0; i< rectCount; i++){
    fill(rectColors[i]);
    let x = startX + i * rectWidth;
    rect(x, startY, rectWidth, random(rectMaxHeight));
  }
}*/

let room = 4;
let arrayColor;
let arrayColorTest;
let quadCount;
let bgColor;
let randomColors;
let valX;
let valY;
let corX; //base coordonnée
let corY;
let startX;
let startY;
let thicc;
let thiccTotal;
let arrayThicc;
let rectWidth;
let rectMaxHeight;
let rectCount;
let rectCount2;
let rectCount3;
let rectCount4;
let randomColor;
let randomColor2;
let randomColor3;
let randomColor4;
let seed;
let tLX;
let tLY;
let tRX;
let tRY;
let bRX;
let bRY;
let bLX;
let bLY;



function setup() {
  /**
  let arrayColorPalette1 = [color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b)];
  let arrayColorPalette2 = [color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b)];
  let arrayColorPalette3 = [color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b)];
  let arrayColorPalette4 = [color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b)];
  let arrayColorPalette5 = [color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b), color(r,g,b)];
  arrayColor = [arrayColorPalette1, arrayColorPalette2, arrayColorPalette3, arrayColorPalette4, arrayColorPalette5 ];
  **/
  arrayColorTest = [color(122,199,79), color(204,255,102), color(93,46,140), color(224,200,121), color(232,116,97), color(145, 25, 200), color(15, 25, 200), color(89, 125, 22)];
  bgColor = color(160)
  rectColor = color(237,0,62,20)
  thiccTotal = 0;
  tLX = 100;
  tLY = 90;
  tRX = 160;
  tRY = 75;
  bRX = 160;
  bRY = 135;
  bLX = 100;
  bLY = 150;
  corX = 0;
  corY = 0;
  valX = 2;
  valY = valX / 2;
  thicc = 25;
  startX = 250;
  startY = 250;
  quadCount = 4;
  randomColors = [];
  for (let i = 0; i < quadCount+1; i++) {
    let r = floor(random(255));
    let g = floor(random(255));
    let b = floor(random(255));
    let c = color (r, g, b);
    randomColors.push(c);
  }
  arrayThicc = []; //15, 32, 10, 12, 20




  randomColor = color(random(255), random(255),random(255));
  randomColor2 = color(random(255), random(255),random(255));
  randomColor3 = color(random(255), random(255),random(255));
  randomColor4 = color(random(255), random(255),random(255));
  rectCount = random(5, 20);
  rectCount2 = random(15, 25);
  rectCount3 = random(5, 20);
  // rectCount = random(10, 70);
  // rectCount2 = random(5, 70-(rectCount));
  // rectCount3 = random(15, 70-(rectCount+rectCount2));
  rectCount4 = 70-(rectCount+rectCount2+rectCount3);
  rectWidth = 450 / rectCount;
  rectMaxHeight = 200
  seed = random(1500)
  createCanvas(600,600);
  background(bgColor)
  test();
}

function test() {
  arrayThicc = [];
  for (let i = 0; i < arrayColorTest.length; i++) { //tableau random d'épaisseur
    let ran = random (3, 15);
    arrayThicc.push(ran);
  }
}

function draw() {
  background(bgColor)
  noStroke();
  corX = startX;
  corY = startY;
  thiccTotal = 0;
//  for (let i = 0; i < arrayColorTest.length; i++) {
  for (let i = 0; i < room; i++) {
    fill(arrayColorTest[i]);
    beginShape();
    vertex(corX, corY); //100 390
    vertex(corX + 60, corY - 15); //160 375
    vertex(corX + 60 + arrayThicc[i], corY - 15 + arrayThicc[i]/2); //200 395
    vertex(corX + 60 + arrayThicc[i], corY - 15 + 60 + arrayThicc[i]/2); //200 455
    vertex(corX + arrayThicc[i], corY + 60 + arrayThicc[i]/2); // 140 470
    vertex(corX, corY + 60); //100 450
    endShape(CLOSE);
    thiccTotal += arrayThicc[i];
    corX = startX + thiccTotal;
    corY = startY + thiccTotal/2;
  }
}

/*
function draw() {
  noStroke();
  //fill(204);
  for (let i = 0; i < rectCount; i++) {
    fill(randomColors[1]);
    quad(tLX + valX*i, tLY + valY*i, tRX + valX*i, tRY + valY*i, bRX + valX*i, bRY + valY*i, bLX + valX*i, bLY + valY*i);
    }
  for (let i = 0; i < rectCount2; i++) {
    fill(randomColors[2]);
    quad(tLX + valX*(i+rectCount), tLY + valY*(i+rectCount), tRX + valX*(i+rectCount), tRY + valY*(i+rectCount), bRX + valX*(i+rectCount), bRY + valY*(i+rectCount), bLX + valX*(i+rectCount), bLY + valY*(i+rectCount));
  }
  for (let i = 0; i < rectCount3; i++) {
    fill(randomColors[3]);
    quad(tLX + valX*(i+rectCount+rectCount2), tLY + valY*(i+rectCount+rectCount2), tRX + valX*(i+rectCount+rectCount2), tRY + valY*(i+rectCount+rectCount2), bRX + valX*(i+rectCount+rectCount2), bRY + valY*(i+rectCount+rectCount2), bLX + valX*(i+rectCount+rectCount2), bLY + valY*(i+rectCount+rectCount2));
  }
  for (let i = 0; i < rectCount4; i++) {
    fill(randomColors[4]);
    quad(tLX + valX*(i+rectCount+rectCount2+rectCount3), tLY + valY*(i+rectCount+rectCount2+rectCount3), tRX + valX*(i+rectCount+rectCount2+rectCount3), tRY + valY*(i+rectCount+rectCount2+rectCount3), bRX + valX*(i+rectCount+rectCount2+rectCount3), bRY + valY*(i+rectCount+rectCount2+rectCount3), bLX + valX*(i+rectCount+rectCount2+rectCount3), bLY + valY*(i+rectCount+rectCount2+rectCount3));
  }

  fill(randomColors[1]);
  corX = startX;
  corY = startY;
  beginShape();
  vertex(corX, corY); //100 390
  vertex(corX + 60, corY - 15); //160 375
  vertex(corX + 60 + thicc, corY - 15 + thicc/2); //200 395
  vertex(corX + 60 + thicc, corY - 15 + 60 + thicc/2); //200 455
  vertex(corX + thicc, corY + 60 + thicc/2); // 140 470
  vertex(corX, corY + 60); //100 450
  endShape(CLOSE);

  fill(randomColors[2]);
  thiccTotal = thicc;
  corX = startX + thiccTotal;
  corY = startY + (thiccTotal/2);
  thicc = 40;
  beginShape();
  vertex(corX, corY); //100 390
  vertex(corX + 60, corY - 15); //160 375
  vertex(corX + 60 + thicc, corY - 15 + thicc/2); //200 395
  vertex(corX + 60 + thicc, corY - 15 + 60 + thicc/2); //200 455
  vertex(corX + thicc, corY + 60 + thicc/2); // 140 470
  vertex(corX, corY + 60); //100 450
  endShape(CLOSE);

  fill(randomColors[3]);
  thiccTotal = thiccTotal + thicc;
  corX = startX + thiccTotal;
  corY = startY + (thiccTotal/2);
  thicc = 20;
  beginShape();
  vertex(corX, corY); //100 390
  vertex(corX + 60, corY - 15); //160 375
  vertex(corX + 60 + thicc, corY - 15 + thicc/2); //200 395
  vertex(corX + 60 + thicc, corY - 15 + 60 + thicc/2); //200 455
  vertex(corX + thicc, corY + 60 + thicc/2); // 140 470
  vertex(corX, corY + 60); //100 450
  endShape(CLOSE);

}
*/
