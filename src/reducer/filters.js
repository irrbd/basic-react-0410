import defaultArticles from '../fixtures'
import { SET_FILTERS } from '../constants'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_FILTERS:
      return { ...articlesState, ...payload }

    default:
      return articlesState
  }
}
