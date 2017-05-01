// SC.initialize ({
// 	client_id: 'f665fc458615b821cdf1a26b6d1657f6'
// })

var audio = document.getElementById("song");
var songName = document.getElementsByClassName("songName");
var artistName = document.getElementsByClassName("artistName");

var song1 = document.getElementsByClassName("song1")[0];
var song2 = document.getElementsByClassName("song2")[0];
var song3 = document.getElementsByClassName("song3")[0];

var play = document.getElementsByClassName("play")[0];
var pause = document.getElementsByClassName("pause")[0];
var skip = document.getElementsByClassName("skip")[0];

var mingo1 = new Songs("Flight of The Flamingo", "Flamingosis", "Bright Moments", "audio/Flamingosis - Bright Moments - 04 Flight of The Flamingo.mp3")
var mingo2 = new Songs("Make me late for breakfast", "Flamingosis", "Bright Moments", "audio/Flamingosis - Bright Moments - 02 Make me late for breakfast.mp3")
var mingo3 = new Songs("An 8 ball affair", "Flamingosis", "Bright Moments", "audio/Flamingosis - Bright Moments - 09 An 8 ball affair.mp3")

var firstJukeBox = new JukeBox(mingo1);
	firstJukeBox.addSong(mingo2);
	firstJukeBox.addSong(mingo3);

function Songs (song, artist, album, fileName) {
	this.song = song;
	this.artist = artist;
	this.ablum = album;
	this.fileName = fileName;
}

function JukeBox(songNow) {
	this.songList = [];
	this.songList.push(songNow);
	this.currentSong = this.songList[0];
	this.currentSongNum = 0;
	this.nextSong = nextSong;
	this.pauseSong = pauseSong;
	this.playSong = playSong;
	var juke = this

	this.addSong = addSong;
	// console.log(this.songList);

	function addSong(song) {
		this.songList.push(song);
}

	function playSong(){
		var songToPlay = juke.currentSong;
		console.log(audio);
		audio.src = juke.songList[juke.currentSongNum].fileName;
		audio.play();

	}

	function pauseSong(){
		var pause = audio.pause();
	}

	function nextSong(){
		// console.log(this);
			
		if(juke.currentSongNum >= (juke.songList.length - 1)){
			juke.currentSongNum = 0;

			var nextSongNum = juke.currentSongNum;
			var skipSong = juke.songList[nextSongNum].song;

			juke.currentSong = skipSong;

			juke.playSong();

		}else{
			
			juke.currentSongNum += 1 ;
			var nextSongNum = juke.currentSongNum;

			var skipSong = juke.songList[nextSongNum].song;
			
			juke.currentSong = skipSong;
			juke.playSong();
		}
	}
}


song1.addEventListener("click", function(){
	firstJukeBox.currentSong = mingo1;
	console.log(firstJukeBox);
	audio.src = firstJukeBox.currentSong.fileName;
	audio.play()
})

song2.addEventListener("click", function(){
	firstJukeBox.currentSong = mingo2;
	audio.src = firstJukeBox.currentSong.fileName;
	audio.play()
})

song3.addEventListener("click", function(){
	firstJukeBox.currentSong = mingo3;
	audio.src = firstJukeBox.currentSong.fileName;
	audio.play()
})


window.addEventListener("load", firstJukeBox.playSong);

play.addEventListener("click", firstJukeBox.playSong);
pause.addEventListener("click", firstJukeBox.pauseSong);
skip.addEventListener("click", firstJukeBox.nextSong);




// window.addEventListener("load", function(){
// 	var songIndex = firstJukeBox.currentSongNum;
// 	audio.src = firstJukeBox.currentSong.fileName;
// 	audio.play();
// })


// SC.stream("/tracks/266939296").then(function(player) {
// 	player.play();  
// });



// SC.stream("/tracks/171572321").then(function(player) {
// 	player.play();  
// });






