import { useInterval } from "@chakra-ui/react";
import { useState } from "react";

type TimerProps = {
  delay: number | null;
};

const Timer: React.FC<TimerProps> = ({ delay }) => {
  const [seconds, setSeconds] = useState(20);

  const timerDelay = delay === null ? null : 1000;

  useInterval(() => {
    if (seconds > 0) setSeconds(seconds - 1);
  }, timerDelay);

  return <>TIMER: {seconds}</>;
};

export default Timer;
