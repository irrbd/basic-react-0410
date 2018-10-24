import { ADD_COMMENT_TO_LIST } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (state = defaultComments, action) => {
  const { type, payload: { id, text, user } = {} } = action

  switch (type) {
    case ADD_COMMENT_TO_LIST:
      return { ...state, [id]: { text, user } }
    default:
      return state
  }
}
