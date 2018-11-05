import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  commentsListSelector,
  commentsLoadingSelector,
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
    const { comments = [], loading, pagesCount } = this.props
    const { currentPage } = this.state

    if (currentPage > pagesCount) {
      return <div>{'No comments'}</div>
    }

    return (
      <div>
        <ul>
          {!loading
            ? comments.map((el) => (
                <li key={el.id}>{`${el.id}: ${el.text}`}</li>
              ))
            : `Loading...`}
        </ul>
        <NavLink
          to={`/comments/${currentPage > 1 ? currentPage - 1 : 1}`}
          activeStyle={{ color: 'red' }}
        >
          Previous
        </NavLink>
        <NavLink
          to={`/comments/${
            currentPage <= pagesCount ? currentPage + 1 : pagesCount
          }`}
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
      comments: commentsListSelector(state),
      loading: commentsLoadingSelector(state),
      pagesCount: commentsPagesCountSelector(state)
    }
  },
  { loadComments }
)(PaginationComments)
