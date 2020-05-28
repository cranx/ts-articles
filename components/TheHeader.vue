<template>
  <header class="header">
    <nav class="header__links">
      <nuxt-link to="/" class="header__link">Articles</nuxt-link>
      <nuxt-link to="/authors" class="header__link">Authors</nuxt-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TheHeader extends Vue {}
</script>

<style lang="scss">
.header {
  position: sticky;
  z-index: 2;
  top: 0;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid grey;
  background: #fff;

  &__links {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__link {
    text-decoration: none;
    color: #000;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    &.nuxt-link-exact-active {
      font-weight: bold;
      opacity: 1;
    }

    &:first-child {
      margin-right: 30px;
    }
  }
}
</style>
