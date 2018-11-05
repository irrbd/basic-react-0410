import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_ALL_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

// Реализованная пагинация ломает работу комментариев в связке со статьей
const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_ALL_COMMENTS + START:
      return state.set('loading', true).set('loaded', false)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return (
        state
          // Не сохраняем в store предыдущий набор статей
          .set(['entities'], arrToMap(response, CommentRecord))
          .set('loading', false)
          .set('loaded', true)
      )

    default:
      return state
  }
}
