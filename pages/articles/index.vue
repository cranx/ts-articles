<template>
  <div class="page-articles">
    <Article
      v-for="article in articlesList"
      :key="article.id"
      :article="article"
    ></Article>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import ArticleModal from '~/models/Article'
import Article from '~/components/Article.vue'

const articles = namespace('articles')

@Component({
  components: { Article }
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
