<template>
  <div class="page-articles">
    <Articles :articles="articlesList" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import ArticleModal from '~/models/Article'
import Articles from '~/components/Articles.vue'

const articles = namespace('articles')

@Component({
  components: { Articles }
})
export default class PageArticles extends Vue {
  @articles.State
  public readonly articlesList!: Array<ArticleModal>

  fetch({ store }: Context) {
    if (!store.state.articles.articlesList.length) {
      return store.dispatch('articles/fetchArticles')
    }
  }
}
</script>

<style lang="scss"></style>
