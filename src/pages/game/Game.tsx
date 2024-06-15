import { Box, Image, keyframes, useInterval } from "@chakra-ui/react";
import { FC, useCallback, useRef, useState } from "react";
import { genRandomNumber } from "./utils/randomaiser";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";

type BallsTypes = "simple" | "bonus" | "bomb";

type BallsType = {
  id: number;
  src: string | null;
  top: number;
  left: number;
  type: BallsTypes;
  animation: string;
  bgImg: string;
  width: string;
  height: string;
};

const ballTypesByCoef: BallsTypes[] = [
  "simple",
  "simple",
  "simple",
  "simple",
  "simple",
  "bonus",
  "bonus",
  "bomb",
];

const ballDiametr = 50;
let countId = 1;
const maxElCounts = 30;

const generateTopLeftWithoutOverlapAndPaddingByBorders = (
  existingBalls: BallsType[],
  el: HTMLDivElement
): {
  top: number;
  left: number;
} => {
  const containerWidth = el.offsetWidth || 0;
  const containerHeight = el.offsetHeight || 0;

  let top = genRandomNumber(0, containerHeight - ballDiametr);
  let left = genRandomNumber(0, containerWidth - ballDiametr);

  while (
    existingBalls.some(
      (ball) =>
        top > ball.top - ballDiametr &&
        top < ball.top + ballDiametr &&
        left > ball.left - ballDiametr &&
        left < ball.left + ballDiametr
    )
  ) {
    top = genRandomNumber(0, containerHeight - ballDiametr);
    left = genRandomNumber(0, containerWidth - ballDiametr);
  }

  return { top, left };
};

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

export const Component: FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [gamePointCount, setGamePointCount] = useState(0);
  const [balls, setBalls] = useState<BallsType[]>([]);
  const [delay, setDelay] = useState<null | number>(null);

  const ballAnimation = `${ball} 1s steps(48) forwards`;

  const handleRunGame = () => {
    setDelay(2000);
  };

  const generateBallObjects = useCallback(
    (count: number) => {
      const arr = Array(count).fill(1);
      if (!bgRef.current) {
        return [];
      }
      if (balls.length >= maxElCounts) {
        return [];
      }
      arr.map((_, i) => {
        const type =
          ballTypesByCoef[Math.floor(Math.random() * ballTypesByCoef.length)];

        countId += 1;
        const { top, left } = generateTopLeftWithoutOverlapAndPaddingByBorders(
          [...balls],
          bgRef.current!
        );
        return (arr[i] = {
          id: countId,
          src: `/imgs/game/ball-${type}`,
          type,
          top,
          left,
        });
      });

      return arr;
    },
    [balls]
  );

  useInterval(() => {
    setBalls((prev) => {
      const randomNumPerIterate = genRandomNumber(1, 5);
      const newBalls = generateBallObjects(randomNumPerIterate);
      return [...prev, ...newBalls];
    });
  }, delay);

  const handleClickBall = useCallback(
    (id: number | undefined, type: BallsTypes) => {
      switch (type) {
        case "simple": {
          setGamePointCount((prev) => prev + 1);
          setBalls((prev) =>
            prev.map((ball, i) => {
              if (ball.id === id) {
                return (balls[i] = {
                  id: ball.id,
                  src: null,
                  top: ball.top,
                  left: ball.left,
                  type: "simple",
                  bgImg: simpleURL,
                  animation: ballAnimation,
                  width: "100px",
                  height: "100px",
                });
              }
              return ball;
            })
          );
          break;
        }
        case "bonus":
          setGamePointCount((prev) => prev + 3);
          setBalls((prev) =>
            prev.map((ball, i) => {
              if (ball.id === id) {
                return (balls[i] = {
                  id: ball.id,
                  src: null,
                  top: ball.top,
                  left: ball.left,
                  type: "bonus",
                  bgImg: bonusURL,
                  animation: ballAnimation,
                  width: "100px",
                  height: "100px",
                });
              }
              return ball;
            })
          );
          break;
        case "bomb":
          setGamePointCount(0);
          setBalls((prev) =>
            prev.map((ball, i) => {
              if (ball.id === id) {
                return (balls[i] = {
                  id: ball.id,
                  src: null,
                  top: ball.top,
                  left: ball.left,
                  type: "bonus",
                  bgImg: bombURL,
                  animation: ballAnimation,
                  width: "100px",
                  height: "100px",
                });
              }
              return ball;
            })
          );
          setTimeout(() => {
            setBalls([]);
            setDelay(null);
          }, 1000);
          break;
      }
    },
    [ballAnimation, balls]
  );

  const ballsList = balls.map((ball) => {
    return (
      <>
        <Box
          width={ball.width ? ball.width : `${ballDiametr}px`}
          height={ball.height ? ball.height : `${ballDiametr}px`}
          key={ball?.id}
          position="absolute"
          left={ball?.left}
          top={ball?.top}
          onClick={() => handleClickBall(ball?.id, ball?.type)}
          cursor="pointer"
          bgImg={ball.bgImg}
          transform={ball.animation ? "translate(-30%, -25%)" : ""}
          animation={ball.animation}
          className="without-bg-onclick"
        >
          <Image
            src={`${ball?.src}.png`}
            width="100%"
            height="100%"
            display={ball.src ? "inline-block" : "none"}
          />
        </Box>
      </>
    );
  });
  return (
    <>
      <GameHeader gamePointCount={gamePointCount} />
      <Box
        position="absolute"
        alignSelf="center"
        top="80px"
        left="0"
        width="100%"
        h="calc(100vh - 180px)"
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
          bgImage={"url(/imgs/game/game-bg.jpg)"}
          bgRepeat="no-repeat"
          bgSize="cover"
          ref={bgRef}
        >
          {ballsList}
        </Box>
      </Box>
      <GameFooter handleRunGame={handleRunGame} delay={delay} />
    </>
  );
};

Component.displayName = "GamePage";
