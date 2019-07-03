<template>
  <div class="ProductSlot">
    <product-thumb :src="src" :alt="alt" :cover="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductThumb from './ProductThumb.vue';

export default Vue.extend({
  components: {
    ProductThumb,
  },

  data() {
    return {
      src:
        'https://images.unsplash.com/photo-1562077477-eb2409f73c49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      alt: 'Pinata',
    };
  },
});
</script>

<style lang="sass" scoped>
.ProductSlot
  background: var(--subtle-gray)
  border-radius: 6px
  box-sizing: border-box
  padding: 16px
  position: relative
  width: 100%
</style>
