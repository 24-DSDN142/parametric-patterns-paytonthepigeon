//your parameter variables go here!
let rect_width  = 2000;
let rect_height = 2000;


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
  background(139,0,0); //light honeydew green colour
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
  
  
  vertex(85,120);
  
  endShape(CLOSE)
  
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
  
 
  let eyeHeight =10;
  fill(255,255,255);
  stroke(15,11,26);
  ellipse(100,100,35,eyeHeight);//eye
  
  fill(15,11,26);
  stroke(15,11,26);
  ellipse(100,100,10,17);
  
  stroke(255);
  strokeWeight(1);
  
  line(110,120,115,110);
   line(110,120,105,115);
   line(105,115,95,120);
   line(95,120,90,115);
   line(84,118,90,115);
   line(84,118,81,105);

   stroke(15,11,26);
   line(80,105,60,90);
   line(140,90,110,110);
   line(140,120,105,80);
   line(80,100,60,110);
  }

