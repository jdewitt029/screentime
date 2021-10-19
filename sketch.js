
// started recording data Thursday May/5/2021

var days, bgImage;
var phone,cpu,tv,other,dayNum;
var phoneTotal = 0, cpuTotal = 0, tvTotal = 0, otherTotal = 0;
var barHeight = 50;
var xMultiply = 120;
var yMultiply = 64;

function preload(){

  days = loadJSON("days2.json");


}


function setup() {
  createCanvas(1920,1080);

  background(20);
  noStroke();
  textAlign(CENTER);
  textSize(20);

}

function draw() {
  //
  // getMapsHours();
  // textLayout();
  // keyBox();
  // getMapDays();
  noLoop();
  for (i = 0; i <14; i++){


  for (j = 0; j< 16; j++){

    phoneTotal = days.dayNumber[i].phoneH[j] + phoneTotal;
    cpuTotal = days.dayNumber[i].cpuH[j] + cpuTotal;
    tvTotal = days.dayNumber[i].TVH[j] + tvTotal;
    otherTotal = days.dayNumber[i].otherH[j] + otherTotal;
      // total = days.dayNumber[6].phoneH[j] + total;
  }
}
  console.log(phoneTotal);
  console.log(cpuTotal);
  console.log(tvTotal);
  console.log(otherTotal);
}


function getMapsHours(){






  //   dayNum = days.dayNumber[i];
  //
  //
  //   for(j = 0; j < 16; j++ ){
  //     phone = map(dayNum.phoneH[j], 0,59, 0,barHeight);
  //     cpu = map(dayNum.cpuH[j], 0,59, 0,barHeight);
  //     tv = map(dayNum.TVH[j], 0,59, 0,barHeight);
  //     other = map(dayNum.otherH[j], 0,59, 0,barHeight);
  //     // console.log(phone);
  //
  //     stroke(105,25,105,10);
  //
  //     //red other bars
  //       // rect((i* 135) + 25, (j* 65) + 25, 100, 60);
  //     fill(50,0,0,20);
  //     rect((i* xMultiply) + 150, (j* yMultiply) + 50, 25, barHeight);
  //     noStroke();
  //     fill(255 - (random(70)) ,50 ,50);
  //     rect((i* xMultiply) + 150, (j* yMultiply) + 50, 25, other);
  //
  //     //green tv bars
  //     // fill(0,150,50);
  //     // rect((i* 135) + 25, (j* 65) + 25, 75, 60);
  //     stroke(105,25,105,10);
  //     fill(0,50,0,20);
  //     rect((i* xMultiply) + 125, (j* yMultiply) + 50, 25, barHeight);
  //     noStroke();
  //     fill(50,255- random(80),50);
  //     rect((i* xMultiply) + 125, (j* yMultiply) + 50, 25, tv);
  //
  //     //blue cpu bars
  //     // fill(0,100,150);
  //     // rect((i* 135) + 25, (j* 65) + 25, 50, 60);
  //     stroke(105,25,105,10);
  //     fill(0,50,50,20);
  //     rect((i* xMultiply) + 100, (j* yMultiply) + 50, 25, barHeight);
  //     noStroke();
  //     fill(50,255-random(70),255- random(50));
  //     rect((i* xMultiply) + 100, (j* yMultiply) + 50, 25, cpu);
  //
  //     //yellow phone bars
  //     // fill(150,150,50);
  //     // rect((i* 135) + 25, (j* 65) + 25, 25, 60);
  //     stroke(105,25,105,10);
  //     fill(50,50,0,20);
  //     rect((i* xMultiply) + 75, (j* yMultiply) + 50, 25, barHeight);
  //     noStroke();
  //     fill(255-random(30),255 - random(60),50);
  //     rect((i* xMultiply) + 75, (j* yMultiply) + 50, 25, phone);
  //
  //
  //
  //
  //   }
  // }
  }

  function textLayout(){
    var counter = 1;
    var count = 1;
    // days layout
    for (var j = 125; j < width-120; j +=120){

      fill(55 + random(100),25,55 + random(100),50);
      text("Day" + counter, j,35);

      counter++;

}
  for (var i = 88; i < height; i +=64){

    text("H" + count, 40,i);

    count++;

  }

  }


  function keyBox(){

    stroke(105,25,105,50);
    text("KEY", width-100,35);

    fill(255-random(30),255 - random(60),50);
    rect(width-150, 50, 25, height - 72);
    fill(0);
    textSize(25);
    text("P", width - 138, 100);
    text("H", width - 138, 150);
    text("O", width - 138, 200);
    text("N", width - 138, 250);
    text("E", width - 138, 300);

    fill(50,255-random(40),255- random(20));
    rect(width-125, 50, 25, height - 72);
    fill(0);
    text("C", width - 112, 400);
    text("P", width - 112, 450);
    text("U", width - 112, 500);

    fill(50,255- random(50),50);
    rect(width-100, 50, 25, height - 72);
    fill(0);
    text("T", width - 87, 600);
    text("V", width - 87, 650);

    fill(255-random(60),50,50);
    rect(width-75, 50, 25, height - 72);
    fill(0);
    text("O", width - 61, 750);
    text("T", width - 61, 800);
    text("H", width - 61, 850);
    text("E", width - 61, 900);
    text("R", width - 61, 950);


  }

// function  getMapDays(){
//
//
//
//       for (i = 0; i < 14; i++){
//           dayNum = days.dayNumber[i]
//         for (var j = 0; j < 16; j++) {
//
//
//         phone = dayNum.phoneH[j];
//
//         total = phone++;
//
//         console.log(total);
//         noLoop();
//       }
//
//     }
//
//   }
