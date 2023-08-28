import React, { Component } from 'react'
import { itemArr } from './itemdata'

export default class ItemComp extends Component {
  renderItem = () => {
    return itemArr.map(({item,title,desc},index)=>{
      return (
        <div key={index} className="col-lg-6 col-xl-4 mb-5" style={{fontSize:"15px"}}>
          <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div style={{height: '4rem', width: '4rem', fontSize: '2rem', justifyContent: 'center', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',lineHeight:`4rem`}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className={item} />
          </div>
          <h5 className="fs-4 fw-bold">{title}</h5>
          <p className="mb-0">{desc}</p>
          </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='container'>
      <div className="row gx-lg-5">
        {this.renderItem()}
      </div>
      </div>
    )
  }
}
