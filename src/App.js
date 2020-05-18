import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import configureStore from './store/configureStore'
import BeersListing from './components/pages/beersListing'

import './styles/reset.scss'

const storeConfiguration = configureStore()

const App = () => (
  <Provider store={storeConfiguration}>
    <Router>
      <Switch>
        <Route component={BeersListing} />
      </Switch>
    </Router>
  </Provider>
)

export default App
