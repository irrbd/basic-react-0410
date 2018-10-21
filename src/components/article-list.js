import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordionDecorator from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const {
      articles,
      openItemId,
      toggleOpenItem,
      filters: { from, to } = {}
    } = this.props
    const filterArticles =
      from && to
        ? articles.filter((article) => {
            const date = Date.parse(article.date)
            return date >= Date.parse(from) && date <= Date.parse(to)
          })
        : articles

    return filterArticles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ArticleListWithAccordion = accordionDecorator(ArticleList)

export default connect(({ articles, filters }) => ({
  articles,
  filters
}))(ArticleListWithAccordion)
