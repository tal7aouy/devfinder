import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GithubContextProvider } from './store/index'
ReactDOM.render(
  <GithubContextProvider>
    <App />
  </GithubContextProvider>,
  document.getElementById('root')
)
