import React, { Component } from 'react'
import load from './load.gif'

export class Load extends Component {
  render() {
    return (
      <div className="text-center" >
        <img src={load} alt="loading" width="10%"/>
      </div>
    )
  }
}

export default Load