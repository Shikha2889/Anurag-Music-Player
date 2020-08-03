var form;
var song;
var songs = ['Please Dont Go.mp3','7 Years.mp3','Drag Me Down.mp3','Rescue Me.mp3','Shape of You.mp3','The Man.mp3'];
var cover;
var covers = new Array();
var play,pause,next,previous;
var minute;
var slider;
var scrollSlider;

var songCount = songs.length; // number of songs in the music dir

var currentSong = 0;          // current song number
//var currentCover = 0;

minute = 0;

function preload(){           //load the first song on preload
    song = loadSound('audio/'+songs[currentSong]);
    covers[0] = loadImage('Audio1.jpg');
    covers[1] = loadImage('Audio2.jpg');
    covers[2] = loadImage('Audio3.png');
    covers[3] = loadImage('Audio4.jfif');
    covers[4] = loadImage('Audio5.jfif');
    covers[5] = loadImage('Audio6.jfif');

}

function setup() {
  createCanvas(350,450);
//Play Button
play = createButton('&#9654');
play.position(displayWidth/2-165,displayHeight/2+105);
play.size(75,25);
play.style('background-color', 'rgb(240, 246, 247, 1.00)');
play.style('font-size', '20px');
play.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
play.style('hover', '{background-color: #3E8E41}')
play.style('border-radius','20px');
play.style('border-color','rgb(168, 156, 148, 1.00)')




//play.style('background-color',col);

//Pause button
pause = createButton('&#9208');
pause.position(displayWidth/2-90,displayHeight/2+105)
pause.size(75,25);
pause.style('background-color', 'rgb(240, 246, 247, 1.00)');
//pause.style('font-size', '20px');
pause.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
pause.style('hover', '{background-color: #3E8E41}')
pause.style('border-radius','20px');
pause.style('border-color','rgb(168, 156, 148, 1.00)')


//Next Button
next = createButton('&#9193');
next.position(displayWidth/2+60,displayHeight/2+105);
next.size(75,25);
next.style('background-color', 'rgb(240, 246, 247, 1.00)');
//next.style('font-family','Georgia')
//next.style('font-size', '20px');
next.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
next.style('hover', '{background-color: #3E8E41}')
next.style('border-radius','20px');
next.style('border-color','rgb(168, 156, 148, 1.00)')


//Previous Button
previous = createButton('&#9194');
previous.position(displayWidth/2-15,displayHeight/2+105)
previous.size(75,25);
previous.style('background-color', 'rgb(240, 246, 247, 1.00)');
//previous.style('font-size', '20px');
previous.style('box-shadow', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)');
previous.style('hover', '{background-color: #3E8E41}')
previous.style('border-radius','20px');
previous.style('border-color','rgb(168, 156, 148, 1.00)')


slider = createSlider(0,1,0.5,0.01);
slider.position(displayWidth/2+25,displayHeight/2+85);
slider.style('height', '8px');

//scrollSlider = createSlider(song.currentTime(),song.toFixed(3),0,0.1);
//slider.fill(0);
//slider.style('border-radius','8px');
//slider.style('rotate',200);

//covers.style('border-radius','20%')
//covers[1].scale(0.5)
//Loop sound
//song.loop();
//stop the sound
//song.stop();

//  form = new Form();
}

function draw() {
  background(rgb(255,79,88,1));
//  background(rgb(180, 255, 255));
//  background(rgb(121, 126, 246));
  drawSprites();
  /*let songTime = round(song.currentTime().toFixed(3)/0.60);
  if (songTime>60) {
    minute = 1
  }*/
  song.setVolume(slider.value());
/*  if (currentSong === 6) {
    currentSong = 0;
  }
*/


  //draw the song's name and current time in seconds
//  textFont('Georgia');
  textFont('Bitter');
  textSize(20);
  fill(0);
  text(song,displayWidth/2,displayHeight/2-10);
  text(songs[currentSong], 10, 400);
  image(covers[currentSong],16,30)
//  text(song.currentTime().toFixed(3), 30, 330);

//  text(minute+songTime, 100, 330);



play.mousePressed(()=>{
  playSound();
});
pause.mousePressed(stopSound);



next.mousePressed(() =>{
  currentSong = currentSong+1;
  nextSong(currentSong);

});

previous.mousePressed(()=>{
  currentSong = currentSong-1;
  previousSong(currentSong)

});

}




function nextSong(songNumber){

  if(song.isPlaying()){
    song.stop();
  }

  //load a new Song
  song = loadSound('audio/'+songs[songNumber],resumePlay);

  if (currentSong === 6) {
    currentSong = 0;
  }
//  song.onended('audio/'+songs[songNumber+1],resumePlay)
}

function previousSong(songNumber){

  if(song.isPlaying()){
    song.stop();
  }

  //load a new Song
  song = loadSound('audio/'+songs[songNumber],resumePlay);


  if (currentSong < 0) {
    currentSong = 5;
  }
}



function resumePlay(){
  if(song.isPlaying()){
    song.stop();
  }
  else{
    song.play();
  }
}

/*function previousSong(){
  currentSong = currentSong - 1 ;
  song.stop()
  song.play();

}*/

function playSound(){
  if (song.isPlaying() == false) {
    song.play();

  }
}

function stopSound(){
  if (song.isPlaying() == true) {
    song.stop();
  }
}
