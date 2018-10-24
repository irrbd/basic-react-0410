import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import { addCommentToList, addCommentToArticle } from '../../ac'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  state = {
    id: 'ratatata',
    comment: null,
    user: null
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comment-list__btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    const { id, text, user } = this.state
    if (!isOpen) return null

    // TODO Генерировать id
    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
        Пользователь
        <input
          value={user}
          onChange={(e) => this.setState({ user: e.target.value })}
        />
        Сообщение
        <input
          type="text"
          value={text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.addCommentToList({ id, text, user })
            this.props.addCommentToArticle({ commentId: id })
          }}
        >
          Добавить комментарий
        </button>
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id} className="test--comment-list__item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  null,
  { addCommentToList, addCommentToArticle }
)(toggleOpen(CommentList))
