<script setup>
import '../assets/home.css'
</script>
 
<template>
  <section class="page page-home">
    <div class="hero hero-home">
      <div class="hero-home__copy">
        <p class="eyebrow eyebrow-home">Wiki de Los Juegos del Hambre</p>
        <h1>Universo de Los Juegos del Hambre</h1>
        <p>Información sobre la saga de Suzanne Collins: sus cinco libros, sus tramas y el funcionamiento del patrocinio dentro de la arena.</p>
        <div class="hero-home__acciones">
          <router-link to="/libros" class="btn">Explorar los libros</router-link>
          <router-link to="/patrocinio" class="link link-home">Ver patrocinio</router-link>
        </div>
      </div>
      <img class="hero-home__image" src="../Media/Libros/Portadas/juegosPortada.webp" alt="Portada de Los Juegos del Hambre, de Suzanne Collins">
    </div>
 
    <div class="tira-portadas">
      <router-link to="/balada" class="portada-mini" title="Balada de pájaros cantores y serpientes">
        <img src="../Media/Libros/Portadas/libro4.avif" alt="Balada de pájaros cantores y serpientes">
        <span class="portada-mini__orden">1º cronológico</span>
      </router-link>
      <router-link to="/amanecer" class="portada-mini" title="Amanecer en la cosecha">
        <img src="../Media/Libros/Portadas/libro5.webp" alt="Amanecer en la cosecha">
        <span class="portada-mini__orden">2º cronológico</span>
      </router-link>
      <router-link to="/juegos" class="portada-mini" title="Los juegos del hambre">
        <img src="../Media/Libros/Portadas/juegosPortada.webp" alt="Los juegos del hambre">
        <span class="portada-mini__orden">3º cronológico</span>
      </router-link>
      <router-link to="/llamas" class="portada-mini" title="En llamas">
        <img src="../Media/Libros/Portadas/llamasPortada.webp" alt="En llamas">
        <span class="portada-mini__orden">4º cronológico</span>
      </router-link>
      <router-link to="/sinsajo" class="portada-mini" title="Sinsajo">
        <img src="../Media/Libros/Portadas/libro3.jpg" alt="Sinsajo">
        <span class="portada-mini__orden">5º cronológico</span>
      </router-link>
    </div>
 
    <div class="orden-lectura">
      <div class="orden-lectura__columna">
        <h2>Orden de publicación</h2>
        <ol class="orden-lectura__lista">
          <li><router-link to="/juegos">Los juegos del hambre</router-link></li>
          <li><router-link to="/llamas">En llamas</router-link></li>
          <li><router-link to="/sinsajo">Sinsajo</router-link></li>
          <li><router-link to="/balada">Balada de pájaros cantores y serpientes</router-link></li>
          <li><router-link to="/amanecer">Amanecer en la cosecha</router-link></li>
        </ol>
      </div>
      <div class="orden-lectura__columna">
        <h2>Orden cronológico</h2>
        <ol class="orden-lectura__lista">
          <li><router-link to="/balada">Balada de pájaros cantores y serpientes</router-link></li>
          <li><router-link to="/amanecer">Amanecer en la cosecha</router-link></li>
          <li><router-link to="/juegos">Los juegos del hambre</router-link></li>
          <li><router-link to="/llamas">En llamas</router-link></li>
          <li><router-link to="/sinsajo">Sinsajo</router-link></li>
        </ol>
      </div>
    </div>
 
    <div class="cards cards-home">
      <article class="card card-home">
        <h2>Libros</h2>
        <p>Recorré cada novela de la saga, con su sinopsis, trama y personajes.</p>
        <router-link to="/libros" class="link link-home">Ver libros</router-link>
      </article>
 
      <article class="card card-home">
        <h2>Patrocinio</h2>
        <p>Conocé cómo funcionan los patrocinadores y los regalos dentro de la arena.</p>
        <router-link to="/patrocinio" class="link link-home">Ver patrocinio</router-link>
      </article>
 
    </div>
  </section>
</template>