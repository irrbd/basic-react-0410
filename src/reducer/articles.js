import omit from 'lodash/omit'

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
  const { type, payload: { articleId, commentId } = {} } = action

  switch (type) {
    case ADD_COMMENT_TO_ARTICLE:
      return {
        ...articlesState,
        [articleId]: {
          ...articlesState[articleId],
          comments: [...articlesState[articleId].comments, commentId]
        }
      }

    case DELETE_ARTICLE:
      return omit(articlesState, [articleId])

    default:
      return articlesState
  }
}
