import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()],
});

// button.onclick = () => player.play();
const Playbutton = document.getElementById("playButton");
Playbutton.onclick = () => player.tooglePlay();

const Mutebutton = document.getElementById("muteButton");
Mutebutton.onclick = () => player.mute_unmute();
