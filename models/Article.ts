const MAX_BODY_LENGTH = 120 // там ни у одного поста нет текста длиннее 255

export default class Article {
  userId: number
  id: number
  title: string
  body: string
  shortBody: string
  url: string

  constructor({ userId, id, title, body }: any) {
    this.userId = userId
    this.id = id
    this.title = title
    this.body = body

    if (body.length < MAX_BODY_LENGTH) {
      this.shortBody = body
    } else {
      this.shortBody = body.slice(0, MAX_BODY_LENGTH - 3) + '...'
    }

    this.url = `/articles/${id}`

    // Тут хорошо бы сразу и автора добавить)
  }
}
