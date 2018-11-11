import { createContext } from 'react'

const { Provider, Consumer } = createContext()

const DICTIONARY = {
  en: {
    deleteButton: 'Delete',
    byLabel: 'by',
    usernameLabel: 'Username:',
    filtersLabel: 'Filters',
    counterLabel: 'Counter',
    commentsLabel: 'Comments',
    hideCommentsLabel: 'Hide comments',
    showCommentsLabel: 'Show comments'
  },
  rus: {
    deleteButton: 'Удалить',
    byLabel: 'Автор',
    usernameLabel: 'Имя пользователя:',
    filtersLabel: 'Фильтры',
    counterLabel: 'Счетчик',
    commentsLabel: 'Комментарии',
    hideCommentsLabel: 'Скрыть комментарии',
    showCommentsLabel: 'Показать комментарии'
  }
}

export { Provider, Consumer, DICTIONARY }
