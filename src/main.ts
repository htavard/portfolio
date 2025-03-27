import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

import App from './App.vue'
import router from './router'
import './assets/global.scss'

const i18n = createI18n({
  locale: localStorage.getItem('user-lang') || 'en', // Langue par défaut
  fallbackLocale: 'en',
  messages: { en, fr },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(i18n).mount('#app')
