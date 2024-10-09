import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            screens: {
                md: '768px',
            },
            center: true,
        },
        screens: {
            sm: '640px',
            md: '768px',
        },
    },
    plugins: [require('@tailwindcss/forms')],
} satisfies Config
