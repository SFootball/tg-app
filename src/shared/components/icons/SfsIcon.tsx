import { Image, ImageProps } from "@chakra-ui/react";
import { FC } from "react";
import goldBall from "/imgs/gold-ball.png";

type Props = ImageProps;

export const SfsIcon: FC<Props> = ({ ...props }) => {
  return (
    <Image src={goldBall} alt="sfs" width="20px" height="20px" {...props} />
  );
};
