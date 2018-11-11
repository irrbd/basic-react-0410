import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'
import { Consumer as LocaleConsumer } from '../contexts/locale'

function Comment({ comment }) {
  return (
    <div>
      {comment.text}
      <b>
        <LocaleConsumer>{(val) => val.byLabel}</LocaleConsumer>
        {` ${comment.user}`}
      </b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
