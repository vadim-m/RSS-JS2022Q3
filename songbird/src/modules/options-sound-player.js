import loseFile from "../media/lose.mp3";
import winFile from "../media/win.mp3";

const loseSound = new Audio(loseFile);
const winSound = new Audio(winFile);

export function playSound(audio) {
  if (audio === "bad") {
    audio = loseSound;
  } else if (audio === "good") {
    audio = winSound;
  }
  // ! set 0.4
  audio.volume = 0.5;
  audio.play();
}
