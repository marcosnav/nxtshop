<template>
  <h2 class="Tagline">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="sass" scoped>
.Tagline
  color: var(--sub-text)
  font-size: 0.7em
  font-weight: 400
  margin: 0
  position: relative
</style>
