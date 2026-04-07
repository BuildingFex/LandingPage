import { createApp } from 'vue'
import { watch } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import './assets/main.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')

watch(
  () => i18n.global.locale.value,
  (loc) => {
    const lang = loc === 'es' ? 'es-419' : 'en'
    document.documentElement.setAttribute('lang', lang)
  },
  { immediate: true },
)
