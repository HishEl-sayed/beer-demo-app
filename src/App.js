import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import configureStore from './store/configureStore'
import BeersListing from './components/pages/beersListing'

import './styles/reset.scss'

const storeConfiguration = configureStore()

const allView = () => (
  <BeersListing pageCategory={''} />
)
const SteakView = () => (
  <BeersListing pageCategory={'steak'} />
)
const PizzaView = () => (
  <BeersListing pageCategory={'pizza'} />
)


const App = () => (
  <Provider store={storeConfiguration}>
    <Router>
      <Switch>
        <Route path="/" component={allView} />
        <Route path="/pizza" component={PizzaView} />
        <Route path="/steak" component={SteakView} />
      </Switch>
    </Router>
  </Provider>
)

export default App
