<script setup>
import logo from './Media/logo.png'
import { useRoute } from 'vue-router'
 
const route = useRoute()
</script>
 
<template>
  <header class="site-header">
    <router-link to="/" class="brand" aria-label="Inicio">
      <img :src="logo" alt="Los Juegos del Hambre" class="brand__logo">
    </router-link>
    <nav class="site-nav" aria-label="Navegación principal">
      <router-link v-if="route.path !== '/'" to="/">Inicio</router-link>
      <router-link v-if="route.path !== '/libros'" to="/libros">Libros</router-link>
      <router-link v-if="route.path !== '/patrocinio'" to="/patrocinio">Patrocinio</router-link>
    </nav>
  </header>
  <main><router-view /></main>
</template>
 
<style scoped>
.site-header { 
  position: sticky; 
  z-index: 10; top: 0; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 2rem; min-height: 4.75rem; 
  padding: 0.45rem clamp(1.25rem, 5vw, 5rem); 
  border-bottom: 1px solid var(--borde); 
  background: rgba(6, 6, 6, 0.9); 
  backdrop-filter: blur(14px); 
}
.brand { 
  display: inline-flex; 
  align-items: center; 
}
.brand__logo { 
  width: 4rem; 
  height: 4rem; 
  object-fit: contain; 
}
.site-nav { 
  display: flex; 
  align-items: center; 
  gap: 0.4rem;
}
.site-nav a { 
  padding: 0.5rem 0.7rem; 
  border-radius: var(--radio); 
  color: var(--texto-tenue); 
  font-family: var(--fuente-titulo); 
  font-size: 0.75rem; 
  letter-spacing: 0.09em; 
  text-transform: uppercase; 
}
.site-nav a:hover, .site-nav a.router-link-exact-active { 
  background: rgba(207, 159, 46, 0.12); 
  color: var(--dorado-claro); 
}
@media (max-width: 520px) { 
  .site-header { 
    flex-direction: column; 
    gap: 0.35rem; 
    padding: 0.45rem 1rem; 
  }
  .brand__logo { 
    width: 3.3rem; 
    height: 3.3rem; 
  }
  .site-nav { 
    width: 100%; 
    justify-content: space-around;
  }
  .site-nav a { 
    padding: 0.35rem 0.45rem; 
  }
}
</style>