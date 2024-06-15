import { ballDiametr } from "src/pages/game.constants";
import { BallsType } from "../game.types";

export const genRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateTopLeftWithoutOverlapAndPaddingByBorders = (
  existingBalls: BallsType[],
  el: HTMLDivElement
): {
  top: number;
  left: number;
} => {
  const containerWidth = el.offsetWidth || 0;
  const containerHeight = el.offsetHeight || 0;

  const maxTop = containerHeight - ballDiametr - 10;
  const minTop = ballDiametr + 20;
  const maxLeft = containerWidth - ballDiametr - 10;
  const minLeft = ballDiametr + 10;

  let top = genRandomNumber(minTop, maxTop);
  let left = genRandomNumber(minLeft, maxLeft);

  const isOverlaping = () =>
    existingBalls.some(
      (ball) =>
        top > ball.top - ballDiametr &&
        top < ball.top + ballDiametr &&
        left > ball.left - ballDiametr &&
        left < ball.left + ballDiametr
    );
  while (isOverlaping()) {
    top = genRandomNumber(minTop, maxTop);
    left = genRandomNumber(minLeft, maxLeft);
  }

  return { top, left };
};
