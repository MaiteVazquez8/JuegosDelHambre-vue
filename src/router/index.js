import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Libros from '../views/Libros.vue'
import Llamas from '../views/EnLlamas.vue'
import Balada from '../views/Balada.vue'
import Amanecer from '../views/Amanecer.vue'
import Juegos from '../views/JuegosDelHambre.vue'
import Galeria from '../views/Galeria.vue'
import Patrocinio from '../views/Patrocinio.vue'
import Sinsajo from '../views/Sinsajo.vue'
const routes = [
{ path: '/', component: Home },
{ path: '/libros', component: Libros },
{ path: '/llamas', component: Llamas },
{ path: '/balada', component: Balada },
{ path: '/amanecer', component: Amanecer },
{ path: '/juegos', component: Juegos },
{ path: '/galeria', component: Galeria },
{ path: '/patrocinio', component: Patrocinio },
{ path: '/sinsajo', component: Sinsajo }
]
const router = createRouter({
history: createWebHistory(),
routes
})
export default router