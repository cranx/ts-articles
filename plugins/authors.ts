import { Plugin } from '@nuxt/types'

// это хотелось бы сделать в nuxtServerInit, но у меня не вышло)
const globalFetchAuthors: Plugin = ({ store }) => {
  return store.dispatch('authors/fetchAuthors')
}

export default globalFetchAuthors
