import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  commentsListSelector,
  commentsPagesCountSelector
} from '../../selectors'

import { loadComments } from '../../ac'

class PaginationComments extends Component {
  constructor(props) {
    super(props)
    const { page } = this.props
    this.state = {
      currentPage: parseInt(page)
    }
  }

  componentDidMount(oldProps) {
    const { loadComments } = this.props
    const { currentPage } = this.state
    loadComments({ currentPage })
  }

  render() {
    const { comments = [], pagesCount } = this.props
    const { currentPage } = this.state

    console.log(pagesCount, 'pagesCount')
    console.log(comments, 'comments')
    return (
      <div>
        <ul>
          {comments.map((el) => (
            <li key={el.id}>{`${el.id}: ${el.text}`}</li>
          ))}
        </ul>
        <NavLink
          to={`/comments/${currentPage - 1}`}
          activeStyle={{ color: 'red' }}
        >
          Previous
        </NavLink>
        <NavLink
          to={`/comments/${currentPage + 1}`}
          activeStyle={{ color: 'red' }}
        >
          Next
        </NavLink>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      pagesCount: commentsPagesCountSelector(state),
      comments: commentsListSelector(state)
    }
  },
  { loadComments }
)(PaginationComments)
