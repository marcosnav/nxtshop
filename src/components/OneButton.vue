<template>
  <button :class="componentClass">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

const CLASS = {
  STD: 'OneButton',
  BIG: 'OneButton--big',
  SMALL: 'OneButton--small',
  TEXTLINE: 'OneButton--textline',
  SECONDARY: 'OneButton--secondary',
  DARK: 'OneButton--dark',
};

export default Vue.extend({
  props: {
    big: Boolean,
    small: Boolean,
    textline: Boolean,
    secondary: Boolean,
    dark: Boolean,
  },

  computed: {
    componentClass() {
      const { big, small, textline, secondary, dark } = this;
      const componentClass = [CLASS.STD];

      // Sizes
      if (big) {
        componentClass.push(CLASS.BIG);
      } else if (small) {
        componentClass.push(CLASS.SMALL);
      }

      // Types
      if (textline) {
        componentClass.push(CLASS.TEXTLINE);
      } else if (secondary) {
        componentClass.push(CLASS.SECONDARY);
      } else if (dark) {
        componentClass.push(CLASS.DARK);
      }

      return componentClass.join(' ');
    },
  },
});
</script>

<style lang="sass" scoped>
.OneButton
  background: var(--blue)
  border: none
  border-radius: 6px
  color: #fff
  font-size: 0.833em
  font-weight: 700
  line-height: 26px
  padding: 0 16px
  position: relative
  text-align: center

  &--big
    font-size: 1em
    line-height: 42px

  &--small
    border-radius: 10px
    font-size: 0.7em
    line-height: 20px
    padding: 0 10px

  &--textline
    background: transparent
    color: var(--text)
    text-decoration: underline

  &--secondary
    background: var(--subtle-gray)
    color: var(--text)

  &--dark
    background: var(--dark-blue)
</style>
