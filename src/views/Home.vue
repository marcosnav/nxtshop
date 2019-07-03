<template>
  <div class="HomePage">
    <product-slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductSlot from '@/components/ProductSlot.vue';

export default Vue.extend({
  components: {
    ProductSlot,
  },
});
</script>
