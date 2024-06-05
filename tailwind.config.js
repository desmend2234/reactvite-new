const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite/**/*.js',
        require.resolve('react-widgets/styles.css'),
        flowbite.content(),
    ],
    theme: {
        fontFamily: {
            sans: 'Roboto mono,monospace',
        },
        extend: {
            screens: {
                xs: '360px',
            },
        },
    },
    plugins: [
        require('flowbite/plugin', 'react-widgets-tailwind'),
        flowbite.plugin(),
    ],
}
