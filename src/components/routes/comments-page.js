import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import PaginationComments from '../comment-list/comments'

class CommentsPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'comments-page match: ', this.props.match)
    //      const title = this.props.match.isExact && <h1>Select an Article</h1>
    return (
      <Fragment>
        <Route path="/comments/:page" children={this.getComments} />
      </Fragment>
    )
  }

  getComments = ({ match }) => {
    console.log('---', 'comments match: ', match)

    if (!match) return <h1>Please Select A Page</h1>

    const { page } = match.params
    return <PaginationComments page={page} key={page} />
  }
}

export default CommentsPage
