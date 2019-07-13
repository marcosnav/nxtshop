<template>
  <div :class="componentClass">
    <div class="Logo__icon">
      <div class="Logo__icon-sq"></div>
      <div class="Logo__icon-sq"></div>
      <div class="Logo__icon-sq"></div>
    </div>
    <h1 class="Logo__word">
      NxtShop
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const CLASS = {
  STD: 'Logo',
  LOADING: 'Logo--loading-anim',
};

export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    componentClass() {
      const componentClass = [CLASS.STD];
      if (this.loading) {
        componentClass.push(CLASS.LOADING);
      }
      return componentClass.join(' ');
    },
  },
});
</script>

<style lang="sass" scoped>
@keyframes loading_topsq
  0%, 100%
    transform: translate(0, 0)
  30%
    transform: translate(0, 16px)
  60%
    transform: translate(-16px, 16px)
  80%
    transform: translate(-16px, 0)

@keyframes loading_bottomsq
  0%, 100%
    transform: translate(0, 0)
  30%
    transform: translate(0, -16px)
  60%
    transform: translate(-16px, -16px)
  80%
    transform: translate(-16px, 0)

.Logo
  align-items: center
  display: flex
  height: 26px
  justify-content: center
  margin-bottom: 26px
  position: relative

  &__icon
    height: 24px
    margin-left: -8px
    margin-right: 5px
    position: relative
    width: 24px

    &-sq
      background: var(--main)
      border-radius: 2px
      height: 8px
      position: absolute
      width: 8px

      &:nth-of-type(odd)
        left: 16px
        top: 0px

      &:nth-of-type(2)
        left: 8px
        top: 8px
        transition: border-radius 0.2s ease

      &:nth-of-type(3)
        top: 16px

  &__word
    color: var(--main)
    font-size: 1.44em
    margin: 0

  &--loading-anim

    .Logo__icon-sq

      &:nth-of-type(1)
        animation: loading_topsq 1.2s ease infinite forwards

      &:nth-of-type(2)
        border-radius: 4px

      &:nth-of-type(3)
        animation: loading_bottomsq 1.2s ease infinite forwards
</style>
