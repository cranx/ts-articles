<template>
  <main class="layout">
    <TheHeader />
    <nuxt class="layout__content" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TheHeader from '~/components/TheHeader.vue'

@Component({
  components: { TheHeader }
})
export default class PageArticles extends Vue {
  mounted() {
    this.$store.dispatch('authors/fetchAuthors')
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000;
}

.layout {
  &__content {
    padding: 20px;
  }
}
</style>
