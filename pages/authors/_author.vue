<template>
  <div class="page-authors">
    <article
      v-for="author in authorsList"
      :key="author.id"
      class="page-authors__author"
    >
      <nuxt-link :to="author.url"> {{ author.name }} →</nuxt-link>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import Author from '~/models/Author'
const authors = namespace('authors')
const articles = namespace('articles')

@Component({
  components: {}
})
export default class PageAuthor extends Vue {
  @authors.State
  public readonly authorsList!: Array<Author>
}
</script>

<style lang="scss">
.page-author {
}
</style>
