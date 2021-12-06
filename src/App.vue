<script setup lang="ts">
import VerticalToolbar from './components/VerticalToolbar.vue';
import { RouterView } from 'vue-router';

//https://cryptologos.cc/logos/thumbs/polkadot-new.png
</script>

<template>
  <VerticalToolbar />

  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
</template>

<style>
#app {
  height: 100%;
  font-family: 'Ubuntu Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  display:flex;
  flex-direction: row;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>
