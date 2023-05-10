const audioElement = document.querySelector("audio");

const audioTracks = ["trec1.mp3", "trec2.mp3" , "trec3.mp3" , "trec4.mp3" , "trec5.mp3"];
let currentTrackIndex = 0;

audioElement.src = audioTracks[currentTrackIndex];

//buttons
const playButton = document.querySelector("#play");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

playButton.onclick = (e) => {
  audioElement.paused ? audioElement.play() : audioElement.pause();
  e.target.textContent = audioElement.paused ? "Play" : "Stop";
};

prevButton.onclick = () => {
  currentTrackIndex--;

  if (audioTracks[currentTrackIndex]) {
    audioElement.src = audioTracks[currentTrackIndex];
  } else {
    audioElement.src = audioTracks.at(-1);
    currentTrackIndex = audioTracks.length - 1;
  }
  audioElement.play();
};

nextButton.onclick = () => {
  currentTrackIndex++;

  if (audioTracks[currentTrackIndex]) {
    audioElement.src = audioTracks[currentTrackIndex];
  } else {
    audioElement.src = audioTracks[0];
    currentTrackIndex = 0;
  }
  audioElement.play();
};

console.log(audioElement, "ELEMNT");