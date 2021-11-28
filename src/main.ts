import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import DashboardPage from './pages/DashboardPage.vue'
import EnginePage from './pages/EnginePage.vue'
import MarketData from './pages/MarketDataPage.vue'
import APIs from './pages/APIsPage.vue'


const routes = [
    { path: '/', component: DashboardPage },
    { path: '/engine', component: EnginePage },
    { path: '/market-data', component: MarketData },
    { path: '/apis', component: APIs },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
