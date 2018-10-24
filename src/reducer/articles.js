import { normalizedArticles } from '../fixtures'
import { ADD_COMMENT_TO_ARTICLE, DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload: { id, commentId } = {} } = action

  switch (type) {
    case ADD_COMMENT_TO_ARTICLE:
      return {
        ...articlesState,
        [id]: {
          ...articlesState.id,
          comments: [...articlesState.comments, commentId]
        }
      }

    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== id)

    default:
      return articlesState
  }
}
