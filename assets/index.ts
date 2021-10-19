import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

// button.onclick = () => player.play();
const playbutton: HTMLElement = document.getElementById("playButton");
playbutton.onclick = () => player.togglePlay();

const mutebutton: HTMLElement = document.getElementById("muteButton");
mutebutton.onclick = () => {
  player.media.muted? player.unmute() : player.mute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.error(error);
  });
}
