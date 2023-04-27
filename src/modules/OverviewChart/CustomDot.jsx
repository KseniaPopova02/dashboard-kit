import { StyledDot } from "./style";

export const CustomDot = () => (
  <StyledDot
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.16"
      cx="14"
      cy="14"
      r="13"
      stroke="#3751FF"
      strokeWidth="2"
    />
    <g filter="url(#filter0_d_0_1)">
      <circle cx="14" cy="14" r="7" fill="white" />
      <circle cx="14" cy="14" r="5" stroke="#3751FF" strokeWidth="4" />
    </g>
    <defs>
      <filter
        id="filter0_d_0_1"
        x="5"
        y="5.99997"
        width="18"
        height="18"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.215686 0 0 0 0 0.317647 0 0 0 0 1 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        />
      </filter>
    </defs>
  </StyledDot>
);
