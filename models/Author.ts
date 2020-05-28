export default class Author {
  id: number
  name: string
  username: string
  url: string

  constructor({ id, name, username }: any) {
    this.id = id
    this.name = name
    this.username = username

    this.url = `/authors/${id}`
  }
}
