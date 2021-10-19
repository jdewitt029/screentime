function scene1()  {



    this.setup = function() {

      background(100);

    }

    this.enter = function(){

      background(100);

    }

    this.draw = function(){

      textAlign(CENTER);
      textSize(65);
      fill(20,20,105);
      text("HELP SCREEN", width/2, 100);
      textSize(45);
      text("Use the keys '1' or 'h' to get back to this screen.",
      width/2, 200);
      text("Use the key '2' to go to first scene.",
      width/2, 300);
      text("After checking the first scene, hit '3' to go to next scene",
      width/2, 400);
      text("Use the buttons on the TV to navigate through that scene",
      width/2, 500);
      textSize(35);
      text("Guide to help read scene 1", 1150 ,740 );
      image(hourHelp, 100,550, 800,500);




    }



    this.mousePressed = function(){


    }


  }




function scene2()  {



    this.setup = function() {

      background(30);

    }

    this.enter = function(){

      background(30);


    }

    this.draw = function(){

      this.getMapsHours();
      this.textLayout();
      this.keyBox();

    }

    this.getMapsHours = function(){

      for(i = 0; i < 14; i++){

        dayNum = days.dayNumber[i];


        for(j = 0; j < 16; j++ ){
          phone = map(dayNum.phoneH[j], 0,59, 0,barHeight);
          cpu = map(dayNum.cpuH[j], 0,59, 0,barHeight);
          tv = map(dayNum.TVH[j], 0,59, 0,barHeight);
          other = map(dayNum.otherH[j], 0,59, 0,barHeight);
          // console.log(phone);

          stroke(105,25,105,10);

          //red other bars
            // rect((i* 135) + 25, (j* 65) + 25, 100, 60);
          fill(50,0,0,20);
          rect((i* xMultiply) + 150, (j* yMultiply) + 50, 25, barHeight);
          noStroke();
          fill(255 - (random(70)) ,50 ,50);
          rect((i* xMultiply) + 150, (j* yMultiply) + 50, 25, other);


          //green tv bars
          // fill(0,150,50);
          // rect((i* 135) + 25, (j* 65) + 25, 75, 60);
          stroke(105,25,105,10);
          fill(0,50,0,20);
          rect((i* xMultiply) + 125, (j* yMultiply) + 50, 25, barHeight);
          noStroke();
          fill(50,255- random(80),50);
          rect((i* xMultiply) + 125, (j* yMultiply) + 50, 25, tv);

          //blue cpu bars
          // fill(0,100,150);
          // rect((i* 135) + 25, (j* 65) + 25, 50, 60);
          stroke(105,25,105,10);
          fill(0,50,50,20);
          rect((i* xMultiply) + 100, (j* yMultiply) + 50, 25, barHeight);
          noStroke();
          fill(50,255-random(70),255- random(50));
          rect((i* xMultiply) + 100, (j* yMultiply) + 50, 25, cpu);

          //yellow phone bars
          // fill(150,150,50);
          // rect((i* 135) + 25, (j* 65) + 25, 25, 60);
          stroke(105,25,105,10);
          fill(50,50,0,20);
          rect((i* xMultiply) + 75, (j* yMultiply) + 50, 25, barHeight);
          noStroke();
          fill(255-random(30),255 - random(60),50);
          rect((i* xMultiply) + 75, (j* yMultiply) + 50, 25, phone);




        }
      }

    }

    this.textLayout = function() {

      var counter = 1;
      var count = 1;
      // days layout
      for (var j = 100; j < width-200; j +=120){

        textSize(20);

        fill(55 + random(100),25,55 + random(100),50);
        text("Day" + counter, j,35);

        counter++;

  }
    for (var i = 88; i < height; i +=64){

      text("H" + count, 27,i);

      count++;

    }

    }

    this.keyBox = function() {

      stroke(105,25,105,50);
      text("KEY", width-120,35);
      textSize(28);

      fill(255-random(30),255 - random(60),50);
      rect(width-150, 50, 25, height - 72);
      fill(0);
      textSize(25);
      text("P", width - 146, 100);
      text("H", width - 146, 150);
      text("O", width - 146, 200);
      text("N", width - 146, 250);
      text("E", width - 146, 300);

      fill(50,255-random(40),255- random(20));
      rect(width-125, 50, 25, height - 72);
      fill(0);
      text("C", width - 122, 400);
      text("P", width - 122, 450);
      text("U", width - 122, 500);

      fill(50,255- random(50),50);
      rect(width-100, 50, 25, height - 72);
      fill(0);
      text("T", width - 96, 600);
      text("V", width - 96, 650);

      fill(255-random(60),50,50);
      rect(width-75, 50, 25, height - 72);
      fill(0);
      text("O", width - 71, 750);
      text("T", width - 71, 800);
      text("H", width - 71, 850);
      text("E", width - 71, 900);
      text("R", width - 71, 950);

    }

    this.mousePressed = function(){



    }


  }

// TOTAL VISUALIZATION

  function scene3()  {



      this.setup = function() {

        background(20);
        btnSpriteP.position.x = 445;
        btnSpriteP.position.y = height -55;
        btnSpriteP.scale = .3;
        btnSpriteP.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteP.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene4);
        };
        btnSpriteC.position.x = 720;
        btnSpriteC.position.y = height -55;
        btnSpriteC.scale = .3;
        btnSpriteC.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteC.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene5);
        };

        btnSpriteT.position.x = 955;
        btnSpriteT.position.y = height -55;
        btnSpriteT.scale = .3;
        btnSpriteT.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteT.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene6);
        };

        btnSpriteO.position.x = 1295;
        btnSpriteO.position.y = height -55;
        btnSpriteO.scale = .3;
        btnSpriteO.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteO.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene7);
        };

        btnSpriteAll.position.x = 1625;
        btnSpriteAll.position.y = height -55;
        btnSpriteAll.scale = .3;
        btnSpriteAll.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteAll.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene3);
        };




      }

      this.enter = function(){

        background(20);

      }

      this.draw = function(){


        background(20);


       //

             image(tvOutline, 0,0);



             var pTot = map(phoneTotal,0,15744,0,1654);
             var cTot = map(cpuTotal,0,15744,0,1654);
             var tvTot = map(tvTotal,0,15744,0,1654);
             var oTot = map(otherTotal,0,15744,0,1654);

             // fill(255);
             // textSize(100);
             // text(pTot, 500,500);
             // text(cTot, 700,700);
             // text(tvTot, 800,800);
             // text(oTot, 300,300);
             //
             // rect(125,82,1655,100);







             //red other
             fill(255,50,50);
             rect(1437,88,oTot,869);
             fill(255,50,50,50);
             rect(1437,88,oTot + 25,869);
             fill(255,50,50,75);
             rect(1437,88,oTot + 20,869);
             fill(255,50,50,100);
             rect(1437,88,oTot + 15,869);
             fill(255,50,50,125);
             rect(1437,88,oTot + 10,869);
             fill(255,50,50,150);
             rect(1437,88,oTot + 5,869);
             //green tv
             fill(50,250,50);
             rect(1198,88,tvTot,869);
             fill(50,250,50);
             rect(1198,88,tvTot,869);
             fill(50,250,50,50);
             rect(1198,88,tvTot + 25,869);
             fill(50,250,50,75);
             rect(1198,88,tvTot + 20,869);
             fill(50,250,50,100);
             rect(1198,88,tvTot + 15,869);
             fill(50,250,50,125);
             rect(1198,88,tvTot + 10,869);
             fill(50,250,50,150);
             rect(1198,88,tvTot + 5,869);
             //blue cpu
             fill(50,220,250);
             rect(524,88,cTot,869);
             fill(50,220,250,50);
             rect(524,88,cTot + 25,869);
             fill(50,220,250,75);
             rect(524,88,cTot + 20,869);
             fill(50,220,250,100);
             rect(524,88,cTot + 15,869);
             fill(50,220,250,125);
             rect(524,88,cTot + 10,869);
             fill(50,220,250,150);
             rect(524,88,cTot + 5,869);
            // yellow phone

             fill(255,250,50);
             rect(126,88,pTot,869);
             fill(255,250,50,50);
             rect(126,88,pTot + 25,869);
             fill(255,250,50,75);
             rect(126,88,pTot + 20,869);
             fill(255,250,50,100);
             rect(126,88,pTot + 15,869);
             fill(255,250,50,125);
             rect(126,88,pTot + 10,869);
             fill(255,250,50,150);
             rect(126,88,pTot + 5,869);

             fill(255,250,50);
             rect(126,88,pTot,869);
             fill(255,250,50,50);
             rect(126- 25,88,pTot ,869);
             fill(255,250,50,75);
             rect(126- 20,88,pTot ,869);
             fill(255,250,50,100);
             rect(126- 15,88,pTot ,869);
             fill(255,250,50,125);
             rect(126 - 10,88,pTot,869);
             fill(255,250,50,150);
             rect(126- 5,88,pTot ,869);


           //   for (i = 0; i <14; i++){
           //
           //
           //   for (j = 0; j< 16; j++){
           //
           //     phoneTotal = days.dayNumber[i].phoneH[j] + phoneTotal;
           //     cpuTotal = days.dayNumber[i].cpuH[j] + cpuTotal;
           //     tvTotal = days.dayNumber[i].TVH[j] + tvTotal;
           //     otherTotal = days.dayNumber[i].otherH[j] + otherTotal;
           //     fill(255);
           //
           //   }
           // }


             // textSize(100);
             // text(phoneTotal, 100,500);
             // text(cpuTotal, 100,300);
             // text(tvTotal, 400,700);
             // text(otherTotal, 700,700);

             // image(tv, 0,0);


             drawSprites();

             // noLoop();


      }



      this.mousePressed = function(){



      }


    }


// PHONE DATA

  function scene4()  {



      this.setup = function() {

        background(20);
        btnSpriteP.position.x = 445;
        btnSpriteP.position.y = height -55;
        btnSpriteP.scale = .3;
        btnSpriteP.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteP.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene4);
        };
        btnSpriteC.position.x = 720;
        btnSpriteC.position.y = height -55;
        btnSpriteC.scale = .3;
        btnSpriteC.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteC.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene5);
        };

        btnSpriteT.position.x = 955;
        btnSpriteT.position.y = height -55;
        btnSpriteT.scale = .3;
        btnSpriteT.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteT.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene6);
        };

        btnSpriteO.position.x = 1295;
        btnSpriteO.position.y = height -55;
        btnSpriteO.scale = .3;
        btnSpriteO.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteO.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene7);
        };
        btnSpriteAll.position.x = 1625;
        btnSpriteAll.position.y = height -55;
        btnSpriteAll.scale = .3;
        btnSpriteAll.onMousePressed = function() { this.animation.goToFrame(1);};
        btnSpriteAll.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showScene(scene3);
        };





          }

          this.enter = function(){

            background(20);


          }

          this.draw = function(){

            background(50,50,0,100);

            image(tvOutline, 0,0);
            var pTot = map(phoneTotal,0,15744,0,1654);



            fill(255,250,50);
            rect(126,88,pTot,869);
            textSize(45);
            fill(80,80,0);
            text("Phone Usage", 178, 150);
            text("28.19% Usage", 170, 925);
            textSize(35);
            fill(255,250,50);
            text("Total Time", 600, 200 + 30);
            text(phoneTotal + " / 13440 Minutes", 600, 300 + 30);
            text("63.15 / 224 Hours", 1000,300 + 30);
            text("Daily Average", 600, 425 + 30);
            text("270.64 minutes/day", 600,550 + 30);
            text("3.94 hours/day", 1000,550 + 30);
            text("Hourly Average", 600, 675 + 30);
            text("16.91 minutes/hour", 600 ,800 + 30);








            drawSprites();

          }



          this.mousePressed = function(){


          }


        }

        //CPU DATA

    function scene5()  {



            this.setup = function() {

              background(20);
              btnSpriteP.position.x = 445;
              btnSpriteP.position.y = height -55;
              btnSpriteP.scale = .3;
              btnSpriteP.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteP.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene4);
              };
              btnSpriteC.position.x = 720;
              btnSpriteC.position.y = height -55;
              btnSpriteC.scale = .3;
              btnSpriteC.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteC.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene5);
              };

              btnSpriteT.position.x = 955;
              btnSpriteT.position.y = height -55;
              btnSpriteT.scale = .3;
              btnSpriteT.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteT.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene6);
              };

              btnSpriteO.position.x = 1295;
              btnSpriteO.position.y = height -55;
              btnSpriteO.scale = .3;
              btnSpriteO.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteO.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene7);
              };
              btnSpriteAll.position.x = 1625;
              btnSpriteAll.position.y = height -55;
              btnSpriteAll.scale = .3;
              btnSpriteAll.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteAll.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene3);
              };


            }

            this.enter = function(){

              background(20);

            }

            this.draw = function(){

              background(0,50,50,20);
              image(tvOutline, 0,0);
              textSize(100);
              var cTot = map(cpuTotal,0,15744,0,1654);

              fill(50,220,250);
              rect(524,88,cTot,869);

              textSize(45);
              fill(0,80,80);
              text("CPU Usage", 734, 150);
              text("47.72% Usage", 720, 925);
              textSize(35);
              fill(50,220,250);
              text("106.90 / 224 Hours", 1220,300 + 30);
              text("7.63 hours/day", 1220,550 + 30);
              textAlign(RIGHT);
              text("Total Time", 495, 200 + 30);
              text(cpuTotal + " / 13440 Minutes", 495, 300 + 30);

              text("Daily Average", 495, 425 + 30);
              text("458.14 minutes/day", 495,550 + 30);

              text("Hourly Average", 495, 675 + 30);
              text("28.63 minutes/hour", 495 ,800 + 30);

              drawSprites();
            }



            this.mousePressed = function(){


            }


          }

          //TV DATA

    function scene6()  {



              this.setup = function() {

                background(20);
                btnSpriteP.position.x = 445;
                btnSpriteP.position.y = height -55;
                btnSpriteP.scale = .3;
                btnSpriteP.onMousePressed = function() { this.animation.goToFrame(1);};
                btnSpriteP.onMouseReleased = function() {
                  this.animation.goToFrame(0);
                  mgr.showScene(scene4);
                };
                btnSpriteC.position.x = 720;
                btnSpriteC.position.y = height -55;
                btnSpriteC.scale = .3;
                btnSpriteC.onMousePressed = function() { this.animation.goToFrame(1);};
                btnSpriteC.onMouseReleased = function() {
                  this.animation.goToFrame(0);
                  mgr.showScene(scene5);
                };

                btnSpriteT.position.x = 955;
                btnSpriteT.position.y = height -55;
                btnSpriteT.scale = .3;
                btnSpriteT.onMousePressed = function() { this.animation.goToFrame(1);};
                btnSpriteT.onMouseReleased = function() {
                  this.animation.goToFrame(0);
                  mgr.showScene(scene6);
                };

                btnSpriteO.position.x = 1295;
                btnSpriteO.position.y = height -55;
                btnSpriteO.scale = .3;
                btnSpriteO.onMousePressed = function() { this.animation.goToFrame(1);};
                btnSpriteO.onMouseReleased = function() {
                  this.animation.goToFrame(0);
                  mgr.showScene(scene7);
                };
                btnSpriteAll.position.x = 1625;
                btnSpriteAll.position.y = height -55;
                btnSpriteAll.scale = .3;
                btnSpriteAll.onMousePressed = function() { this.animation.goToFrame(1);};
                btnSpriteAll.onMouseReleased = function() {
                  this.animation.goToFrame(0);
                  mgr.showScene(scene3);
                };


              }

              this.enter = function(){

                background(20);

              }

              this.draw = function(){

                background(0,50,0,10);

                image(tvOutline, 0,0);

                var tvTot = map(tvTotal,0,15744,0,1654);
                fill(50,250,50);
                rect(1198,88,tvTot,869);


                textSize(45);
                fill(0,90,0);
                text("TV Usage", 1216, 150);
                textSize(35);
                text("16.91% Usage", 1203, 925);
                fill(50,250,50);
                text("37.87 / 224 Hours", 1460,300 + 30);
                text("2.71 hours/day", 1460,550 + 30);
                textAlign(RIGHT);
                textSize(35);

                text("Total Time", 1150, 200 + 30);
                text(tvTotal + " / 13440 Minutes", 1150, 300 + 30);

                text("Daily Average", 1150, 425 + 30);
                text("162.29 minutes/day", 1150,550 + 30);

                text("Hourly Average", 1150, 675 + 30);
                text("10.14 minutes/hour", 1150 ,800 + 30);


                drawSprites();
              }



              this.mousePressed = function(){


              }


            }

// OTHER DATA

    function scene7()  {



            this.setup = function() {

              background(20);
              btnSpriteP.position.x = 445;
              btnSpriteP.position.y = height -55;
              btnSpriteP.scale = .3;
              btnSpriteP.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteP.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene4);
              };
              btnSpriteC.position.x = 720;
              btnSpriteC.position.y = height -55;
              btnSpriteC.scale = .3;
              btnSpriteC.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteC.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene5);
              };

              btnSpriteT.position.x = 955;
              btnSpriteT.position.y = height -55;
              btnSpriteT.scale = .3;
              btnSpriteT.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteT.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene6);
              };

              btnSpriteO.position.x = 1295;
              btnSpriteO.position.y = height -55;
              btnSpriteO.scale = .3;
              btnSpriteO.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteO.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene7);
              };
              btnSpriteAll.position.x = 1625;
              btnSpriteAll.position.y = height -55;
              btnSpriteAll.scale = .3;
              btnSpriteAll.onMousePressed = function() { this.animation.goToFrame(1);};
              btnSpriteAll.onMouseReleased = function() {
                this.animation.goToFrame(0);
                mgr.showScene(scene3);
              };


                    }

            this.enter = function(){

            background(20);

                    }

            this.draw = function(){

              background(50,0,0,50);

              image(tvOutline, 0,0);
              textSize(100);
              var oTot = map(otherTotal,0,15744,0,1654);
              fill(255,50,50);
              rect(1437,88,oTot,869);

              textSize(45);
              fill(50,0,0);
              text("Non Screen", width - 425, 150);
              text("Usage", width - 375, 200);
              text("24.33% Usage", width-450, 925);
              textSize(35);
              textAlign(RIGHT);
              fill(250,50,50);
              text("54.50 / 224 Hours", 950,300 + 30);
              text("3.89 hours/day", 950,550 + 30);

              text("Total Time", 1415, 200 + 30);
              text(otherTotal + " / 13440 Minutes", 1415, 300 + 30);

              text("Daily Average", 1415, 425 + 30);
              text("233.57 minutes/day", 1415,550 + 30);

              text("Hourly Average", 1415, 675 + 30);
              text("14.59 minutes/hour", 1415 ,800 + 30);

              drawSprites();

                  }

            this.mousePressed = function(){


          }


      }
