
var song1 = document.getElementsByClassName("song1")[0];
var song2 = document.getElementsByClassName("song2")[0];
var song3 = document.getElementsByClassName("song3")[0];
var play = document.getElementsByClassName("play")[0];
var pause = document.getElementsByClassName("pause")[0];
var skip = document.getElementsByClassName("skip")[0];
var audio = document.getElementsByClassName("audio")[0];
var currentSong = 0;

var songs = ["audio/Flamingosis - Bright Moments - 04 Flight of The Flamingo.mp3", "audio/Flamingosis - Bright Moments - 02 Make me late for breakfast.mp3", "audio/Flamingosis - Bright Moments - 09 An 8 ball affair.mp3"];
 
 window.onload = function() {
 	audio.src = songs[currentSong];
 	audio.play();
 }

 song1.addEventListener("click", function() {
 	audio.src = songs[0];
 	audio.play();
 })

 song2.addEventListener("click", function() {
 	audio.src = songs[1];
 	audio.play();
 })

 song3.addEventListener("click", function() {
 	audio.src = songs[2];
 	audio.play();
 })

 play.addEventListener("click", function() {
 	audio.play();
 })

 pause.addEventListener("click", function() {
 	audio.pause();
 })

 skip.addEventListener("click", function() {
 	currentSong += 1;
 	if (currentSong === 3) {
 		currentSong = 0
 	}
 	audio.src = songs[currentSong];
 	audio.play();
 })

// function Jukebox(playingSong) {
//   this.playingSong = "";
//   this.song_directory = [];
//   this.songNames = [];
//   this.playList = [];
// }

// function Song(songName, title, location){
// 	this.songName = songName;
// 	this.title = title;
// 	this.location = location;
// }

// playSong = function(){
// 	player.play();
// };

// stopSong = function(){
// 	player.pause();
// };



