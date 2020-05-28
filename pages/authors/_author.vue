<template>
  <div class="page-author">
    <h1 class="page-author__title">Articles by {{ author.name }}</h1>
    <Articles v-if="authorArticles.length" :articles="authorArticles" />
    <div v-else>There is no articles by this author yet</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import Author from '~/models/Author'
import ArticleModel from '~/models/Article'
import Articles from '~/components/Articles.vue'
const authors = namespace('authors')
const articles = namespace('articles')

@Component({
  components: { Articles }
})
export default class PageAuthor extends Vue {
  @authors.State
  public readonly authorsById!: Array<Author>

  @articles.State
  public readonly articlesList!: Array<ArticleModel>

  fetch({ store }: Context) {
    if (!store.state.articles.articlesList.length) {
      return store.dispatch('articles/fetchArticles')
    }
  }

  get author(): Author {
    return this.authorsById[Number(this.$route.params.author)]
  }

  get authorArticles(): Array<ArticleModel> {
    const authorId = Number(this.$route.params.author)
    return this.articlesList.filter((article) => article.userId === authorId)
  }
}
</script>

<style lang="scss">
.page-author {
  &__title {
    text-align: center;
  }
}
</style>
