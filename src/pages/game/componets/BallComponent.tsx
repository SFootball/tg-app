import { Box, Image, keyframes } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ballDiametr } from "../game.constants";
import { BallsType, BallsTypes } from "../game.types";

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

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    // if (ball.type === "bomb") {}
    timerRef.current = setTimeout(() => {
      handleClickBall(ball.id, ball.type);
    }, 700);
  }, [ball, handleClickBall]);

  return (
    <Box
      width={ballDiametr}
      height={ballDiametr}
      position="absolute"
      left={ball?.left}
      top={ball?.top}
    >
      {isBang ? (
        <Box
          width={ballDiametrBang}
          height={ballDiametrBang}
          bgImage={`url(/imgs/game/${ball.type}.png)`}
          transform={"translate(-30%, -25%)"}
          animation={ballAnimation}
          position="absolute"
        />
      ) : (
        <Image
          src={`${ball?.src}`}
          width="100%"
          height="100%"
          display={isBang ? "none" : "block"}
          onClick={onClickBall}
          cursor="pointer"
        />
      )}
    </Box>
  );
};
