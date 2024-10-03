<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <header class="header">
    <h1>corcalc.io</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
};
</script>
<style scoped>
.header {
  background-color: #333;
  padding: 20px;
  text-align: left;
  height: 100px;
}
.header h1 {
  font-family: 'Orbitron', sans-serif;
  color: #ff6666;
  font-weight: 700;
  margin-left: 10px;
  font-size: 2.5rem;
}
</style>
