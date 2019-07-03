<template>
  <figure :class="componentClass">
    <img class="ProductThumb__image" :src="src" :alt="alt" />
  </figure>
</template>

<script lang="ts">
import Vue from 'vue';

const CLASS = {
  STD: 'ProductThumb',
  COVER: 'ProductThumb--cover',
};

export default Vue.extend({
  props: {
    src: String,
    alt: String,
    cover: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    componentClass() {
      const componentClass = [CLASS.STD];
      if (this.cover) {
        componentClass.push(CLASS.COVER);
      }
      return componentClass.join(' ');
    },
  },
});
</script>

<style lang="sass" scoped>
%thumb-size
  height: calc(100vw - 84px)
  max-height: 436px
  transition: height max-height 0.2s ease
  width: 100%

%thumb-extended
  height: calc(100vw - 52px)
  max-height: 468px

.ProductThumb
  @extend %thumb-size
  border-radius: 6px
  box-shadow: 0 3px 6px 0px rgba(0,0,0,0.16)
  margin: 0
  overflow: hidden
  position: relative

  &__image
    @extend %thumb-size
    object-fit: cover

  &--cover
    @extend %thumb-extended

    .ProductThumb__image
      @extend %thumb-extended
</style>
