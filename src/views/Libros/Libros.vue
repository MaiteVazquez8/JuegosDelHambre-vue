<script>
import '../assets/libros.css'
</script>

<template>
  <section class="tarjetas">
    <div class="libro">
      <h1>Los juegos del hambre</h1>
      <p>El primer libro publicado, el tercero en orden cronologico</p>
      <img src="../assets/juegos.jpg" alt="Los juegos del hambre">
      <div class="hero-actions hero-actions-home">
        <router-link to="/juegos" class="btn btn-home">Los juegos del hambre</router-link>
      </div>
    </div>
    <div class="libro">
      <h1>En llamas</h1>
      <p>El segundo libro publicado, el cuarto en orden cronologico</p>
      <img src="../assets/llamas.jpg" alt="En llamas">
      <div class="hero-actions hero-actions-home">
        <router-link to="/llamas" class="btn btn-home">En llamas</router-link>
      </div>
    </div>
    <div class="libro">
      <h1>Sinsajo</h1>
      <p>El tercer libro publicado, el quinto en orden cronologico</p>
      <img src="../assets/sinsajo.jpg" alt="Sinsajo">
      <div class="hero-actions hero-actions-home">
        <router-link to="/sinsajo" class="btn btn-home">Sinsajo</router-link>
      </div>
    </div>
    <div class="libro">
      <h1>Balada de pajaros cantores y serpientes</h1>
      <p>El cuarto libro publicado, el primero en orden cronologico</p>
      <img src="../assets/balada.jpg" alt="Balada de pajaros cantores y serpientes">
      <div class="hero-actions hero-actions-home">
        <router-link to="/balada" class="btn btn-home">Balada de pajaros cantores y serpientes</router-link>
      </div>
    </div>
    <div class="libro">
      <h1>Amanecer en la cosecha</h1>
      <p>El quinto libro publicado, el segundo en orden cronologico</p>
      <img src="../assets/amanecer.jpg" alt="Amanecer en la cosecha">
      <div class="hero-actions hero-actions-home">
        <router-link to="/amanecer" class="btn btn-home">Amanecer en la cosecha</router-link>
      </div>
    </div>
  </section>
</template>