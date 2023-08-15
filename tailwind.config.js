module.exports = {
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: "rgb(var(--th-white) / <alpha-value>)",
      black: "rgb(var(--th-black) / <alpha-value>)",
      bg: {
        light: "rgb(var(--th-bg-light) / <alpha-value>)",
        dark: "rgb(var(--th-bg-dark)/ <alpha-value>)",
        DEFAULT: "rgb(var(--th-bg) / <alpha-value>)",
      },
      gray: {
        light: "rgb(var(--th-gray-light) / <alpha-value>)",
        dark: "rgb(var(--th-gray-dark) / <alpha-value>)",
        DEFAULT: "rgb(var(--th-gray) / <alpha-value>)",
        100: "rgb(var(--th-gray-100) / <alpha-value>)",
      },
      green: {
        light: "rgb(var(--th-green-light) / <alpha-value>)",
        DEFAULT: "rgb(var(--th-green) / <alpha-value>)",
      },
      red: "rgb(var(--th-red) / <alpha-value>)",
      orange: "rgb(var(--th-orange) / <alpha-value>)",
    },
    extend: {
      backgroundImage: {
        "landing-slider-bg": "url('/src/assets/landing/landing-slider-bg.svg')",
      },
      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
    },
    fontSize: {
      head1: [
        "52px",
        {
          lineHeight: "72px",
          fontWeight: "600",
        },
      ],
      head2: [
        "44px",
        {
          lineHeight: "60px",
          fontWeight: "600",
        },
      ],
      head3: [
        "32px",
        {
          lineHeight: "44px",
          fontWeight: "600",
        },
      ],
      head4: [
        "24px",
        {
          lineHeight: "34px",
          fontWeight: "600",
        },
      ],
      head5: [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "600",
        },
      ],
      head6: [
        "16px",
        {
          lineHeight: "22px",
          fontWeight: "600",
        },
      ],
      bodyLg: [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "300",
        },
      ],
      bodyMd: [
        "15px",
        {
          lineHeight: "21px",
          fontWeight: "300",
        },
      ],
      bodySm: [
        "13px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      headlineMd: [
        "14px",
        {
          lineHeight: "16px",
          fontWeight: "600",
          letterSpacing: "0.2rem",
        },
      ],
      headlineSm: [
        "12px",
        {
          lineHeight: "14px",
          fontWeight: "600",
          letterSpacing: "0.2rem",
        },
      ],
      button: [
        "18px",
        {
          lineHeight: "22px",
          fontWeight: "600",
          letterSpacing: "0.08em",
        },
      ],
    },
    fontFamily: {
      spaceGrotesk: ["Space Grotesk", "sans-serif"],
      bigShoulderDisplay: ["Big Shoulders Display", "cursive"],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
    {
      pattern: /col-span-./,
    },
  ],
};
