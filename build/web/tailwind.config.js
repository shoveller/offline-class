/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      tokenSetOrder: {
        0: "global"
      },
      black: "#000000",
      white: "#ffffff",
      primary: "#000000",
      secondary: "#ffffff",
      tertiary: "#f5f5f5",
      colors: {
        gray: {
          100: "#e1e1e1",
          200: "#c4c4c4",
          300: "#a6a6a6",
          400: "#898989",
          500: "#6b6b6b",
          600: "#565656",
          700: "#404040",
          800: "#2b2b2b",
          900: "#151515"
        },
        red: {
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000"
        },
        yellow: {
          100: "#fff4cc",
          200: "#ffe999",
          300: "#ffdd66",
          400: "#ffd233",
          500: "#ffc700",
          600: "#cc9f00",
          700: "#997700",
          800: "#665000",
          900: "#332800"
        },
        blue: {
          100: "#cce3ff",
          200: "#99c8ff",
          300: "#66acff",
          400: "#3391ff",
          500: "#0075ff",
          600: "#005ecc",
          700: "#004699",
          800: "#002f66",
          900: "#001733"
        },
        green: {
          100: "#d7f8cc",
          200: "#b0f199",
          300: "#88eb66",
          400: "#61e433",
          500: "#39dd00",
          600: "#2eb100",
          700: "#228500",
          800: "#175800",
          900: "#0b2c00"
        },
        info: {
          accent: "#0075ff",
          negative: "#ff0000",
          warning: "#ffc700",
          positive: "#39dd00",
          positiveTransparent: "#39dd001a",
          negativeTransparent: "#ff00001a"
        },
        contents: {
          contentPrimary: "#000000",
          contentSecondary: "#6b6b6b",
          contentTertiary: "#a6a6a6"
        },
        pink: {
          100: "#fff2f5",
          200: "#ffe6ea",
          300: "#ffd9e0",
          400: "#ffcdd5",
          500: "#ffc0cb",
          600: "#cc9aa2",
          700: "#99737a",
          800: "#664d51",
          900: "#332629"
        }
      },
      borderColor: {
        borderTransparent: "#8989894d",
        borderOpaque: "#898989"
      },
      above: {
        high: {
          color: "#0000004d",
          type: "dropShadow",
          x: 0,
          y: -16,
          blur: 48,
          spread: 0
        },
        medium: {
          color: "#00000033",
          type: "dropShadow",
          x: 0,
          y: -8,
          blur: 36,
          spread: 0
        },
        low: {
          color: "#0000001a",
          type: "dropShadow",
          x: 0,
          y: -4,
          blur: 24,
          spread: 0
        }
      },
      below: {
        high: {
          color: "#0000004d",
          type: "dropShadow",
          x: 0,
          y: 16,
          blur: 48,
          spread: 0
        },
        medium: {
          color: "#00000033",
          type: "dropShadow",
          x: 0,
          y: 8,
          blur: 36,
          spread: 0
        },
        low: {
          color: "#0000001a",
          type: "dropShadow",
          x: 0,
          y: 4,
          blur: 24,
          spread: 0
        }
      },
      fontFamilies: {
        pretendard: "Pretendard"
      },
      lineHeights: {
        0: "140%",
        1: "150%",
        2: "160%"
      },
      fontWeights: {
    "pretendard_0": "Bold",
    "pretendard_1": "SemiBold",
    "pretendard_2": "Regular"
      },
      fontSize: {
        0: 12.003,
        1: 16,
        2: 21.328,
        3: 28.43,
        4: 37.897,
        5: 50.517
      },
      letterSpacing: {
        0: "0%"
      },
      paragraphSpacing: {
        0: 0
      },
      heading: {
        medium: {
          fontFamily: "Pretendard",
          fontWeight: "Bold",
          lineHeight: "140%",
          fontSize: 16,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        large: {
          fontFamily: "Pretendard",
          fontWeight: "Bold",
          lineHeight: "140%",
          fontSize: 21.328,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xl: {
          fontFamily: "Pretendard",
          fontWeight: "Bold",
          lineHeight: "140%",
          fontSize: 28.43,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xxl: {
          fontFamily: "Pretendard",
          fontWeight: "Bold",
          lineHeight: "140%",
          fontSize: 37.897,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xxxl: {
          fontFamily: "Pretendard",
          fontWeight: "Bold",
          lineHeight: "140%",
          fontSize: 50.517,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        }
      },
      label: {
        small: {
          fontFamily: "Pretendard",
          fontWeight: "SemiBold",
          lineHeight: "150%",
          fontSize: 12.003,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        medium: {
          fontFamily: "Pretendard",
          fontWeight: "SemiBold",
          lineHeight: "150%",
          fontSize: 16,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        large: {
          fontFamily: "Pretendard",
          fontWeight: "SemiBold",
          lineHeight: "150%",
          fontSize: 21.328,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xl: {
          fontFamily: "Pretendard",
          fontWeight: "SemiBold",
          lineHeight: "150%",
          fontSize: 28.43,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xxl: {
          fontFamily: "Pretendard",
          fontWeight: "SemiBold",
          lineHeight: "150%",
          fontSize: 37.897,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        }
      },
      paragraph: {
        small: {
          fontFamily: "Pretendard",
          fontWeight: "Regular",
          lineHeight: "160%",
          fontSize: 12.003,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        medium: {
          fontFamily: "Pretendard",
          fontWeight: "Regular",
          lineHeight: "160%",
          fontSize: 16,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        large: {
          fontFamily: "Pretendard",
          fontWeight: "Regular",
          lineHeight: "160%",
          fontSize: 21.328,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xl: {
          fontFamily: "Pretendard",
          fontWeight: "Regular",
          lineHeight: "160%",
          fontSize: 28.43,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        }
      },
      textCase: {
        none: "none"
      },
      textDecoration: {
        none: "none"
      },
      paragraphIndent: {
        0: "0px"
      }
    },
  },
}
