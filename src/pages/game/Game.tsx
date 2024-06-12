import { Box, Image } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Footer from "src/app/Footer/Footer";
import { Navbar } from "src/app/Navbar/Navbar";
import { shuffle } from "./utils/shuffle";

type ballObj = {
  id: number;
  src: string;
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

// enum BallsEnum {
//   simple,
//   bonus,
//   bomb,
// }

// const { simple, bonus, bomb } = BallsEnum;

type BallsType =
  | {
      id: number;
      src: string;
      top: number;
      left: number;
      type: string;
      // coef: number;
    }
  | undefined;

// let countId = 1;
const ballTypesByCoef: string[] = [
  "simple",
  "simple",
  "simple",
  "simple",
  "bonus",
  "bonus",
  "bomb",
];

export const Component: FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  const [playHeight, setPlayHeight] = useState<number | undefined>(0);
  const [playWidth, setPlayWidth] = useState<number | undefined>(0);

  const generateBallObjects = useCallback(
    (
      count: number,
      playWidth: number | undefined,
      playHeight: number | undefined
    ) => {
      const arr = Array(count).fill(1);
      arr.map((el, i) => {
        const type =
          ballTypesByCoef[Math.floor(Math.random() * ballTypesByCoef.length)];

        // countId++;

        if (playHeight && playWidth) {
          return (arr[i] = {
            id: i,
            src: `/imgs/game/ball-${type}`,
            type,
            top: playHeight * Math.random() * 0.5,
            left: playWidth * Math.random() * 0.7,
          });
        }
      });
      return arr;
    },
    []
  );

  const [balls, setBalls] = useState<BallsType[]>([]);

  useEffect(() => {
    setPlayHeight(bgRef.current?.offsetHeight);
    setPlayWidth(bgRef.current?.offsetWidth);
    setBalls(generateBallObjects(10, playWidth, playHeight));
  }, [playHeight, playWidth]);
  // const [count, setCount] = useState(0);

  const handleClickBall = useCallback(
    (id: number | undefined) => {
      setBalls((prev) => prev.filter((ball) => ball?.id !== id));
    },
    [setBalls]
  );

  const ballsList = balls.map((ball) => {
    return (
      <Box
        width="50px"
        height="50px"
        key={ball?.id}
        position="absolute"
        left={ball?.left}
        top={ball?.top}
        onClick={() => handleClickBall(ball?.id)}
        cursor="pointer"
        m="50px"
      >
        <Image src={`${ball?.src}.png`} />
      </Box>
    );
  });

  console.log("ballsList", ballsList);

  return (
    <>
      {/* <Navbar /> */}
      <Box
        position="absolute"
        alignSelf="center"
        top="0"
        left="0"
        width="100%"
        h="100vh"
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
          {/* <Image
            src="/imgs/game/game-bg.jpg"
            objectFit="contain"
            height="calc(100vh - 104px)"
            
          /> */}
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
      {/* <Footer /> */}
    </>
  );
};

Component.displayName = "GamePage";

// const [playWidth, setPlayWidth] = useState(bgRef.current?.width);
// const [playHeight, setPlayHeight] = useState(bgRef.current?.height);

// const ballArr: ballObj[] = useMemo(()=>{
//   const playWidth = bgRef.current?.width
//   const playHeight = bgRef.current?.height
//   return [
//   {
//     id: 1,
//     src: "/imgs/game/simple-ball.png",
//     left: playWidth && ballCoor1.x * playWidth,
//     top: playHeight && ballCoor1.y * playHeight,
//   },
//   {
//     id: 2,
//     src: "/imgs/game/simple-ball.png",
//     left: playWidth && ballCoor2.x * playWidth,
//     top: playHeight && ballCoor2.y * playHeight,
//   },
//   {
//     id: 3,
//     src: "/imgs/game/simple-ball.png",
//     left: playWidth && ballCoor3.x * playWidth,
//     top: playHeight && ballCoor3.y * playHeight,
//   },
//   {
//     id: 4,
//     src: "/imgs/game/bonus-ball.png",
//     left: playWidth && ballCoor4.x * playWidth,
//     top: playHeight && ballCoor4.y * playHeight,
//   },
//   {
//     id: 5,
//     src: "/imgs/game/simple-ball.png",
//     left: playWidth && ballCoor5.x * playWidth,
//     top: playHeight && ballCoor5.y * playHeight,
//   },
//   {
//     id: 6,
//     src: "/imgs/game/simple-ball.png",
//     left: playWidth && ballCoor6.x * playWidth,
//     top: playHeight && ballCoor6.y * playHeight,
//   },
// ];},[])

// const newBalls = useMemo(() => shuffle(ballArr), [playWidth]);

// useEffect(() => {
//   let counter = count;
//   const interval = setInterval(() => {
//     if (counter >= ballArr.length) {
//       clearInterval(interval);
//     } else {
//       setCount((count) => count + 1);
//       counter++;
//     }
//   }, 500);

//   return () => clearInterval(interval);
// }, []);
