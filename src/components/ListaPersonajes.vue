<script setup>
import { computed, useSlots } from 'vue'

const slots = useSlots()
const props = defineProps({
  nombres: {
    type: String,
    required: true,
  },
})

const escaparRegex = (texto) => texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const personajes = computed(() => {
  const texto = slots.default?.().map((nodo) => nodo.children ?? '').join('') ?? ''
  const nombres = props.nombres.split('|').map((nombre) => nombre.trim())
  const separador = new RegExp(`(?=(${nombres.map(escaparRegex).join('|')})\\s+-\\s+)`)

  return texto
    .replace(/\s*\r?\n\s*/g, ' ')
    .split(separador)
    .map((linea) => linea.trim())
    .filter(Boolean)
    .filter((linea) => !nombres.includes(linea))
    .map((linea) => {
      const separador = linea.indexOf(' - ')
      return separador === -1
        ? { nombre: linea, descripcion: '' }
        : { nombre: linea.slice(0, separador), descripcion: linea.slice(separador + 3) }
    })
})
</script>

<template>
  <ul class="personajes-lista">
    <li v-for="personaje in personajes" :key="personaje.nombre" class="personaje">
      <h3>{{ personaje.nombre }}</h3>
      <p>{{ personaje.descripcion }}</p>
    </li>
  </ul>
</template>

<style scoped>
.personajes-lista { display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 0; padding: 0; list-style: none; }
.personaje { padding: 1.15rem; border: 1px solid var(--borde); border-radius: var(--radio); background: linear-gradient(135deg, var(--negro-suave), var(--carbon)); }
.personaje h3 { margin-bottom: 0.7rem; font-size: 0.95rem; }
.personaje p { margin: 0; font-size: 0.9rem; }
</style>
