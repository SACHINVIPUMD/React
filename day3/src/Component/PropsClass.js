import React, { Component } from 'react'
export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>This is props from {this.props.college}</h1>
      </div>
    )
  }
}
