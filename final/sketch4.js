

var days;
var tvOutline, tv;
var phone,cpu,tv,other,dayNum;
var phoneTotal = 0, cpuTotal = 0, tvTotal = 0, otherTotal = 0;
var barHeight = 50;
var xMultiply = 120;
var yMultiply = 64;
var phoneTotal = 3789;
var cpuTotal = 6414;
var tvTotal = 2272;
var otherTotal = 3270;
var button;




function preload(){

  days = loadJSON("days2.json");
  tvOutline = loadImage("images/tv2.png");
  hourHelp = loadImage("images/hour.png");


  button = loadAnimation('assets/button001.png', 'assets/button003.png');

  btnSpriteP = createSprite(-500,0);
  btnSpriteP.addAnimation('normal', button);

  btnSpriteC = createSprite(-500,0);
  btnSpriteC.addAnimation('normal', button);

  btnSpriteT = createSprite(-500,0);
  btnSpriteT.addAnimation('normal', button);

  btnSpriteO = createSprite(-500,0);
  btnSpriteO.addAnimation('normal', button);

  btnSpriteAll = createSprite(-500,0);
  btnSpriteAll.addAnimation('normal', button);

  // help = loadAnimation('play_assets/happy002.png', 'play_assets/happy005.png');
  // helpBtnSprite = createSprite(-500,0);
  // helpBtnSprite.addAnimation('normal', help);
  //
  // next = loadAnimation('play_assets/next001.png',
  // 'play_assets/next007.png');
  // nextBtnSprite = createSprite(750,750);
  // nextBtnSprite.addAnimation('normal', next);

}

  // button = loadAnimation('assets/button001.png', 'assets/button003.png');
  // btnSprite = createSprite(-500,0);
  // btnSprite.addAnimation('normal', button);





function setup() {

  createCanvas(1920,1080);
  background(100);
  // textAlign(CENTER);
  noStroke();
  mgr = new SceneManager();
 // Preload scenes. Preloading is normally optional
 // ... but needed if showNextScene() is used.

 mgr.addScene (scene1);
 mgr.addScene (scene2);
 mgr.addScene (scene3);
 mgr.addScene (scene4);
 mgr.addScene (scene5);
 mgr.addScene (scene6);
 mgr.addScene (scene7);


 btnSpriteP.animation.stop();
 btnSpriteC.animation.stop();
 btnSpriteT.animation.stop();
 btnSpriteO.animation.stop();
 btnSpriteAll.animation.stop();


 mgr.showNextScene();




}

function draw() {

  mgr.draw();


}



function mousePressed()
{

  // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   // mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case '4':
            mgr.showScene( scene4 );
            break;
        case '5':
            mgr.showScene( scene5 );
            break;
        case '6':
            mgr.showScene( scene6 );
            break;
        case '7':
            mgr.showScene( scene7 );
            break;
         case 'h':
            mgr.showScene( scene1 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
