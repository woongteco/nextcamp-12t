import type { Config } from "tailwindcss";

const pxToRem = (px: number): string => {
  // 1rem = 16px 기준으로 계산됨
  const rem = 16;
  return `${parseFloat((px / rem).toFixed(2))}rem`;
};

const config: Config = {
  plugins: [],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "24px",
      },
    },
    screens: {
      // ...breakpoints
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      // 1rem = 16px 기준으로 계산됨
      "H1": [
        pxToRem(56),
        {
          lineHeight: "128.6%",
          letterSpacing: "-0.0319em",
          fontWeight: 700, // "bold",
        },
      ],
      "H2": [
        pxToRem(32),
        {
          lineHeight: "133.4%",
          letterSpacing: "-0.027em",
          fontWeight: 700, // "bold",
        },
      ],
      "H3": [
        pxToRem(22),
        {
          lineHeight: "136.4%",
          letterSpacing: "-0.0194em",
          fontWeight: 700, // "bold",
        },
      ],
      "H4": [
        pxToRem(18),
        {
          lineHeight: "144.5%",
          letterSpacing: "-0.0002em",
          fontWeight: 700, // "bold",
        },
      ],
      "subtitle": [
        pxToRem(14),
        {
          lineHeight: "136.4%",
          letterSpacing: "-0.0194em",
          fontWeight: 400, // "regular",
        },
      ],
      "caption": [
        pxToRem(12),
        {
          lineHeight: "133.4%",
          letterSpacing: "0",
          fontWeight: 400, //" regular",
        },
      ],
      "body-400": [
        pxToRem(16),
        {
          lineHeight: "150%",
          letterSpacing: "0",
          fontWeight: 400, // "regular",
        },
      ],
      "body-600": [
        pxToRem(16),
        {
          lineHeight: "150%",
          letterSpacing: "0",
          fontWeight: 600, // "semibold"
        },
      ],
      "label-400": [
        pxToRem(14),
        {
          lineHeight: "142.9%",
          letterSpacing: "0",
          fontWeight: 400, // "regular",
        },
      ],
      "label-600": [
        pxToRem(14),
        {
          lineHeight: "142.9%",
          letterSpacing: "0",
          fontWeight: 600, // "semibold"
        },
      ],
      "label-form": [
        pxToRem(18),
        {
          lineHeight: "144.5%",
          letterSpacing: "-0.02%",
          fontWeight: 600, // "semibold"
        },
      ],
    },
    colors: {
      "white": "#ffffff", // = bg-normal
      "black": "#000000",
      "transparent": "transparent",
      "main-25": "#E6F0FF",
      "main-50": "#C7DEFF",
      "main-100": "#B4D2FF",
      "main-200": "#92BEFF",
      "main-300": "#7AB0FF",
      "main-400": "##599CFF",
      "main-500": "#3E8BFF",
      "main-600": "#2A7FFE", // primary-normal
      "main-700": "#1468E7",
      "main-800": "#0050C8",
      "main-900": "#0042A4",
      "main-950": "#002B6C",
      "primary-normal": "#2A7FFE", // = main-600
      "primary-strong": "#005EEB",
      "primary-heavy": "#0054D1",
      "primary-heavy2": "#0FFED4",
      "primary-heavy3": "#9EF103",
      "satus-positive": "#00BF40",
      "satus-caution": "#FF9200",
      "satus-danger": "#FF4242",
      "label-normal": "#171719",
      "label-strong": "#000000",
      "label-neutral": "#464748",
      "label-alt": "#B2B2B4",
      "label-assist": "rgba(55, 56, 60, 28%)",
      "label-disable": "rgba(55, 56, 60, 16%)",
      "line-input": "#DBDBDD",
      "line-input-hover": "#B3B3B3",
      "line-normal": "#E0E0E2",
      "line-neutral": "#E6E6E8",
      "line-alt": "#F4F4F5",
    },
    extend: {
      backgroundColor: {
        // bg-*
        backdrop: "rgba(55, 56, 60, 12%)",
        normal: "#FFFFFF",
        alt: "#F7F7F8",
        card: "#F0F4FA",
      },
      boxShadow: {
        // shadow-*
        normal: "0 0 1px 0 rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
        emphasize:
          "0 0 1px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.12)",
        strong:
          "0 0 4px 0 rgba(0, 0, 0, 0.08), 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 20px 30px 0 rgba(16, 36, 94, 0.12)",
        heavy:
          "0 0 8px 0 rgba(0, 0, 0, 0.08), 0 8px 16px 0 rgba(0, 0, 0, 0.08), 0 30px 40px 0 rgba(16, 36, 94, 0.2)",
      },
      zIndex: {
        "base": "0",
        "header": "20",
        "header-dropdown": "10",
        "dropdown-back": "30",
        "dropdown": "40",
        "modal-back": "50",
        "modal": "60",
      },
      borderRadius: {
        ten: "10px",
        twenty: "20px",
      },
      spacing: {
        "100": "100px",
        "gutter-xl": "30px",
        "gutter-lg": "24px",
        "gutter-md": "16px",
        "gutter-sm": "20px",
        "margin-lg": "24px",
        "margin": "16px",
      },
    },
  },
};
export default config;
