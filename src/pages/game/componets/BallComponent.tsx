import { Box, Image, keyframes } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ballDiametr } from "../game.constants";
import { BallsType, BallsTypes } from "../game.types";
import { motion, usePresence } from "framer-motion";
import { useGameContext } from "../GameContext/useGameContext";

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

const ballAnimation = `${ballKeyframes} 0.5s steps(48) forwards`;

const ballDiametrBang = "100px";

type Props = {
  ball: BallsType;
  handleClickBall: (id: number, type: BallsTypes) => void;
  removeBall: (id: number) => void;
};

export const BallComponent: FC<Props> = ({
  ball,
  handleClickBall,
  removeBall,
}) => {
  const [isBang, setIsBang] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // const isPresent = useIsPresent();

  const { isGameStarted } = useGameContext();

  // useEffect(() => {
  //   if (!isGameStarted) {
  //     console.log("isGameStarted", isGameStarted);
  //     removeBall(ball?.id);
  //     // console.log("safeToRemove");
  //     // safeToRemove();
  //   }
  // }, [isGameStarted]);
  useEffect(() => {
    if (!isGameStarted && safeToRemove) {
      safeToRemove();
    }
  }, [isGameStarted, safeToRemove]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (ball?.id) {
        removeBall(ball?.id);
      }
    }, 3500);
    return () => {
      clearTimeout(timeoutId);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onClickBall = useCallback(() => {
    setIsBang(true);
    handleClickBall(ball.id, ball.type);
    timerRef.current = setTimeout(() => {
      // setIsBang(false);
      if (safeToRemove) {
        safeToRemove();
      }
    }, 1000);
  }, [handleClickBall, ball, safeToRemove]);

  return (
    <Box
      width={ballDiametr}
      height={ballDiametr}
      position="absolute"
      left={ball?.left}
      top={ball?.top}
    >
      {/* {!isPresent && ( */}
      {isBang && (
        <Box
          // animate={{ opacity: 0 }}
          // exit={{ opacity: 0 }}
          // display={isBang ? "block" : "none"}
          // opacity={isBang ? 0 : 1}
          as={motion.div}
          width={ballDiametrBang}
          height={ballDiametrBang}
          bgImage={`url(/imgs/game/${ball.type}.png)`}
          transform={"translate(-30%, -25%)"}
          animation={ballAnimation}
          position="absolute"
          left={ball?.left}
          top={ball?.top}
        />
      )}

      <Image
        src={`${ball?.src}`}
        width="100%"
        height="100%"
        display={isBang ? "none" : "block"}
        onClick={onClickBall}
        cursor="pointer"
      />
    </Box>
  );
};
