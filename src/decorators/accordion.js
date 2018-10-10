//HOC === Higher Order Component == Decorator
import React, { Component } from 'react'

const accordionDecorator = (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (updatedItemId) => {
      const { openItemId } = this.state

      this.setState({
        openItemId: updatedItemId === openItemId ? null : updatedItemId
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
        />
      )
    }
  }

export default accordionDecorator
