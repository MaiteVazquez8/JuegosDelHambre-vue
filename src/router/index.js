import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Libros from '../views/Libros/Libros.vue'
import Llamas from '../views/Libros/EnLlamas.vue'
import Balada from '../views/Libros/Balada.vue'
import Amanecer from '../views/Libros/Amanecer.vue'
import Juegos from '../views/Libros/JuegosDelHambre.vue'
import Galeria from '../views/Galeria.vue'
import Patrocinio from '../views/Patrocinio.vue'
import Sinsajo from '../views/Libros/Sinsajo.vue'
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