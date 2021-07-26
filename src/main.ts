// import { createApp } from 'vue'
import ssr from 'vite-ssr-vue'
import App from './App.vue'
import createRouter from './routes'
import createStore from './store'
import {createHead} from '@vueuse/head'
import {createPrefetch} from '@vuemod/prefetch'
// createApp(App).mount('#app')
// createSsr(App).mount('#app')
export default ssr(App, {
    created({app, url, isClient, initialState}) {
        const head = createHead()
        const router = createRouter()
        const store = createStore()
        const prefetch = createPrefetch()
        app
		 .use(router)
         .use(store)
         .use(head)
         .use(prefetch, router, store)

        return {head, router, store}
    }
})