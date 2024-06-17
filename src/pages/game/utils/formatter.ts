import { BallsType } from "../game.types";
import { keyframes } from "@chakra-ui/react";

const ball = keyframes`
  0% {
    background-position: 0 0;
    pointer-events: none
  }
  99% {
    opacity: 1;
    pointer-events: none
  }
  100% {
    background-position: 4800px 0;
    opacity: 0;
    display: none;
    pointer-events: none
  }
`;

const simpleURL = "url(/imgs/game/simple.png)";
const bonusURL = "url(/imgs/game/bonus.png)";
const bombURL = "url(/imgs/game/bomb.png)";

const ballAnimation = `${ball} 1s steps(48) forwards`;

export const formatAnimationBall = (balls: BallsType[], id: number) => {
  return balls.map((ball, i) => {
    if (ball.id === id) {
      return (balls[i] = {
        id: ball.id,
        // src: ,
        top: ball.top,
        left: ball.left,
        type: "bonus",
        bgImg: bombURL, // simpleUrl || bonusUrl
        animation: ballAnimation,
        width: "100px",
        height: "100px",
      });
    }
    return ball;
  });
};
