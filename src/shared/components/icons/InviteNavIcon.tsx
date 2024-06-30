import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = IconProps & {
  isActive: boolean;
};

const inviteGradientId = "nav_linear_gradient_invite";

export const InviteNavIcon: FC<Props> = ({ isActive, ...props }) => {
  const strokeColor = isActive ? "black" : `url(#${inviteGradientId})`;
  const fillColor = isActive ? `url(#${inviteGradientId})` : "black";
  return (
    <Icon
      width="29"
      height="25"
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        d="M16.5239 6.87506C16.5239 10.1198 13.8936 12.7501 10.6489 12.7501C7.40416 12.7501 4.7738 10.1198 4.7738 6.87506C4.7738 3.63035 7.40416 1 10.6489 1C13.8936 1 16.5239 3.63035 16.5239 6.87506Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
      <mask
        id="path-2-outside-1_2019_278"
        maskUnits="userSpaceOnUse"
        x="17.899"
        y="8.62509"
        width="11"
        height="11"
        fill={fillColor}
      >
        <rect fill="white" x="17.899" y="8.62509" width="11" height="11" />
        <path d="M23.024 9.62509V17.8752ZM27.149 13.7501H18.899Z" />
      </mask>
      <path
        d="M23.024 9.62509V17.8752ZM27.149 13.7501H18.899Z"
        fill={fillColor}
      />
      <path
        d="M24.024 9.62509C24.024 9.07281 23.5763 8.62509 23.024 8.62509C22.4717 8.62509 22.024 9.07281 22.024 9.62509H24.024ZM22.024 17.8752C22.024 18.4274 22.4717 18.8752 23.024 18.8752C23.5763 18.8752 24.024 18.4274 24.024 17.8752H22.024ZM27.149 14.7501C27.7013 14.7501 28.149 14.3024 28.149 13.7501C28.149 13.1978 27.7013 12.7501 27.149 12.7501V14.7501ZM18.899 12.7501C18.3467 12.7501 17.899 13.1978 17.899 13.7501C17.899 14.3024 18.3467 14.7501 18.899 14.7501V12.7501ZM22.024 9.62509V17.8752H24.024V9.62509H22.024ZM27.149 12.7501H18.899V14.7501H27.149V12.7501Z"
        fill="#D2A245"
        mask="url(#path-2-outside-1_2019_278)"
      />
      <path
        d="M4.26018 19.3288L4.26043 19.3286C6.07833 18.149 8.32359 17.5002 10.6489 17.5002C12.9738 17.5002 15.2193 18.1501 17.0377 19.3289C18.5007 20.2777 19.6115 21.5215 20.2861 22.9102C20.2775 22.9163 20.265 22.9227 20.2476 22.9267C13.9285 24.3578 7.3693 24.3578 1.05017 22.9267C1.03273 22.9227 1.02024 22.9163 1.01167 22.9102C1.68605 21.5205 2.79673 20.2779 4.26018 19.3288Z"
        fill={fillColor}
        stroke={`url(#${inviteGradientId})`}
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id={inviteGradientId}
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
