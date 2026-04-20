<script setup>
// Importamos el composable 'useI18n' de la librería vue-i18n para manejar la internacionalización.
import { useI18n } from 'vue-i18n'

// Extraemos la variable reactiva 'locale' que contiene el idioma actual de la aplicación.
const { locale } = useI18n()

// Definimos un arreglo estático de objetos con los idiomas disponibles.
// 'code' es el identificador del idioma y 'label' es el texto corto que verá el usuario.
const codes = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

// Función encargada de actualizar el idioma de la aplicación.
function setLocale(code) {
  // Solo actualizamos el valor si el idioma seleccionado es diferente al actual,
  // evitando re-renderizados innecesarios.
  if (locale.value !== code) {
    locale.value = code
  }
}
</script>

<template>
  <div
    class="locale-switcher"
    role="group"
    aria-label="Idioma / Language"
  >
    <button
      v-for="item in codes"
      :key="item.code"
      type="button"
      class="locale-switcher__btn"
      :class="{ 'locale-switcher__btn--active': locale === item.code }"
      :aria-pressed="locale === item.code"
      :aria-label="item.code === 'es' ? 'Español' : 'English'"
      @click="setLocale(item.code)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped>
/*
  El modificador 'scoped' asegura que estos estilos CSS solo se apliquen a este componente
  y no afecten accidentalmente a otros elementos globales de la aplicación.
*/

/* Estilos del contenedor principal (simula un "segmented control" nativo de iOS/macOS) */
.locale-switcher {
  display: inline-flex; /* Permite que los botones se alineen en fila ocupando su contenido */
  flex-shrink: 0; /* Evita que el contenedor se encoja si falta espacio en pantalla */
  align-items: stretch; /* Estira todos los botones hijos para que tengan la misma altura */
  padding: 3px; /* Pequeño espaciado interno entre el borde exterior y los botones */
  border-radius: var(--apple-radius-pill); /* Borde redondeado usando variables de sistema */
  background: rgba(0, 0, 0, 0.06); /* Fondo semi-transparente oscuro */
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06); /* Sombra interna sutil que actúa como un borde suave */
  font-family: var(--apple-font); /* Se adhiere a la tipografía global definida */
  -webkit-font-smoothing: antialiased; /* Mejora el renderizado de la fuente en pantallas de Apple */
}

/* Estilos base para cada botón individual */
.locale-switcher__btn {
  position: relative; /* Necesario para mantener el contexto de apilamiento */
  margin: 0;
  min-width: 2.5rem; /* Anchura mínima para asegurar proporciones táctiles adecuadas */
  padding: 0.35rem 0.7rem; /* Espaciado interno horizontal y vertical del texto */
  border: none; /* Resetea el borde estándar que los navegadores dan a los botones */
  border-radius: calc(var(--apple-radius-pill) - 4px); /* Radio ligeramente menor para encajar dentro del padding */
  background: transparent; /* Invisibles por defecto, solo el texto se ve */
  color: var(--apple-text-secondary); /* Color atenuado (desactivado) por defecto */
  font: inherit; /* Hereda las propiedades tipográficas del contenedor padre */
  font-size: var(--apple-header-segment-label-size, 11px); /* Tamaño con valor por defecto (fallback) de 11px */
  font-weight: var(--apple-header-segment-label-weight, 500); /* Texto en seminegrita */
  letter-spacing: var(--apple-header-nav-tracking, -0.01em); /* Ajuste tipográfico entre letras */
  line-height: 1.2;
  cursor: pointer; /* Cambia el cursor a una mano para indicar que es clickeable */
  
  /* Transiciones suaves para animar los cambios de color, fondo y sombras al interactuar */
  transition:
    color 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;
}

/* Efecto visual al pasar el ratón por encima (hover), PERO solo si no es el botón activo actualmente */
.locale-switcher__btn:hover:not(.locale-switcher__btn--active) {
  color: var(--apple-text); /* El texto se oscurece / resalta */
  background: rgba(255, 255, 255, 0.45); /* Muestra un fondo blanco semi-transparente como pista visual */
}

/* Estilos exclusivos para el botón que representa el idioma actual */
.locale-switcher__btn--active {
  color: var(--apple-text); /* Color de texto fuerte (activo) */
  background: #ffffff; /* Fondo blanco sólido para que destaque claramente sobre el gris */
  
  /* Múltiples sombras para darle un efecto 3D de "pastilla física" elevada */
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1), /* Sombra principal hacia abajo */
    0 0 0 0.5px rgba(0, 0, 0, 0.05); /* Borde sutil usando sombra esparcida */
}

/* Accesibilidad: Elimina el antiestético anillo de foco nativo al hacer clic normal con el ratón */
.locale-switcher__btn:focus {
  outline: none;
}

/* Accesibilidad: Aplica un anillo de foco SOLAMENTE cuando el usuario navega 
  usando el teclado (por ejemplo, con la tecla Tab).
*/
.locale-switcher__btn:focus-visible {
  outline: var(--apple-focus-ring); /* Utiliza la variable del sistema para los anillos de foco */
  outline-offset: 2px; /* Separa el anillo un poco hacia afuera del botón */
  z-index: 1; /* Asegura que el contorno se dibuje siempre por encima de los botones vecinos */
}
</style>