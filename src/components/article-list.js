import React, { Component } from 'react'
import Article from './article'
import accordionDecorator from '../decorators/accordion'

import DayPickerInput from 'react-day-picker/DayPickerInput'

import 'react-day-picker/lib/style.css'

class ArticleList extends Component {
  render() {
    return (
      <div>
        <p>From</p>
        <DayPickerInput />
        <p>To</p>
        <DayPickerInput />
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }
}

export default accordionDecorator(ArticleList)
