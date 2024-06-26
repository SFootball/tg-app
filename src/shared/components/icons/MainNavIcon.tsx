import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = IconProps & {
  isActive: boolean;
};

const mainGradientId = "nav_linear_gradient_main";

export const MainNavIcon: FC<Props> = ({ isActive, ...props }) => {
  const strokeColor = isActive ? "black" : `url(#${mainGradientId})`;
  const fillColor = isActive ? `url(#${mainGradientId})` : "black";
  return (
    <Icon
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        d="M1 11.8003V11.8008V25.852C1 26.4184 1.22264 26.9637 1.62214 27.3673C2.02199 27.7712 2.56647 28 3.13636 28H9.19659C9.76649 28 10.311 27.7712 10.7108 27.3673C11.1103 26.9637 11.333 26.4184 11.333 25.852V19.3384C11.333 19.2959 11.3498 19.2572 11.3765 19.2302C11.4029 19.2035 11.4365 19.1904 11.4693 19.1904H17.5307C17.5635 19.1904 17.5971 19.2035 17.6235 19.2302C17.6502 19.2572 17.667 19.2959 17.667 19.3384V25.852C17.667 26.4184 17.8897 26.9637 18.2892 27.3673C18.689 27.7712 19.2335 28 19.8034 28H25.8636C26.4335 28 26.978 27.7712 27.3779 27.3673C27.7774 26.9637 28 26.4184 28 25.852V11.8008V11.8003C27.9997 11.2731 27.8739 10.7533 27.6326 10.2847C27.3913 9.816 27.0413 9.41183 26.6114 9.107L15.7318 1.39261L15.7318 1.39261C15.3721 1.13758 14.9422 1 14.5006 1C14.0589 1 13.629 1.13757 13.2693 1.39258C13.2693 1.39259 13.2693 1.3926 13.2693 1.39261L2.38867 9.10697L2.38863 9.10699C1.95872 9.41183 1.60873 9.816 1.3674 10.2847C1.1261 10.7533 1.00026 11.2731 1 11.8003Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id={mainGradientId}
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
