import * as React from "react";
import { SVGProps } from "react";

const NextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default NextIcon;
