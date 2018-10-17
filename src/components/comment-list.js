import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import ToggleOpen from '../decorators/toggleOpen'

import CSSTransition from 'react-addons-css-transition-group'

class CommentList extends Component {
  /*
  static defaultProps = {
    comments: []
  }
*/
  static propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comments__btn">
          {text}
        </button>
        <CSSTransition
          transitionAppear
          transitionName="commentList"
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    //    const { comments = [], isOpen } = this.props
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className="test--comments__body">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default ToggleOpen(CommentList)
