import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AVACalculator from './components/AVACalculator.vue';
import AboutComponent from './components/AboutComponent.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
// Import other components as needed
// import Home from './components/Home.vue'
// import About from './components/About.vue'
// import Contact from './components/Contact.vue'

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/AVA', component: AVACalculator },
    { path: '/about', component: AboutComponent }
    // Add other routes as needed
    //{ path: '/page2', component: Page2 }
    // { path: '/contact', component: Contact },
  ]
});

// Create and mount the Vue application
const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
