import { Box, Image, useDisclosure, useInterval } from "@chakra-ui/react";
import { FC, useCallback, useRef, useState } from "react";
import {
  genRandomNumber,
  generateTopLeftWithoutOverlapAndPaddingByBorders,
} from "./utils/randomizer";
import { BallsType, BallsTypes } from "./game.types";
import { ballTypesByCoef, maxElCounts } from "./game.constants";
import { BallComponent } from "./componets/BallComponent";
import { AnimatePresence } from "framer-motion";
import { GameFooter } from "./componets/GameFooter";
import { CloseGameModal } from "./componets/CloseGameModal";
import { useGameContext } from "./game-context/useGameContext";

const playerImagePath = "/imgs/game/player.png";
const bgImagePath = "/imgs/game/game-bg.jpg";
const imagePatternPath = "/imgs/game/ball";

let countId = 1;

export const BaseGame: FC = () => {
  const [isGameEnded, setGameEnded] = useState(false);
  const { gamePoints, setGamePoints } = useGameContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [balls, setBalls] = useState<BallsType[]>([]);

  const clearBalls = useCallback(() => {
    setBalls([]);
  }, []);

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
          src: `${imagePatternPath}-${type}.png`,
          type,
          top,
          left,
        });
      });

      return arr;
    },
    [balls]
  );

  const removeBall = useCallback((id: number) => {
    setBalls((prev) => prev.filter((ball) => ball?.id !== id));
  }, []);

  useInterval(() => {
    if (isGameEnded) {
      return;
    }
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
          setGamePoints((prev) => prev + 1);
          setBalls((prev) => prev.filter((ball) => ball?.id !== id));

          break;
        case "bonus":
          setGamePoints((prev) => prev + 3);
          setBalls((prev) => prev.filter((ball) => ball?.id !== id));

          break;
        case "bomb":
          setGamePoints(0);
          clearBalls();
          break;
      }
    },
    [setBalls, setGamePoints, clearBalls]
  );

  const onEndEffect = useCallback(() => {
    setGameEnded(true);
    onOpen();
    clearBalls();
  }, [onOpen, setGameEnded, clearBalls]);

  return (
    <>
      <Box
        position="relative"
        width="100%"
        height="90vh"
        bgImage={`url(${bgImagePath})`}
        bgRepeat="no-repeat"
        // bgSize="cover"
        backgroundSize={"100% 100%"}
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
        <AnimatePresence initial={false}>
          {balls.map((ball) => {
            return (
              <BallComponent
                key={`${ball.id}-${ball.type}`}
                ball={ball}
                handleClickBall={handleClickBall}
                removeBall={removeBall}
              />
            );
          })}
        </AnimatePresence>
        <GameFooter onEndEffect={onEndEffect} />
      </Box>
      <CloseGameModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};