<template>
  <section class="page page-home">
    <div class="hero hero-home">
      <p class="eyebrow eyebrow-home">Guía informativa</p>
      <h1>Bienvenidos a Hogwarts</h1>
      <p>Esta página está pensada como un espacio de información sobre la escuela de magia y hechicería de Hogwarts. Aquí podrás conocer su mundo, su castillo y, en el futuro, explorar las casas, sus fundadores y personajes célebres.</p>
      <div class="hero-actions hero-actions-home">
        <router-link to="/escuela" class="btn btn-home">Descubrir el castillo</router-link>
      </div>
    </div>

    <div class="cards cards-home">
      <article class="card card-home">
        <h2>¿De qué va esta página?</h2>
        <p>Es una guía introductoria para quienes quieren aprender más sobre Hogwarts, desde su identidad hasta los lugares que la hacen especial.</p>
      </article>

      <article class="card card-home">
        <h2>Próximas secciones</h2>
        <p>En próximas páginas se ampliará la información sobre las casas, sus fundadores y personajes destacados de cada una.</p>
      </article>

      <article class="card card-home">
        <h2>Empezar por la escuela</h2>
        <p>Conoce el castillo, la escuela y el ambiente que convierten a Hogwarts en un lugar único.</p>
        <router-link to="/escuela" class="link link-home">Ir a la escuela →</router-link>
      </article>
    </div>
  </section>
</template>