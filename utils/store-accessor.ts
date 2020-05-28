import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import authors from '~/store/authors'
import articles from '~/store/articles'

// eslint-disable-next-line import/no-mutable-exports
let articlesStore: articles
// eslint-disable-next-line import/no-mutable-exports
let authorsStore: authors

function initialiseStores(store: Store<any>): void {
  authorsStore = getModule(authors, store)
  articlesStore = getModule(articles, store)
}

export { initialiseStores, articlesStore, authorsStore }
