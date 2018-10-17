import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArticleList from './article-list'
import ArticlesChart from './articles-chart'
import UserForm from './user-form'
import articles from '../fixtures'
import Filters from './filters'

class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
      }).isRequired
    ).isRequired
  }

  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }
}

export default App
