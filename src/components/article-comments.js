import React, { PureComponent } from 'react'

class Comments extends PureComponent {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { comments } = this.props
    // TODO Add some special styles for every <div>
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

export default Comments
