import React, { Component } from 'react'
import HeaderComp from './HeaderComp'
import BodyComp from './BodyComp'
import FooterComp from './FooterComp'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComp/>
        <BodyComp/>
        <FooterComp/>
      </div>
    )
  }
}

