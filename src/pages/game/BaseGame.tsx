import { Box, Image, keyframes, useInterval } from "@chakra-ui/react";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  genRandomNumber,
  generateTopLeftWithoutOverlapAndPaddingByBorders,
} from "./utils/randomizer";
import { BallsType, BallsTypes } from "./game.types";
import { ballDiametr, ballTypesByCoef, maxElCounts } from "../game.constants";

const playerImagePath = "/imgs/game/player.png";
const bgImagePath = "/imgs/game/game-bg.jpg";
const imagePatternPath = "/imgs/game/ball";

let countId = 1;

const ballKeyframes = keyframes`
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

type Props = {
  setGamePointCount: Dispatch<SetStateAction<number>>;
};

export const BaseGame: FC<Props> = ({ setGamePointCount }) => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [balls, setBalls] = useState<BallsType[]>([]);

  const generateBallObjects = useCallback(
    (count: number) => {
      const arr = Array(count).fill(1);
      if (!bgRef.current) {
        return [];
      }
      if (balls.length >= maxElCounts) {
        return [];
      }
      arr.map((_, i, newArr) => {
        const type =
          ballTypesByCoef[Math.floor(Math.random() * ballTypesByCoef.length)];

        countId += 1;
        const { top, left } = generateTopLeftWithoutOverlapAndPaddingByBorders(
          [...balls, ...newArr],
          bgRef.current!
        );
        return (arr[i] = {
          id: countId,
          src: `${imagePatternPath}-${type}`,
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
  }, 1000);

  const handleClickBall = useCallback(
    (id: number | undefined, type: BallsTypes) => {
      switch (type) {
        case "simple":
          setGamePointCount((prev) => prev + 1);
          setBalls((prev) => prev.filter((ball) => ball?.id !== id));

          break;
        case "bonus":
          setGamePointCount((prev) => prev + 3);
          setBalls((prev) => prev.filter((ball) => ball?.id !== id));

          break;
        case "bomb":
          setGamePointCount(0);
          setBalls([]);
          break;
      }
    },
    [setBalls, setGamePointCount]
  );

  const ballsList = balls.map((ball) => {
    return (
      <Box
        width={`${ballDiametr}px`}
        height={`${ballDiametr}px`}
        key={ball?.id}
        position="absolute"
        // to center
        transform={`translate(-50%, -50%)`}
        left={ball?.left}
        top={ball?.top}
        onClick={() => handleClickBall(ball?.id, ball?.type)}
        cursor="pointer"
      >
        <Image src={`${ball?.src}.png`} width="100%" height="100%" />
      </Box>
    );
  });

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      bgImage={`url(${bgImagePath})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      ref={bgRef}
    >
      <Image
        position="absolute"
        src={playerImagePath}
        height="40%"
        width="auto"
        right="0"
        bottom="0"
      />
      {ballsList}
    </Box>
  );
};
