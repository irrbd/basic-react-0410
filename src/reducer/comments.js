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
  const { type, payload: { commentId, text, user } = {} } = action

  switch (type) {
    case ADD_COMMENT_TO_LIST:
      console.log({ ...state, [commentId]: { text, user } }, 'comments')
      return { ...state, [commentId]: { text, user } }

    default:
      return state
  }
}
