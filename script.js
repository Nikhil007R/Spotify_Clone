console.log("Welcome to My spotify");

let songIndex = 0;
let audioElement = new Audio("Songs/1.mp3");
let play_pause = document.getElementById("play_pause");
let masterSongName = document.getElementById("masterSongName");

let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
    {songName: "Bheegey Hont", filePath: "Songs/Bheegey_Hont.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Jee Karda", filePath: "Songs/Jee_Karda.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Perfect", filePath: "Songs/Perfect.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "FRIENDS", filePath: "Songs/Friends.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Tum Hi Ho", filePath: "Songs/Tum_hi_ho.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Paniyon Sa", filePath: "Songs/Paaniyon_sa.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Kaafirana", filePath: "Songs/Kaafirana.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Tu Jaane Na", filePath: "Songs/Tu_Jaane-na.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Baby", filePath: "Songs/Baby.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Gulabi Ankhey", filePath: "Songs/Gulaabi_Ankhey.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Dillagi", filePath: "Songs/Dillagi.mp3", coverPath: "media/playlist/Perfect"},
    {songName: "Golden", filePath: "Songs/Golden.mp3", coverPath: "media/playlist/Perfect"},
];

// handle play/ pause click 
play_pause.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play_pause.classList.remove("fa-play-circle");
        play_pause.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{

        audioElement.pause();
        play_pause.classList.remove("fa-pause-circle");
        play_pause.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Listen to events 
audioElement.addEventListener("timeupdate", ()=>{
    // console.log("timeupdate");
    // updating Seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});

// changing progressbar 
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});

Array.from(document.getElementsByClassName("playlistcontainer")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        
        let songName = songs[songIndex].songName;

        songIndex = parseInt(e.target.id);
        audioElement.play();
        masterSongName.innerText = songName;
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        gif.style.opacity = 1;
        play_pause.classList.remove("fa-play-circle");
        play_pause.classList.add("fa-pause-circle");
    })
})

document.getElementById("forward").addEventListener("click", ()=>{
    if (songIndex>=11){
        songIndex = 0; 
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    play_pause.classList.remove("fa-play-circle");
    play_pause.classList.add("fa-pause-circle");
})

document.getElementById("backward").addEventListener("click", ()=>{
    if (songIndex<=0){
        songIndex = 0; 
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    play_pause.classList.remove("fa-play-circle");
    play_pause.classList.add("fa-pause-circle");
})
