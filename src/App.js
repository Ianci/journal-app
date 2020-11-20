import React from 'react'
import { AppRouter } from './routes/AppRouter'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import { store } from './store/Store'
export const App = () => {
  return (
    <Provider store={store}>
    <div>
      <AppRouter />
    </div>
    </Provider>
  )
}

