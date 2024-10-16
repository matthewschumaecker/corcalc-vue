<template>
  <nav :class="{ responsive: isResponsive }">
    <div class="nav-toggle" @click="toggleNav">☰</div>
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <a
          href="#"
          @click.prevent="navigate(item.route)"
          :class="{ active: route.path === item.route }"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isResponsive = ref(false);

const navItems = reactive([
  { name: 'Echo AVA/DI', route: '/ava' },
  { name: 'Echo Mitral PISA', route: '/echoMitralPISA' },
  { name: 'Echo SV/CO', route: '/co' },
  { name: 'Echo PA Pressure', route: '/echoPAPressure' },
  { name: '----------------', route: '----_' },
  { name: 'Fick Calculator', route: '/fick' }
]);

const navigate = (path) => {
  router.push(path);
};

const toggleNav = () => {
  isResponsive.value = !isResponsive.value;
};
</script>

<style scoped>
nav {
  margin-top: 20px;
  background-color: #d2d2d2;
  padding: 20px 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 5px;
}

a:hover {
  color: #f1f1f1;
  background-color: #dd06068d;
}

a.active {
  background-color: #280404bd;
  color: white;
}

.nav-toggle {
  display: none;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 110px;
  left: 10px;
  z-index: 1000;
}
</style>
