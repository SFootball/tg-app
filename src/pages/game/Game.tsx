import { Box, Image } from "@chakra-ui/react";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import Footer from "src/app/Footer/Footer";
import { Navbar } from "src/app/Navbar/Navbar";
import { shuffle } from "./utils/shuffle";

type ballObj = {
  id: number;
  src: string;
  display: string;
  left: number | undefined;
  top: number | undefined;
};

const ballCoor1 = {
  x: Math.random() * 0.8,
  y: Math.random() * 0.5,
};

const ballCoor2 = {
  x: Math.random() * 0.8,
  y: Math.random() * 0.5,
};

const ballCoor3 = {
  x: Math.random() * 0.8,
  y: Math.random() * 0.5,
};

const ballCoor4 = {
  x: Math.random() * 0.8,
  y: Math.random() * 0.5,
};

const ballCoor5 = {
  x: Math.random() * 0.8,
  y: Math.random() * 0.5,
};

const ballCoor6 = {
  x: Math.random() * 0.8,
  y: Math.random() * 0.5,
};

export const Component: FC = () => {
  const bgRef = useRef<HTMLImageElement | null>(null);

  const [count, setCount] = useState(0);

  const [playWidth, setPlayWidth] = useState(bgRef.current?.width);
  const [playHeight, setPlayHeight] = useState(bgRef.current?.height);

  const ballArr: ballObj[] = [
    {
      id: 1,
      src: "/imgs/game/simple-ball.png",
      display: "block",
      left: playWidth && ballCoor1.x * playWidth,
      top: playHeight && ballCoor1.y * playHeight,
    },
    {
      id: 2,
      src: "/imgs/game/simple-ball.png",
      display: "block",
      left: playWidth && ballCoor2.x * playWidth,
      top: playHeight && ballCoor2.y * playHeight,
    },
    {
      id: 3,
      src: "/imgs/game/simple-ball.png",
      display: "block",
      left: playWidth && ballCoor3.x * playWidth,
      top: playHeight && ballCoor3.y * playHeight,
    },
    {
      id: 4,
      src: "/imgs/game/bonus-ball.png",
      display: "block",
      left: playWidth && ballCoor4.x * playWidth,
      top: playHeight && ballCoor4.y * playHeight,
    },
    {
      id: 5,
      src: "/imgs/game/simple-ball.png",
      display: "block",
      left: playWidth && ballCoor5.x * playWidth,
      top: playHeight && ballCoor5.y * playHeight,
    },
    {
      id: 6,
      src: "/imgs/game/simple-ball.png",
      display: "block",
      left: playWidth && ballCoor6.x * playWidth,
      top: playHeight && ballCoor6.y * playHeight,
    },
  ];

  const newBalls = useMemo(() => shuffle(ballArr), [playWidth]);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= ballArr.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        counter++;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const ballsList = newBalls.slice(0, count).map((ball) => {
    return (
      <Image
        width="50px"
        height="50px"
        key={ball.id}
        src={ball.src}
        position="absolute"
        left={ball.left}
        top={ball.top}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Box position="relative" alignSelf="center">
        <Image
          src="/imgs/game/game-bg.jpg"
          objectFit="contain"
          height="calc(100vh - 104px)"
          ref={bgRef}
          onLoad={() => {
            setPlayWidth(bgRef.current?.width);
            setPlayHeight(bgRef.current?.height);
          }}
        />
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
      <Footer />
    </>
  );
};

Component.displayName = "GamePage";
