import React, { useEffect, useRef }  from 'react'
import { connect } from 'react-redux'

import { fetchBeers } from '../../../actions/beersActions'

import Default from '../../templates/default'
import ProductGrid from '../../organisms/productGrid'

const BeersListing = ({ dispatch, loading, allBeers, hasErrors, pageCategory }) => {
  const test = pageCategory
  const prevCategory = useRef(null)
  useEffect(() => {
    if (prevCategory.current === test) return
    prevCategory.current = test
    dispatch(fetchBeers(test))
  },[dispatch, test])

  const renderBeers = () => {
    if (loading) return <p>Loading Beers...</p>
    if (hasErrors) return <p>Unable to display Beers.</p>
    return <ProductGrid beers={allBeers} />
  }

  return (
    <div className="beersListing">
      <Default>
        {renderBeers()}
      </Default>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.beers.loading,
  allBeers: state.beers.allBeers,
  hasErrors: state.beers.hasErrors,
})

export default connect(mapStateToProps)(BeersListing)
