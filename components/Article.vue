<template>
  <article class="article" :class="{ 'article--viewed': isViewed }">
    <nuxt-link :to="article.url" class="article__title">
      {{ article.title }} →
    </nuxt-link>
    <div class="article__author">
      by
      <nuxt-link :to="author.url" class="article__author-name">
        {{ author.name }}
      </nuxt-link>
    </div>

    <div class="article__description">
      {{ article.shortBody }}
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator'
import ArticleModel from '~/models/Article'
import Author from '~/models/Author'
const authors = namespace('authors')
const articles = namespace('articles')

@Component
export default class Article extends Vue {
  @Prop({ required: true }) readonly article!: ArticleModel

  @authors.State
  public readonly authorsById!: Array<Author>

  @articles.State
  public readonly viewedArticles!: { [key: string]: boolean }

  get author(): Author {
    return this.authorsById[this.article.userId]
  }

  get isViewed(): boolean {
    return this.viewedArticles[this.article.id]
  }
}
</script>

<style lang="scss">
.article {
  padding: 15px 0;
  border-bottom: 1px dashed black;

  &--viewed {
    opacity: 0.5;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
  }

  &__author {
    margin: 10px 0;
    font-size: 14px;
  }

  &__author-name {
    text-decoration: underline;
  }

  &__description {
    font-style: italic;
    font-size: 12px;
  }
}
</style>
