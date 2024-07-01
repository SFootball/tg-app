import { ballDiametr } from "../game.constants";
import { BallsType } from "../game.types";

export const genRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let attemptsCount = 0;
const maxAttepmtCount = 10;

export const generateTopLeftWithoutOverlapAndPaddingByBorders = (
  existingBalls: BallsType[],
  el: HTMLDivElement
): {
  top: number;
  left: number;
} => {
  const containerWidth = el.offsetWidth || 0;
  const containerHeight = el.offsetHeight || 0;

  const maxTop = containerHeight - ballDiametr - 112;
  const minTop = ballDiametr + 62;
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
  while (isOverlaping() && attemptsCount !== maxAttepmtCount) {
    attemptsCount++;
    top = genRandomNumber(minTop, maxTop);
    left = genRandomNumber(minLeft, maxLeft);
  }

  attemptsCount = 0;

  return { top, left };
};
