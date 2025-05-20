<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition 
      :name="$route.path === '/' ? 'shrink' : 'zoom'" 
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.zoom-enter-active,
.zoom-leave-active,
.shrink-enter-active,
.shrink-leave-active {
  transition: all 0.5s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(1.2);
}

.zoom-enter-to,
.zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}

.shrink-enter-from {
  opacity: 0;
  transform: scale(1.2);
}

.shrink-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.shrink-enter-to,
.shrink-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>