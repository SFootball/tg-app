import { Box, Image, useDisclosure, useInterval } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  genRandomNumber,
  generateTopLeftWithoutOverlapAndPaddingByBorders,
} from "./utils/randomizer";
import { BallsType, BallsTypes } from "./game.types";
import { ballTypes, ballTypesByCoef, maxElCounts } from "./game.constants";
import { BallComponent } from "./componets/BallComponent";
import { GameFooter } from "./componets/GameFooter";
import { CloseGameModal } from "./componets/CloseGameModal";
import { useGameContext } from "./GameContext/useGameContext";
import { getImgPathForBallComponent } from "./game.utils";
import { usePreloadImages } from "./hooks/usePreloadImages";
import { useNavigate } from "react-router-dom";

const playerImagePath = "/imgs/game/player.png";
const bgImagePath = "/imgs/game/game-bg.jpg";
const imagePatternPath = "/imgs/game/ball";

let countId = 1;
let isGameRunning = true;

export const BaseGame: FC = () => {
  const { isGameStarted, setGameStarted, setGamePoints } = useGameContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [balls, setBalls] = useState<BallsType[]>([]);

  const navigate = useNavigate();

  useEffect(
    function autoRunGame() {
      // auto runing game
      setGameStarted(true);
      isGameRunning = true;
    },
    [setGameStarted]
  );

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
    [balls, isGameStarted]
  );

  const removeBall = useCallback((id: number) => {
    setBalls((prev) => prev.filter((ball) => ball?.id !== id));
  }, []);

  const addBallInInterval = useCallback(() => {
    setBalls((prev) => {
      if (!isGameRunning) {
        return prev;
      }
      const randomNumPerIterate = genRandomNumber(1, 5);
      const newBalls = generateBallObjects(randomNumPerIterate);
      return [...prev, ...newBalls];
    });
  }, [generateBallObjects]);

  useInterval(addBallInInterval, isGameStarted ? 1000 : null);

  usePreloadImages(ballTypes.map((type) => getImgPathForBallComponent(type)));

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

  const onEndTimerEffect = useCallback(() => {
    setGameStarted(false);
    isGameRunning = false;
    clearBalls();
    onOpen();
  }, [onOpen, setGameStarted, clearBalls]);

  const closeModalHandle = useCallback(() => {
    onClose();
    navigate("/");
  }, [navigate, onClose]);

  return (
    <>
      <Box
        width="100vw"
        height="90vh"
        overflow={"hidden"}
        bgImage={`url(${bgImagePath})`}
        bgRepeat="no-repeat"
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
        <GameFooter onEndEffect={onEndTimerEffect} />
      </Box>
      <CloseGameModal isOpen={isOpen} onClose={closeModalHandle} />
    </>
  );
};
