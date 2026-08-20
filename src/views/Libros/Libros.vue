<script setup>
import '../../assets/libros.css'
</script>

<template>
  <section class="pagina-libros">
    <div class="hero hero-libros">
      <p class="eyebrow eyebrow-home">Suzanne Collins</p>
      <h1>Los libros</h1>
      <p>Pasá el cursor sobre cada portada para conocer de qué trata cada libro de la saga.</p>
    </div>

    <div class="tarjetas">
      <router-link to="/juegos" class="tarjeta-libro">
        <div class="tarjeta-libro__imagen">
          <img src="../../Media/Libros/Portadas/juegosPortada.webp" alt="Los juegos del hambre">
        </div>
        <div class="tarjeta-libro__texto">
          <h2>Los juegos del hambre</h2>
          <p>El primer libro publicado, el tercero en orden cronológico.</p>
          <span class="tarjeta-libro__cta">Ver ficha completa</span>
        </div>
      </router-link>

      <router-link to="/llamas" class="tarjeta-libro">
        <div class="tarjeta-libro__imagen">
          <img src="../../Media/Libros/Portadas/llamasPortada.webp" alt="En llamas">
        </div>
        <div class="tarjeta-libro__texto">
          <h2>En llamas</h2>
          <p>El segundo libro publicado, el cuarto en orden cronológico.</p>
          <span class="tarjeta-libro__cta">Ver ficha completa</span>
        </div>
      </router-link>

      <router-link to="/sinsajo" class="tarjeta-libro">
        <div class="tarjeta-libro__imagen">
          <img src="../../Media/Libros/Portadas/libro3.jpg" alt="Sinsajo">
        </div>
        <div class="tarjeta-libro__texto">
          <h2>Sinsajo</h2>
          <p>El tercer libro publicado, el quinto en orden cronológico.</p>
          <span class="tarjeta-libro__cta">Ver ficha completa</span>
        </div>
      </router-link>

      <router-link to="/balada" class="tarjeta-libro">
        <div class="tarjeta-libro__imagen">
          <img src="../../Media/Libros/Portadas/libro4.avif" alt="Balada de pajaros cantores y serpientes">
        </div>
        <div class="tarjeta-libro__texto">
          <h2>Balada de pájaros cantores y serpientes</h2>
          <p>El cuarto libro publicado, el primero en orden cronológico.</p>
          <span class="tarjeta-libro__cta">Ver ficha completa</span>
        </div>
      </router-link>

      <router-link to="/amanecer" class="tarjeta-libro">
        <div class="tarjeta-libro__imagen">
          <img src="../../Media/Libros/Portadas/libro5.webp" alt="Amanecer en la cosecha">
        </div>
        <div class="tarjeta-libro__texto">
          <h2>Amanecer en la cosecha</h2>
          <p>El quinto libro publicado, el segundo en orden cronológico.</p>
          <span class="tarjeta-libro__cta">Ver ficha completa</span>
        </div>
      </router-link>
    </div>
  </section>
</template>