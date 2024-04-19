/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                maxContent: "1260px",
                maxContentTab: "650px",
            },
            colors: {
                colorBlackBackground: "#06182b",
                colorLightBlack: "#162739",
                colorDarkBlack: "#010308",
                colorRoyalBlue: "#1111d2",
                colorLavender: "#b4b9f3",
                colorGhostWhite: "#f9f9fa",
                colorOxfordBlue: "#2d3060",
                colorLightPurple: "#8170d6",
                colorBlueBell: "#a9b2cc",
                colorDarkPurple: "#8a42f5",
                colorWhiteBorder: "#f9f9fa8b",
            },
        },
    },
    plugins: [],
};
