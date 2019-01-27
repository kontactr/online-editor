import React, { Component } from 'react'
import './Styles/RowHeader.css';

export default class RowHeader extends Component {
  render() {  
    return (
      <div id="row-header">
        <section id="plus-button">
            
            <span role="button" onClick={
                (e) => {
                    this.props.addTerminal(prompt("Select between node and python"));
                }
            }>+</span>
        </section>
        <section id="screens">

            {this.props.totalScreens.map((data, index) => {
                let value = data.id;
                let type = data.type;
                return (
                    <div key={value} className='display-screen' onClick={(e) => {this.props.processSelected(value)}} >
                <div className='close-button-div'>
                <span className='process-type'>{type}</span>
                    <span className='close-button' role="button" onClick={
                        (e) => {
                            // /e.preventDefault();
                            this.props.closeTerminal(value);
                        }
                    }>X</span>
                </div>
                <div className='screen-id-div'>
                    {value}
                </div>
                </div>
                );

            })}

        </section>
      </div>
    )
  }
}
