<template>
  <div class="articles">
    <Article
      v-for="article in articles"
      :key="article.id"
      :article="article"
      class="articles__article"
    ></Article>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import ArticleModel from '~/models/Article'
import Article from '~/components/Article.vue'

@Component({
  components: { Article }
})
export default class Articles extends Vue {
  @Prop({ required: true }) readonly articles!: Array<ArticleModel>
}
</script>

<style lang="scss">
.articles {
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    &__article {
      width: calc(50% - 20px);
      box-sizing: border-box;
      padding: 15px;
      margin: 10px;
      border: 2px dashed #000;
    }
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    &__article {
      width: calc(33% - 20px);
      box-sizing: border-box;
      padding: 15px;
      margin: 10px;
      border: 2px dashed #000;
    }
  }
}
</style>
