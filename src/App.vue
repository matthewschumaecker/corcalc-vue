<template>
  <div class="app-container">
    <header>
      <HeaderComponent />
    </header>
    <div class="navbar-container">
      <NavbarComponent />
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavbarComponent
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
header {
  width: 100%;
}
.navbar-container {
  flex: 1;
  width: 180px;
  margin-top: 100px;
  background-color: #d2d2d2;
  height: 100vh;
  position: fixed;
}
main {
  margin-left: 200px;
  margin-top: 105px;
  padding: 20px;
}
</style>
