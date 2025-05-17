import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        dts({insertTypesEntry: true})
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'Glint',
            fileName: format => `glint.${format}.js`
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {vue: 'Vue'},
            }
        }
    }
})
