<template>
  <h1 class="SectionTitle">
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="sass" scoped>
.SectionTitle
  font-size: 1.2em
  line-height: 1.728em
  margin-bottom: 0
  position: relative
</style>
