import { Box, Flex, Image, Text, useInterval } from "@chakra-ui/react";
import { FC, useCallback, useRef, useState } from "react";
import { genRandomNumber } from "./utils/randomaiser";

type BallsTypes = "simple" | "bonus" | "bomb";

type BallsType = {
  id: number;
  src: string;
  top: number;
  left: number;
  type: BallsTypes;
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

export const Component: FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [gamePointCount, setGamePointCount] = useState(0);
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
  }, 2000);

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
    [setBalls]
  );

  const ballsList = balls.map((ball) => {
    return (
      <Box
        width={`${ballDiametr}px`}
        height={`${ballDiametr}px`}
        key={ball?.id}
        position="absolute"
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
    <>
      <Box
        position="absolute"
        alignSelf="center"
        top="0"
        left="0"
        width="100%"
        h="100vh"
      >
        <Flex alignItems={"center"} pl={4} gap={6}>
          <Text>Game points:</Text>
          <Text
            color="white"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
          >
            {gamePointCount}
          </Text>
        </Flex>
        <Box
          position="relative"
          width="100%"
          height="100%"
          bgImage={"url(/imgs/game/game-bg.jpg)"}
          bgRepeat="no-repeat"
          bgSize="cover"
          ref={bgRef}
        >
          <Image
            position="absolute"
            src="/imgs/game/player.png"
            height="40%"
            width="auto"
            right="0"
            bottom="0"
          />
          {ballsList}
        </Box>
      </Box>
    </>
  );
};

Component.displayName = "GamePage";
