/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                third: 'rgb(var(--color-third))',
                fourth: 'rgb(var(--color-fourth))'
            },
            fontFamily: {
                serif: ['Aguafina Script', 'serif'],
            },
        },
        plugins: [],
    }
};
