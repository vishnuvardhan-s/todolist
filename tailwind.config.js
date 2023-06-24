/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                virgil: ['Virgil'],
            },
            backgroundImage: {
                'gradient-green': 'repeating-linear-gradient(135deg, #86EFAC 1px, #86EFAC 2px, #fff 2px, #fff 7px)',
                'gradient-green-button': 'repeating-linear-gradient(135deg, #86EFAC 1px, #86EFAC 2px, #fff 2px, #fff 6px)',
                'gradient-red-button': 'repeating-linear-gradient(135deg, #FCA5A5 1px, #FCA5A5 2px, #fff 3px, #fff 6px)',
            },
        },
    },
    plugins: [],
};
