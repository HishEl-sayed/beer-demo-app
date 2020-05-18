import React, { Component }  from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import { fetchBeers } from '../../../actions/beersActions'

import Default from '../../templates/default'
import ProductGrid from '../../organisms/productGrid'

class BeersListing extends Component {

  renderBeers = () => {
    const { loading, hasErrors, allBeers } = this.props
    if (loading) return <p>Loading Beers...</p>
    if (hasErrors) return <p>Unable to display Beers.</p>
    return <ProductGrid beers={allBeers} />
  }

  componentDidMount() {
    const { pageCategory, fetchBeers } = this.props
    fetchBeers(pageCategory)
  }

  render() {
    return (
      <div className="beersListing">
        <Default>
          {this.renderBeers()}
        </Default>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.beers.loading,
  allBeers: state.beers.allBeers,
  hasErrors: state.beers.hasErrors,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBeers: (pageCategory) => {
    dispatch(fetchBeers(pageCategory))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeersListing))
