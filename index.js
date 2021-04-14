song_name = "music.mp3"
let play_btn = document.querySelector("#play");
let previous_btn = document.querySelector("#previous");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play-button");
let isPlaying = false;
let total_time = 0;
let currentTime = 0;

let Song = new Audio();
window.onload = playSong

function playSong(){
    Song.src = song_name;

    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            Song.play();
            isPlaying = true;
            total_time = Song.duration;
            range.max = duration;
            play_img.src = "pause.jpg";
        } else {
            Song.pause();
            isPlaying = false;
            play_img.src = "play.jpg";
        }

        range.addEventListener("change", function(){ 
            Song.currentTime = range.value;
        })

        Song.addEventListener("timeupdate", function(){
            range.value = Song.currentTime;
        })
        Song.addEventListener("ended", function(){
            Song.currentTime = 0;
            Song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "play.jpg";
        })
    })
}