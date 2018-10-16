import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ToggleOpen from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should open comments on click', () => {
    const container = mount(<ToggleOpen comments={articles[0].comments} />)

    expect(container.find('.test--comments__body').length).toEqual(0)

    container
      .find('.test--comments__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comments__body').length).toEqual(1)
  })
})
