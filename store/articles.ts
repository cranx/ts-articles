import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Article from '~/models/Article'
import api from '~/utils/api'

type ArticlesMap = { [key: string]: Article }

@Module({
  name: 'articles',
  stateFactory: true,
  namespaced: true
})
export default class ArticleModule extends VuexModule {
  public articlesList = [] as Array<Article>
  public articlesById = {} as ArticlesMap
  public article!: Article
  public viewedArticles = {} as { [key: string]: boolean }

  @Action({ commit: 'setArticles' })
  public async fetchArticles() {
    try {
      const { data: list } = await api.get('posts')
      return list
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('fetch Articles Error', e)
    }
  }

  @Action({ commit: 'setCurrentArticle' })
  public async fetchArticle(id: number) {
    // Тут конечно должен быть запрос на конкретную статью)
    if (!this.articlesList.length) {
      await this.fetchArticles()
    }

    return id
  }

  @Mutation
  public setArticles(articlesList: Array<Article>) {
    this.articlesList = articlesList.map((article) => new Article(article))
    this.articlesById = this.articlesList.reduce((result, article) => {
      result[article.id] = article
      return result
    }, {} as ArticlesMap)
  }

  @Mutation
  public setCurrentArticle(id: number) {
    this.article = this.articlesById[id]
    this.viewedArticles[id] = true
  }
}
