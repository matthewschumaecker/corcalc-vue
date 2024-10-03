<template>
  <div class="app-container">
    <HeaderComponent />
    <div class="content-wrapper">
      <div class="navbar">
        <NavbarComponent />
      </div>
      <main class="main-content">
        <router-view></router-view>
      </main>
    </div>
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

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.main-content {
  margin-left: 150px;
  padding: 30px;
}
</style>
