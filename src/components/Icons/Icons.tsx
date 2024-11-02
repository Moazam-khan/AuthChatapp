import * as React from "react";
import { SVGProps } from "react";
const DropDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M10.5 13.19a.643.643 0 0 1-.24-.043.667.667 0 0 1-.22-.154l-4.33-4.33c-.117-.118-.172-.274-.165-.471a.673.673 0 0 1 .186-.47c.146-.146.303-.208.47-.186a.822.822 0 0 1 .449.207l3.85 3.85 3.85-3.85a.714.714 0 0 1 .47-.197.518.518 0 0 1 .47.197c.147.117.208.27.187.46a.852.852 0 0 1-.208.481l-4.31 4.31a.666.666 0 0 1-.218.152.643.643 0 0 1-.241.044Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h21v21H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default DropDownIcon;

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="currentColor"
    {...props}
  >
    <mask
      id="a"
      width={19}
      height={18}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path d="M.5 0h18v18H.5z" />
    </mask>
    <g mask="url(#a)">
      <path d="M8.75 9.75v-7.5h1.5v7.5h-1.5Zm.75 6a6.483 6.483 0 0 1-2.616-.534 6.894 6.894 0 0 1-2.147-1.454 6.894 6.894 0 0 1-1.453-2.146A6.484 6.484 0 0 1 2.75 9c0-1 .206-1.944.619-2.831a6.833 6.833 0 0 1 1.743-2.306l1.05 1.05c-.6.5-1.068 1.106-1.406 1.818A5.234 5.234 0 0 0 4.25 9c0 1.45.513 2.688 1.537 3.713C6.813 13.738 8.05 14.25 9.5 14.25c1.463 0 2.703-.512 3.722-1.537C14.24 11.688 14.75 10.45 14.75 9c0-.8-.166-1.556-.497-2.269a5.089 5.089 0 0 0-1.415-1.819l1.05-1.05A6.833 6.833 0 0 1 15.63 6.17c.413.887.619 1.831.619 2.831 0 .925-.178 1.797-.534 2.616a6.977 6.977 0 0 1-1.444 2.146 6.782 6.782 0 0 1-2.138 1.454 6.53 6.53 0 0 1-2.634.534Z" />
    </g>
  </svg>
);

export const EastIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        d="M18.175 13H3a.967.967 0 0 1-.712-.287A.968.968 0 0 1 2 12c0-.283.096-.52.288-.713A.967.967 0 0 1 3 11h15.175L14.3 7.1a.977.977 0 0 1-.288-.688.93.93 0 0 1 .288-.712.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l5.6 5.6c.1.1.17.208.212.325.042.117.063.242.063.375s-.02.258-.063.375a.877.877 0 0 1-.212.325l-5.6 5.6a.933.933 0 0 1-.688.275c-.274 0-.512-.092-.712-.275-.2-.2-.3-.438-.3-.713 0-.274.1-.512.3-.712L18.175 13Z"
      />
    </g>
  </svg>
);

export const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g fill="#9B9CA3" clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M8.25.188a7.313 7.313 0 1 0 0 14.625 7.313 7.313 0 0 0 0-14.626ZM2.062 7.5a6.188 6.188 0 1 1 12.376 0 6.188 6.188 0 0 1-12.376 0Z"
        clipRule="evenodd"
      />
      <path d="M14.648 13.102a.563.563 0 0 0-.796.796l3 3a.563.563 0 0 0 .796-.796l-3-3Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
