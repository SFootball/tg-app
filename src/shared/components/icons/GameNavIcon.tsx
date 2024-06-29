import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = IconProps & {
  isActive: boolean;
};

const gameGradientId = "nav_linear_gradient_game";

export const GameNavIcon: FC<Props> = ({ isActive, ...props }) => {
  const strokeColor = isActive ? "black" : `url(#${gameGradientId})`;
  const fillColor = isActive ? `url(#${gameGradientId})` : "black";
  return (
    <Icon
      viewBox="0 0 39 33"
      width="39"
      height="33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 6.73684V0V6.73684ZM19.5 6.73684C23.7012 6.81095 26.2374 6.73684 27.9091 6.73684C31.2727 6.73684 34.6364 7.57895 36.3182 13.4737C38 19.3684 38 22.7368 38 26.9474C38 31.1579 34.6364 32 31.2727 32C27.9091 32 26.1365 25.2632 19.5 25.2632C12.8635 25.2632 11.0909 32 7.72727 32C4.36364 32 1 31.1579 1 26.9474C1 22.7368 1 19.3684 2.68182 13.4737C4.36364 7.57895 7.72727 6.73684 11.0909 6.73684C12.7626 6.73684 15.2988 6.81095 19.5 6.73684ZM29.5909 21.8947C30.037 21.8947 30.4647 21.7173 30.7801 21.4014C31.0955 21.0856 31.2727 20.6572 31.2727 20.2105C31.2727 19.7638 31.0955 19.3355 30.7801 19.0196C30.4647 18.7038 30.037 18.5263 29.5909 18.5263C29.1449 18.5263 28.7171 18.7038 28.4017 19.0196C28.0863 19.3355 27.9091 19.7638 27.9091 20.2105C27.9091 20.6572 28.0863 21.0856 28.4017 21.4014C28.7171 21.7173 29.1449 21.8947 29.5909 21.8947ZM22.8636 16.8421C23.3097 16.8421 23.7375 16.6647 24.0529 16.3488C24.3683 16.033 24.5455 15.6046 24.5455 15.1579C24.5455 14.7112 24.3683 14.2828 24.0529 13.967C23.7375 13.6511 23.3097 13.4737 22.8636 13.4737C22.4176 13.4737 21.9898 13.6511 21.6744 13.967C21.359 14.2828 21.1818 14.7112 21.1818 15.1579C21.1818 15.6046 21.359 16.033 21.6744 16.3488C21.9898 16.6647 22.4176 16.8421 22.8636 16.8421ZM6.04545 16.8421H16.1364H6.04545ZM11.0909 11.7895V21.8947V11.7895Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id={gameGradientId}
          x1="19.5"
          y1="0"
          x2="19.5"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2A245" />
          <stop offset="0.16" stopColor="#F7CF5E" />
          <stop offset="0.75" stopColor="#9E6823" />
          <stop offset="1" stopColor="#C79F4C" />
        </linearGradient>
      </defs>
    </Icon>
  );
};
