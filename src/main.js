import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AVACalculator from './components/AVACalculator.vue';

import FickCalculator from './components/FickCalculator.vue';
import EchoPAPressure from './components/EchoPAPressure.vue';
import EchoMitralPISA from './components/EchoMitralPISA.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './assets/main.css';

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/ava', component: AVACalculator },
    // { path: '/co', component: CardiacOutput },
    { path: '/fick', component: FickCalculator },
    { path: '/echoPAPressure', component: EchoPAPressure },
    { path: '/echoMitralPISA', component: EchoMitralPISA }
  ]
});

// Create and mount the Vue application
const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
