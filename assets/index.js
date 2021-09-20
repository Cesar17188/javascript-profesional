const video = document.querySelector("video");
const button = document.getElementById("playButton");

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.tooglePlay = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

const player = new MediaPlayer({ el: video });

// button.onclick = () => player.play();

button.onclick = () => player.tooglePlay();
