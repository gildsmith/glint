import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        dts({insertTypesEntry: true}),
        cssInjectedByJsPlugin(),
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
