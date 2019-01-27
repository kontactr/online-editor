import React, { Component } from 'react'
import {observer, inject} from 'mobx-react';


@inject("one")
@inject("two")
@observer
class Sample extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => {
            this.props.one.addValue();
            this.props.two.addValue();
        }}>Add Value
        </button>
        <div>{this.props.one.count}</div>
        <div>{this.props.two.count}</div>
      </div>
    )
  }
}

export default Sample;
