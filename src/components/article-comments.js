import React, { PureComponent } from 'react'
import commentsDecorator from '../decorators/comments-list'

// TODO Add some special styles for every <div>
class Comments extends PureComponent {
  render() {
    const { isOpen } = this.props
    const text = isOpen ? 'close' : 'open'

    return (
      <div>
        <div>Comments</div>
        <button onClick={this.onButtonClick}>{text}</button>
        <ul>{this.items}</ul>
      </div>
    )
  }

  onButtonClick = () => this.props.toggleOpenComments(!this.props.isOpen)

  get items() {
    const { comments, isOpen } = this.props

    if (!isOpen) return null
    return (
      comments &&
      comments.map((el) => (
        <li key={el.id}>
          <div>{el.user}</div>
          <div>{el.text}</div>
        </li>
      ))
    )
  }
}

export default commentsDecorator(Comments)
