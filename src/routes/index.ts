import {createRouter, createMemoryHistory, createWebHistory} from "vue-router";

// declare global {
//     interface ImportMeta {
//         env: {
//            SSR: boolean
//         };
//     }
// }

export default () => createRouter({
	scrollBehavior: () => ({ left: 0, top: 0 }),
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
	  { name: 'home', path: "/", component: () => import('../views/Home.vue') },
	  { name: 'router', path: "/router", component: () => import('../components/HelloVueRouter.vue') },
	  { name: 'user', path: "/user", component: () => import('../views/User.vue') },	  
	  { name: 'market', path: "/market", component: () => import('../views/Market.vue') },
    ]
})