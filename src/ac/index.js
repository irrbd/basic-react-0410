import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT_TO_LIST,
  ADD_COMMENT_TO_ARTICLE
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: { articleId }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addCommentToList(payload) {
  return {
    type: ADD_COMMENT_TO_LIST,
    payload
  }
}

export function addCommentToArticle(payload) {
  return {
    type: ADD_COMMENT_TO_ARTICLE,
    payload
  }
}
