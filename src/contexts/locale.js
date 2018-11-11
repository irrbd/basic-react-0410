import { createContext } from 'react'

const { Provider, Consumer } = createContext()

const DICTIONARY = {
  en: {
    deleteButton: 'Delete'
  },
  rus: {
    deleteButton: 'Удалить'
  }
}

export { Provider, Consumer, DICTIONARY }
