import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [favorited, setFavorited] = useState({});

  const toggleFavorite = (itemId) => event => {
    setFavorited(prev => {
      return {
        ...prev,
        [itemId]: !prev[itemId]
      }
    })
  }

  return (
    <Context.Provider value={{ favorited, toggleFavorite }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }