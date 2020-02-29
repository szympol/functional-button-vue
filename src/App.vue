<template>
  <div id="app">
    <Button :fontColor="true">Costs</Button>
    <Button :backgroundColor="true">Suppliers</Button>
    <Button :ovalShape="true">Clean filters</Button>
    <Button :ovalShape="true" :boxShadow="true" :backgroundColor="true">+ Add</Button>
  </div>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Button
  }
};
</script>

<style lang="scss">
body {
  background: #3b70ba;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  margin-top: 60px;
  .btn {
    margin: 10px;
  }
}
</style>
