<template>
  <div id="app">
    <div class="sf">
      <h1>Single file functional component</h1>
      <Button :fontColor="true">Costs</Button>
      <Button :backgroundColor="true">Suppliers</Button>
      <Button :ovalShape="true">Clean filters</Button>
      <Button :ovalShape="true" :boxShadow="true" :backgroundColor="true">+ Add</Button>
    </div>
    <hr />
    <div class="rf">
      <h1>Render JSX functional component</h1>
      <ButtonFunctionalRF :fontColor="true">Costs</ButtonFunctionalRF>
      <ButtonFunctionalRF :backgroundColor="true">Suppliers</ButtonFunctionalRF>
      <ButtonFunctionalRF :ovalShape="true">Clean filters</ButtonFunctionalRF>
      <ButtonFunctionalRF :ovalShape="true" :boxShadow="true" :backgroundColor="true">+ Add</ButtonFunctionalRF>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import ButtonFunctionalRF from "./components/ButtonFunctionalRF";

export default {
  name: "App",
  components: {
    Button,
    ButtonFunctionalRF
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
