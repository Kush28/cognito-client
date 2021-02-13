module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "2rem",
    },

    extend: {
      colors: {
        primary: "#465EFC",
      },
      boxShadow: {
        drop:
          "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);",
        inset:
          "12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,  -8px -8px 12px 0 rgba(0, 0, 0, .25) inset;",
      },
      maxWidth: {
        70: "70%",
      },
      minWidth: {
        50: "50%",
      },
      backgroundImage: (theme) => ({
        concave:
          "linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
        concaveprimary:
          "linear-gradient(135deg, rgba(70,94,252,0.7), rgba(70,94,252,1))",
        convex:
          "linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
      }),
      gridTemplateRows: {
        msgbox: "auto 130px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
