//test
//your parameter variables go here!
let moonshadowHeight=37
let eyeHeight =15;
let moonHieght =60;
let cresent =true;
let cloud =true;
let star = true;
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(139,0,0); //red vampire like colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  stroke(15,11,26);
  fill(15,11,26);
  
  beginShape();
  
  vertex(70,175);
  vertex(130,175);
  
  vertex(145,116);
  vertex(135,110);
  vertex(120,118);
  vertex(130,120);
  vertex(120,167);
  vertex(100,100);
endShape(CLOSE);

beginShape();
if(star){

stroke(200,10,0)
  fill(255,200,200)

  vertex(165,92)
  vertex(170,92)
  vertex(165,95)
  vertex(165,150);
 vertex(170,100)
 vertex(180,94)
vertex(170,86)
 //vertex(180,90)
vertex(170,50)
endShape(CLOSE);
}
if (cloud){
  stroke(200,10,0)
  fill(255,200,200)
beginShape()
vertex (110,30)
vertex(200,30)
vertex(190,20)
vertex(180,25)
vertex(160,15)
  endShape(CLOSE)
}
  beginShape


  
    fill(15,11,26);
    stroke(15,11,26);
    
  ellipse(115,90,20,60);
  ellipse(85,90,20,60);
  
  fill(255,255,255);
  stroke(15,11,26);
  
  ellipse(115,91,10,60)
  ellipse(85,91,10,60)
  
  fill(15,11,26);
  stroke(15,11,26);
  ellipse(100, 100, 50, 55); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
  
 
  
  fill(255,255,255);
  stroke(15,11,26);
  ellipse(100,100,35,eyeHeight);//eye
  
  fill(15,11,26);
  stroke(15,11,26);
  ellipse(100,100,10,17);
  
  stroke(255);
  strokeWeight(1);
  
  line(110,120,115,110);//mouth
   line(110,120,105,115);//mouth
   line(105,115,95,120);//mouth
   line(95,120,90,115);//mouth
   line(84,118,90,115);//mouth
   line(84,118,81,105);//mouth
   line(104,109,95,108);
line(1,1,1,200);//column
   
   stroke(15,11,26);
   line(80,105,60,90);
   line(140,90,110,110);
   line(140,120,105,80);
   line(80,100,60,110);


//endShape(CLOSE);
stroke(220,70,60);
fill(220,70,60);

ellipse(50,40,moonHieght,moonHieght);//moon


if (cresent){
stroke(139,0,0);
fill(139,0,0);

ellipse(30,40,moonshadowHeight,moonshadowHeight);
}


  }

