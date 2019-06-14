<template>
  <div id="app">
    <!--头部-->
    <div class="nav">
      <app-header></app-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
    components: {
        'app-header': Header
    }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
