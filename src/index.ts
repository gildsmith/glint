import type { App } from 'vue'
import * as components from './components'

// TODO
import './styles/app.css'

const install = (app: App): void => {
    for (const [name, comp] of Object.entries(components)) {
        app.component(name, comp)
    }
}

export const Glint = { install }
export * from './components'
