import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        primaryDark: "rgba(255,255,255, 0.7);",
        secondary: "#336BFF",
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)",
        blueRadial:
          "linear-gradient(90deg, #6de4e8 0%, rgba(0, 178, 218, 0.6) 95.83%)",
        blueLight:
          "linear-gradient(90deg, #6de4e8 0%, rgba(255, 255, 255, 0.86) 95.83% )",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
