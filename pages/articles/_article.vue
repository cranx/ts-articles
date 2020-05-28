<template>
  <div class="page-article">
    <h1 class="page-article__title">
      {{ article.title }}
    </h1>
    <div class="page-article__author">
      by
      <nuxt-link :to="author.url" class="page-article__author-name">
        {{ author.name }}
      </nuxt-link>
    </div>

    <div class="page-article__description">
      {{ article.body }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import ArticleModal from '~/models/Article'
import Author from '~/models/Author'

const articles = namespace('articles')
const authors = namespace('authors')

@Component
export default class PageArticle extends Vue {
  @articles.State
  public readonly article!: ArticleModal

  @authors.State
  public readonly authorsById!: Array<Author>

  get author(): Author {
    return this.authorsById[this.article.userId]
  }

  fetch({ store, route }: Context) {
    return store.dispatch('articles/fetchArticle', route.params.article)
  }
}
</script>

<style lang="scss">
.page-article {
  &__title {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 19px;
  }

  &__author {
    margin: 10px 0;
    font-size: 14px;
  }

  &__author-name {
    text-decoration: underline;
  }

  &__description {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
