import React, { Component } from 'react'
import BannerComp from './BannerComp'
import ItemComp from './ItemComp'

export default class BodyComp extends Component {
  render() {
    return (
      <div className='container'>
        <BannerComp/>
        <div className="row gx-lg-5">
          <ItemComp/>
        </div>
      </div>
    )
  }
}

