<script setup lang="ts">
import VerticalToolbar from './components/VerticalToolbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <VerticalToolbar />
  

  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition  name="fade" mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="Component"></component>
            <template #fallback>
              <div>
                Loading...
              </div>
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
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
