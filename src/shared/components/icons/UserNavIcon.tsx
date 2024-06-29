import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = IconProps & {
  isActive: boolean;
};

const userGradientId = "nav_linear_gradient_user";

export const UserNavIcon: FC<Props> = ({ isActive, ...props }) => {
  const fillColor = isActive ? `url(#${userGradientId})` : "black";
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
        d="M1 19.2126V19.2125V9.78864C1.00545 7.45876 1.93366 5.2259 3.58153 3.57877C5.22945 1.93158 7.46281 1.00435 9.79277 1H19.2215C21.5518 1.00546 23.7849 1.93511 25.4306 3.58501C27.0766 5.23516 28.0007 7.47096 28 9.8017V9.802L28 19.2266C28 19.2268 28 19.2269 28 19.227C27.9994 20.6672 27.6425 22.0848 26.9612 23.3536C26.2797 24.6226 25.2949 25.7031 24.0945 26.4991L24.0881 26.5033L24.0818 26.5076C23.6214 26.8231 23.1307 27.0922 22.6171 27.3107C21.5387 27.7658 20.3794 28 19.2082 28L9.77735 28L9.77618 28C8.6339 28.0013 7.5027 27.7761 6.44807 27.3372L6.44809 27.3372L6.43877 27.3334C5.96315 27.1411 5.50836 26.9008 5.08143 26.6163L5.07219 26.6102L5.0628 26.6042C3.81788 25.814 2.79274 24.7222 2.08248 23.43C1.37223 22.1378 0.999886 20.6871 1 19.2126ZM14.508 5.64099L14.5047 5.641C13.0336 5.64473 11.6238 6.23053 10.5833 7.27041C9.54272 8.3103 8.95602 9.71974 8.95135 11.1908L8.95135 11.1946C8.95205 12.293 9.2783 13.3665 9.88888 14.2796C10.4995 15.1926 11.367 15.9042 12.3818 16.3244C13.1403 16.639 13.9591 16.7814 14.7793 16.7414C15.5998 16.7015 16.4011 16.48 17.1256 16.0929C17.8501 15.7059 18.4797 15.163 18.9691 14.5033C19.4584 13.8435 19.7953 13.0835 19.9555 12.2778L19.9557 12.2769C20.115 11.4716 20.0939 10.641 19.894 9.84482C19.6941 9.04863 19.3202 8.30662 18.7993 7.67212C18.2785 7.03763 17.6235 6.52641 16.8815 6.17522C16.1395 5.82403 15.3289 5.64158 14.508 5.64099ZM22.0956 27.3466L22.0956 27.3466L22.1028 27.344L22.4534 27.2161C23.5918 26.8511 24.157 26.3835 24.9368 25.7125L25.5272 25.2046L25.1793 24.5078C24.3852 22.9173 23.2163 21.544 21.7736 20.5059C19.7405 18.853 17.1999 17.9504 14.579 17.9504C11.957 17.9504 9.41537 18.8538 7.38181 20.5081C5.93668 21.5623 4.78564 22.9693 4.03872 24.595L3.72204 25.2843L4.30045 25.775C5.85416 27.0932 7.82404 27.8194 9.86159 27.825H9.86435H19.2934C20.2481 27.8287 21.1962 27.6668 22.0956 27.3466Z"
        fill={fillColor}
        stroke={`url(#${userGradientId})`}
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id={userGradientId}
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

<svg
  width="29"
  height="29"
  viewBox="0 0 29 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    id="Vector"
    d="M1 19.2126V19.2125V9.78864C1.00545 7.45876 1.93366 5.2259 3.58153 3.57877C5.22945 1.93158 7.46281 1.00435 9.79277 1H19.2215C21.5518 1.00546 23.7849 1.93511 25.4306 3.58501C27.0766 5.23516 28.0007 7.47096 28 9.8017V9.802L28 19.2266C28 19.2268 28 19.2269 28 19.227C27.9994 20.6672 27.6425 22.0848 26.9612 23.3536C26.2797 24.6226 25.2949 25.7031 24.0945 26.4991L24.0881 26.5033L24.0818 26.5076C23.6214 26.8231 23.1307 27.0922 22.6171 27.3107C21.5387 27.7658 20.3794 28 19.2082 28L9.77735 28L9.77618 28C8.6339 28.0013 7.5027 27.7761 6.44807 27.3372L6.44809 27.3372L6.43877 27.3334C5.96315 27.1411 5.50836 26.9008 5.08143 26.6163L5.07219 26.6102L5.0628 26.6042C3.81788 25.814 2.79274 24.7222 2.08248 23.43C1.37223 22.1378 0.999886 20.6871 1 19.2126ZM14.508 5.64099L14.5047 5.641C13.0336 5.64473 11.6238 6.23053 10.5833 7.27041C9.54272 8.3103 8.95602 9.71974 8.95135 11.1908L8.95135 11.1946C8.95205 12.293 9.2783 13.3665 9.88888 14.2796C10.4995 15.1926 11.367 15.9042 12.3818 16.3244C13.1403 16.639 13.9591 16.7814 14.7793 16.7414C15.5998 16.7015 16.4011 16.48 17.1256 16.0929C17.8501 15.7059 18.4797 15.163 18.9691 14.5033C19.4584 13.8435 19.7953 13.0835 19.9555 12.2778L19.9557 12.2769C20.115 11.4716 20.0939 10.641 19.894 9.84482C19.6941 9.04863 19.3202 8.30662 18.7993 7.67212C18.2785 7.03763 17.6235 6.52641 16.8815 6.17522C16.1395 5.82403 15.3289 5.64158 14.508 5.64099ZM22.0956 27.3466L22.0956 27.3466L22.1028 27.344L22.4534 27.2161C23.5918 26.8511 24.157 26.3835 24.9368 25.7125L25.5272 25.2046L25.1793 24.5078C24.3852 22.9173 23.2163 21.544 21.7736 20.5059C19.7405 18.853 17.1999 17.9504 14.579 17.9504C11.957 17.9504 9.41537 18.8538 7.38181 20.5081C5.93668 21.5623 4.78564 22.9693 4.03872 24.595L3.72204 25.2843L4.30045 25.775C5.85416 27.0932 7.82404 27.8194 9.86159 27.825H9.86435H19.2934C20.2481 27.8287 21.1962 27.6668 22.0956 27.3466Z"
    fill="black"
    stroke="#D2A245"
    stroke-width="2"
  />
</svg>;
