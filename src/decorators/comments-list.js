//HOC === Higher Order Component == Decorator
import React, { Component } from 'react'

const commentsListDecorator = (CommentsListComponent) =>
  class CommentsListDecorator extends Component {
    state = {
      isOpen: false
    }

    toggleOpenComments = (isOpen) => this.setState({ isOpen })

    render() {
      return (
        <CommentsListComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpenComments={this.toggleOpenComments}
        />
      )
    }
  }

export default commentsListDecorator
