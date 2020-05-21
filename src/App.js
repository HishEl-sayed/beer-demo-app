import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import configureStore from './store/configureStore'
import BeersListing from './components/pages/beersListing'

import './styles/reset.scss'

const storeConfiguration = configureStore()

const BeersListingPage = ({ pageCategory }) => (
  <BeersListing pageCategory={pageCategory} />
)

const App = () => (
  <Provider store={storeConfiguration}>
    <Router>
      <Switch>
        <Route exact path='/beer-demo-app' component={() => <BeersListingPage pageCategory={''} />} />
        <Route path='/beer-demo-app/pizza' component={() => <BeersListingPage pageCategory={'pizza'} />} />
        <Route path='/beer-demo-app/steak' component={() => <BeersListingPage pageCategory={'steak'} />} />
      </Switch>
    </Router>
  </Provider>
)

export default App
