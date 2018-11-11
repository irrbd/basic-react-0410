import React, { Component } from 'react'
import { Consumer as LocaleConsumer } from '../contexts/locale'

class UserForm extends Component {
  render() {
    return (
      <div>
        <LocaleConsumer>{(val) => val.usernameLabel}</LocaleConsumer>{' '}
        <input value={this.props.value} onChange={this.handleUserChange} />
      </div>
    )
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
