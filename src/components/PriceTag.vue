<template>
  <div class="PriceTag">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="sass" scoped>
.PriceTag
  background: #fff
  border-radius: 6px
  box-shadow: 0 3px 6px 0px rgba(0,0,0,0.16)
  display: inline-block
  font-size: 1.44em
  line-height: 42px
  margin-bottom: 10px
  padding: 0 16px
  position: relative
</style>
