import React, { PureComponent } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import { createArticleSelector } from '../../selectors'
import { deleteArticle } from '../../ac'
import './style.css'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick} className="test--article__btn">
            {isOpen ? 'close' : 'open'}
          </button>
          <button onClick={this.handleDeleteClick}>delete me</button>
        </h3>
        <CSSTransition
          transitionAppear
          transitionName="article"
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  handleDeleteClick = () => {
    const { deleteArticle, id } = this.props
    deleteArticle(id)
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article, id } = this.props
    if (!isOpen) return null
    if (this.state.error) return <h3>Error</h3>

    return (
      <section className="test--article__body">
        {article.text}
        <CommentList articleId={id} comments={article.comments} />
      </section>
    )
  }
}

const createMapStateToProps = () => {
  const articleSelector = createArticleSelector()

  return (state, ownProps) => ({
    articles: articleSelector(state, ownProps)
  })
}

export default connect(
  createMapStateToProps,
  { deleteArticle }
)(Article)
