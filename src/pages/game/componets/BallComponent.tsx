import { Box, Image, keyframes } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { ballDiametr, ballTypesByCoef, maxElCounts } from "../game.constants";
import { BallsType, BallsTypes } from "../game.types";
import { motion, useIsPresent, usePresence } from "framer-motion";

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
  // const [isPresent, safeToRemove] = usePresence();
  const isPresent = useIsPresent();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeBall(ball?.id || 0);
    }, 3500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // useEffect(() => {
  //   if (!isPresent) {
  //     if (isBang) {
  //       return;
  //     } else {
  //       safeToRemove();
  //     }
  //   }
  // }, [isPresent, isBang, safeToRemove]);

  const onClickBall = useCallback(() => {
    setIsBang(true);
    handleClickBall(ball.id, ball.type);
    // bangTimeout.current = setTimeout(() => {
    //   handleClickBall(ball.id, ball.type);
    // }, 1000);
  }, [handleClickBall, ball]);

  return (
    <Box
      width={ballDiametr}
      height={ballDiametr}
      position="absolute"
      left={ball?.left}
      top={ball?.top}
    >
      {!isPresent && (
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
