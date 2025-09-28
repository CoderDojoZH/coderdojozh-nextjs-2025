// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
}