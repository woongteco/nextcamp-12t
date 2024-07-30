import clsx from "clsx";

export type TIconStylingProps = { strokeColor?: string; size?: string };

export function NotebookIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KeyboardIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15H19M9 15H15M6 15H5M5 12H19M5 9H19M2 14.8002V9.2002C2 8.08009 2 7.51962 2.21799 7.0918C2.40973 6.71547 2.71547 6.40973 3.0918 6.21799C3.51962 6 4.08009 6 5.2002 6H18.8002C19.9203 6 20.4796 6 20.9074 6.21799C21.2837 6.40973 21.5905 6.71547 21.7822 7.0918C22 7.5192 22 8.07899 22 9.19691V14.8031C22 15.921 22 16.48 21.7822 16.9074C21.5905 17.2837 21.2837 17.5905 20.9074 17.7822C20.48 18 19.921 18 18.8031 18H5.19691C4.07899 18 3.5192 18 3.0918 17.7822C2.71547 17.5905 2.40973 17.2837 2.21799 16.9074C2 16.4796 2 15.9203 2 14.8002Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BulbIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 10.2145 6.36084 11.3447 6.98117 12.2893C7.93507 13.7418 8.41161 14.4676 8.47352 14.5761C9.02428 15.541 8.92287 15.2007 8.99219 16.3096C8.99998 16.4342 9 16.6229 9 17C9 17.5523 9.44772 18 10 18L14 18C14.5523 18 15 17.5523 15 17C15 16.6229 15 16.4342 15.0078 16.3096C15.0771 15.2007 14.9751 15.541 15.5259 14.5761C15.5878 14.4676 16.0651 13.7418 17.019 12.2893C17.6394 11.3447 18.0002 10.2145 18.0002 9C18.0002 5.68629 15.3137 3 12 3Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FileEditIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11.0002V6.2002C6 5.08009 6 4.51962 6.21799 4.0918C6.40973 3.71547 6.71547 3.40973 7.0918 3.21799C7.51962 3 8.08009 3 9.2002 3H13.6747C13.7973 3 13.9045 3 14 3.00087M19.9991 9C20 9.09561 20 9.20296 20 9.32568V17.8036C20 18.9215 20 19.4805 19.7822 19.9079C19.5905 20.2842 19.2839 20.5905 18.9076 20.7822C18.4802 21 17.921 21 16.8031 21L13 21M19.9991 9C19.9963 8.71451 19.9857 8.53376 19.9443 8.36133C19.8953 8.15726 19.8142 7.96214 19.7046 7.7832C19.5809 7.58136 19.4089 7.40889 19.063 7.06298L15.9375 3.9375C15.5918 3.59182 15.4186 3.41857 15.2168 3.29492C15.0379 3.18526 14.8429 3.10425 14.6388 3.05526C14.4663 3.01385 14.2856 3.00347 14 3.00087M19.9991 9H20.0002M19.9991 9H17.1969C16.079 9 15.5192 9 15.0918 8.78223C14.7155 8.59048 14.4097 8.28392 14.218 7.90759C14 7.47977 14 6.9201 14 5.8V3.00087M9 14L11 16M4 21V18.5L11.5 11L14 13.5L6.5 21H4Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BuildingIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 20H4M4 20H14M4 20V6.2002C4 5.08009 4 4.51962 4.21799 4.0918C4.40973 3.71547 4.71547 3.40973 5.0918 3.21799C5.51962 3 6.08009 3 7.2002 3H10.8002C11.9203 3 12.4796 3 12.9074 3.21799C13.2837 3.40973 13.5905 3.71547 13.7822 4.0918C14 4.5192 14 5.07899 14 6.19691V12M14 20H20M14 20V12M20 20H22M20 20V12C20 11.0681 19.9999 10.6024 19.8477 10.2349C19.6447 9.74481 19.2557 9.35523 18.7656 9.15224C18.3981 9 17.9316 9 16.9997 9C16.0679 9 15.6019 9 15.2344 9.15224C14.7443 9.35523 14.3552 9.74481 14.1522 10.2349C14 10.6024 14 11.0681 14 12M7 10H11M7 7H11"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellRingIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7047 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29477 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9M18.0186 2.01367C19.3978 3.05299 20.4843 4.43177 21.1724 6.01574M5.98197 2.01367C4.60275 3.05299 3.5162 4.43177 2.82812 6.01574"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MonitorPlayIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 20H9M4 13.8002V8.2002C4 7.08009 4 6.51962 4.21799 6.0918C4.40973 5.71547 4.71547 5.40973 5.0918 5.21799C5.51962 5 6.08009 5 7.2002 5H16.8002C17.9203 5 18.4796 5 18.9074 5.21799C19.2837 5.40973 19.5905 5.71547 19.7822 6.0918C20 6.5192 20 7.07899 20 8.19691V13.8031C20 14.921 20 15.48 19.7822 15.9074C19.5905 16.2837 19.2837 16.5905 18.9074 16.7822C18.48 17 17.921 17 16.8031 17H7.19691C6.07899 17 5.5192 17 5.0918 16.7822C4.71547 16.5905 4.40973 16.2837 4.21799 15.9074C4 15.4796 4 14.9203 4 13.8002ZM14.5 11L10 8V14L14.5 11Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PuzzleIcon(props: TIconStylingProps) {
  const { strokeColor = "#C2C3C4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7H17.8486C17.3511 7 17 6.49751 17 6C17 4.34315 15.6569 3 14 3C12.3431 3 11 4.34315 11 6C11 6.49751 10.6488 7 10.1513 7H8C7.44771 7 7 7.44772 7 8V10.1513C7 10.6488 6.49751 11 6 11C4.34315 11 3 12.3431 3 14C3 15.6569 4.34315 17 6 17C6.49751 17 7 17.3511 7 17.8486V20C7 20.5523 7.44771 21 8 21L20 21C20.5523 21 21 20.5523 21 20V17.8486C21 17.3511 20.4975 17 20 17C18.3431 17 17 15.6569 17 14C17 12.3431 18.3431 11 20 11C20.4975 11 21 10.6488 21 10.1513L21 8C21 7.44772 20.5523 7 20 7Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: TIconStylingProps) {
  const { strokeColor = "#828285", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5L16 12L9 19"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OnlineIcon(props: TIconStylingProps) {
  const { strokeColor = "#c2c3c4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 15.9999C19 14.2583 17.3304 12.7767 15 12.2275M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M13 9C15.2091 9 17 7.20914 17 5C17 2.79086 15.2091 1 13 1M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OfflineIcon(props: TIconStylingProps) {
  const { strokeColor = "#c2c3c4", size = "24" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17H6M4.19691 14C3.07899 14 2.5192 14 2.0918 13.7822C1.71547 13.5905 1.40973 13.2837 1.21799 12.9074C1.09698 12.6699 1.04315 12.3919 1.0192 12M4.19691 14H13.8031M4.19691 14H2.59961C2.03956 14 1.75981 13.9996 1.5459 13.8906C1.35774 13.7948 1.20487 13.6429 1.10899 13.4548C1 13.2409 1 12.9601 1 12.4V12H1.0192M1.0192 12C1 11.6859 1 11.2985 1 10.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H13.8002C14.9203 1 15.4796 1 15.9074 1.21799C16.2837 1.40973 16.5905 1.71547 16.7822 2.0918C17 2.5192 17 3.07899 17 4.19691V10.8031C17 11.3 17 11.6864 16.9809 12M1.0192 12H16.9809M16.9809 12C16.957 12.3919 16.9032 12.67 16.7822 12.9074C16.5905 13.2837 16.2837 13.5905 15.9074 13.7822C15.48 14 14.921 14 13.8031 14M16.9809 12H17V12.4C17 12.9601 16.9996 13.2409 16.8906 13.4548C16.7948 13.6429 16.6423 13.7948 16.4542 13.8906C16.2403 13.9996 15.9597 14 15.3996 14H13.8031"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon({ stroke = "#171719" }: { stroke?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="transparent" />
      <path
        d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WriteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.08301 20.0001H20.0166M4.08301 20.0001V16.0001L12.0498 8.00012M4.08301 20.0001L8.06641 20.0001L16.0332 12.0001M12.0498 8.00012L14.9065 5.13146L14.9083 5.12976C15.3015 4.73488 15.4985 4.53709 15.7255 4.46301C15.9255 4.39775 16.141 4.39775 16.341 4.46301C16.5679 4.53704 16.7647 4.7346 17.1573 5.12892L18.8899 6.86872C19.2843 7.26474 19.4816 7.46284 19.5554 7.69117C19.6204 7.89201 19.6204 8.10835 19.5554 8.3092C19.4816 8.53736 19.2846 8.73516 18.8908 9.13061L18.8899 9.13146L16.0332 12.0001M12.0498 8.00012L16.0332 12.0001"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PaginationChevronIcon({
  direction,
}: {
  direction: "prev" | "next";
}) {
  return (
    <span className={clsx([direction === "prev" ? "rotate-180" : ""])}>
      <ChevronRightIcon strokeColor="#171719" />
    </span>
  );
}

export function CheckboxCheckedIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.4805 21 18.9215 21 17.8036V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
        fill="#2A7FFE"
      />
      <path
        d="M16.0003 9L10.667 15L8 12M3 17.8002V6.2002C3 5.08009 3 4.51962 3.21799 4.0918C3.40973 3.71547 3.71547 3.40973 4.0918 3.21799C4.51962 3 5.08009 3 6.2002 3H17.8002C18.9203 3 19.4796 3 19.9074 3.21799C20.2837 3.40973 20.5905 3.71547 20.7822 4.0918C21 4.5192 21 5.07899 21 6.19691V17.8036C21 18.9215 21 19.4805 20.7822 19.9079C20.5905 20.2842 20.2837 20.5905 19.9074 20.7822C19.48 21 18.921 21 17.8031 21H6.19691C5.07899 21 4.5192 21 4.0918 20.7822C3.71547 20.5905 3.40973 20.2842 3.21799 19.9079C3 19.4801 3 18.9203 3 17.8002Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.4805 21 18.9215 21 17.8036V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
        stroke="#2A7FFE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckobUncheckedIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.4805 21 18.9215 21 17.8036V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
        stroke="#C7C8C9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RadioCheckedIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
        fill="#2A7FFE"
        stroke="#2A7FFE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        stroke="#2A7FFE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RadioUncheckedIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        stroke="#C7C8C9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LikeThumbIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      width="34"
      height="36"
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1129 19.5773L18.8032 6.77417C19.935 6.77417 21.0205 7.2238 21.8209 8.02416C22.6212 8.82451 23.0709 9.91002 23.0709 11.0419V16.7322H31.1226C31.5351 16.7275 31.9436 16.8126 32.3198 16.9814C32.6961 17.1503 33.0312 17.399 33.3018 17.7102C33.5725 18.0214 33.7722 18.3878 33.8872 18.7839C34.0022 19.18 34.0297 19.5963 33.9678 20.0041L32.0046 32.8072C31.9017 33.4857 31.5571 34.1041 31.0343 34.5485C30.5115 34.9929 29.8456 35.2334 29.1595 35.2256H13.1129M13.1129 19.5773V35.2256M13.1129 19.5773H8.84515C8.09057 19.5773 7.36689 19.8771 6.83332 20.4106C6.29976 20.9442 6 21.6679 6 22.4225V32.3805C6 33.1351 6.29976 33.8587 6.83332 34.3923C7.36689 34.9259 8.09057 35.2256 8.84515 35.2256H13.1129"
        stroke={active ? "2A7FFE" : "#464748"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RefreshIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8H5V3M5.29102 16.3569C6.22284 17.7918 7.59014 18.8902 9.19218 19.4907C10.7942 20.0913 12.547 20.1624 14.1925 19.6937C15.8379 19.225 17.2893 18.2413 18.3344 16.8867C19.3795 15.5321 19.963 13.878 19.9989 12.1675C20.0347 10.4569 19.5211 8.78001 18.5337 7.38281C17.5462 5.98561 16.1366 4.942 14.5122 4.40479C12.8878 3.86757 11.1341 3.86499 9.5083 4.39795C7.88252 4.93091 6.47059 5.97095 5.47949 7.36556"
        stroke="#171719"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17H19M5 12H19M5 7H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AdditionIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10H10M10 10H14M10 10V14M10 10V6M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
