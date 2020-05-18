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
        <Route path='/beer-demo-app' component={() => <BeersListingPage pageCategory={''} />} />
        <Route path='/pizza' component={() => <BeersListingPage pageCategory={'pizza'} />} />
        <Route path='/steak' component={() => <BeersListingPage pageCategory={'steak'} />} />
      </Switch>
    </Router>
  </Provider>
)

export default App
