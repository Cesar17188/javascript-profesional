import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

// button.onclick = () => player.play();
const Playbutton = document.getElementById("playButton");
Playbutton.onclick = () => player.tooglePlay();

const Mutebutton = document.getElementById("muteButton");
Mutebutton.onclick = () => player.mute_unmute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.error(error);
  });
}
