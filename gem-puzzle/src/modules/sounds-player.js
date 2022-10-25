import { createElement, appendElement } from "./utils";
import moveFile from "../media/move.mp3";
import shuffleFile from "../media/shuffle.mp3";
import winFile from "../media/win.mp3";

const moveSound = new Audio(moveFile);
const shuffleSound = new Audio(shuffleFile);
const winSound = new Audio(winFile);

let isPlay = true;

export function playSound(audio) {
  if (audio === "move") {
    audio = moveSound;
  } else if (audio === "shuffle") {
    audio = shuffleSound;
  } else if (audio === "win") {
    audio = winSound;
  }

  if (isPlay) {
    audio.play();
  }
}

export function togglePlaySound() {
  isPlay = !isPlay;
}
