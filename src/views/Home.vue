<template>
  <div class="HomePage">
    <product-slot :product="product" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductSlot from '@/components/ProductSlot.vue';

export default Vue.extend({
  components: {
    ProductSlot,
  },

  data() {
    return {
      product: {
        id: '1234-1234-1234',
        name: 'SmartWatch X',
        tagline: 'Smart tech wrapping your wrist',
        thumbnail:
          'https://images.unsplash.com/photo-1548960254-456846b00986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: '599',
      },
    };
  },
});
</script>
