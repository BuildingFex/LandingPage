import { createApp } from 'vue'
import { watch } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from '@/marketing/presentation/App.vue'
import i18n from '@/marketing/infrastructure/i18n'
import router from '@/marketing/presentation/router'
import '@/marketing/presentation/assets/main.css'
import 'primeicons/primeicons.css'
import { syncDocumentLocale } from '@/marketing/application/syncDocumentLocale.js'

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
    syncDocumentLocale(loc)
  },
  { immediate: true },
)
