import { IAnimationState } from '../interfaces/interfaces';

function getPositionCenter(el: HTMLElement) {
  const { top, left, width, height } = el.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function getDistanceBetweenElements(a: HTMLElement, b: HTMLElement) {
  const posA = getPositionCenter(a);
  const posB = getPositionCenter(b);

  return Math.hypot(posA.x - posB.x, posA.y - posB.y);
}

export function animateMovement(car: HTMLElement, distance: number, animationTime: number) {
  let animationStart: number | null = null;
  const state: IAnimationState = {};

  function step(timestamp: number) {
    if (!animationStart) {
      animationStart = timestamp;
    }
    const time = timestamp - animationStart;
    const passed = Math.round(time * (distance / animationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);
  // console.log(state.id);
  return state;
}
