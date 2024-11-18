import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue';
import AppAbout from '../pages/AppAbout.vue';
import AppPosts from '../pages/AppPosts.vue';

// % per ogni rotta che voglio identificare 
// # e quindi offrire all'utente che naviga
// < definisco un nuovo oggetto letterale con almeno un path e un component a cui si riferisce
// > il component a cui si riferisce e' un tipo particolare di component, ovvero una pagina
// * facoltativamente, possiamo aggiungere anche il name per raggiungere la rotta by name e non piu' by uri 
const routes = [
    { path: '/', component: AppHome, name: "home" },
    { path: '/about', component: AppAbout, name: "about"},
    { path: '/posts', component: AppPosts, name: "posts"},
]

const router = createRouter({
    history: createWebHistory(), // * usa la navigazione come se fosse una navigazione normale 
    routes, // * usa quelle rotte che ho definito con il nome di routes
})

export { router };