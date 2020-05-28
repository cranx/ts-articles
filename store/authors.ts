import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Author from '~/models/Author'
import api from '~/utils/api'

type AuthorsMap = { [key: string]: Author }

@Module({
  name: 'authors',
  stateFactory: true,
  namespaced: true
})
export default class AuthorsModule extends VuexModule {
  public authorsList = [] as Array<Author>
  public authorsById = null as AuthorsMap | null

  @Action({ commit: 'setAuthors', rawError: true })
  public async fetchAuthors() {
    try {
      const { data: list } = await api.get('users')
      return list
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('fetchAuthors Error', e)
    }
  }

  @Mutation
  public setAuthors(authorsList: Array<Author>) {
    this.authorsList = authorsList.map((author) => new Author(author))
    this.authorsById = this.authorsList.reduce((result, author) => {
      result[author.id] = author
      return result
    }, {} as AuthorsMap)
  }
}
