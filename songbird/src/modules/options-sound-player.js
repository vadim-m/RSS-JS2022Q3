import loseFile from "../media/lose.mp3";
import winFile from "../media/win.mp3";

const loseSound = new Audio(loseFile);
const winSound = new Audio(winFile);

export function playSound(audio) {
  if (audio === "lose") {
    audio = loseSound;
  } else if (audio === "win") {
    audio = winSound;
  }

  // HTML5 autoplay error hack
  let resp = audio.play();

  if (resp !== undefined) {
    resp
      .then((_) => {
        // play
      })
      .catch((error) => {
        //show error
      });
  }
}
