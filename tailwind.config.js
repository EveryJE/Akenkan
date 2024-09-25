/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./app/*.tsx",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        darkMode: "class",
        extend: {
            fontFamily: {
                rmono: ['Roboto-Mono', 'sans-serif'],
                kent: ["Kent", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                oswald: ["Oswald", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                koala: ["Koala", "sans-serif"],
                sans: ["Sans", "sans-serif"],
                hci: ["Hci", "sans-serif"],

            },
            colors: {
                dark: {
                    100: '#ff7400',
                    200: '#e56b00',
                    300: '#cc6200',
                    400: '#b35900',
                    500: '#994f00',
                    600: '#804600',
                    700: '#663c00',
                    800: '#4d3300',
                    900: '#332900',
                },
                light: {
                    100: '#ffffff',
                    200: '#fff2e5',
                    300: '#ffe5cc',
                    400: '#ffd9b3',
                    500: '#ffcc99',
                    600: '#ffb699',
                    700: '#ffa066',
                    800: '#ff8a33',
                    900: '#ff7400',
                }, "amber": {
                    "50": "#fffbeb",
                    "100": "#fef3c7",
                    "200": "#fde68a",
                    "300": "#fcd34d",
                    "400": "#fbbf24",
                    "500": "#f59e0b",
                    "600": "#d97706",
                    "700": "#b45309",
                    "800": "#92400e",
                    "900": "#78350f"
                }
            },

        },
    },
    plugins: [],
}