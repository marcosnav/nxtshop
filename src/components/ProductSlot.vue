<template>
  <div class="ProductSlot">
    <product-thumb :src="product.thumbnail" :alt="product.name" />
    <section class="ProductSlot__meta">
      <price-tag>${{ product.price }}</price-tag>
      <section-title>
        {{ product.name }}
      </section-title>
      <tagline>
        {{ product.tagline }}
      </tagline>
    </section>
    <section class="ProductSlot__actions">
      <one-button small textline>
        Add to Wishlist
      </one-button>
      <one-button small>
        Get It Now
      </one-button>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductThumb from './ProductThumb.vue';
import SectionTitle from './SectionTitle.vue';
import Tagline from './Tagline.vue';
import PriceTag from './PriceTag.vue';
import OneButton from './OneButton.vue';
import { Catalog } from '@/store/types';

export default Vue.extend({
  components: {
    ProductThumb,
    SectionTitle,
    Tagline,
    PriceTag,
    OneButton,
  },

  props: {
    product: Object as () => Catalog.ProductQuickView,
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

  &__meta
    margin-bottom: 26px
    margin-top: -47px

  &__actions
    display: flex
    justify-content: center

    & > *
      margin: 5px 0
</style>
