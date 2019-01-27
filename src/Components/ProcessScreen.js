import React, { Component } from 'react';
import './Styles/ProcessScreen.css';

export default class ProcessScreen extends Component {

    state = {
        textarea: "",
        update: false
    }


    requestHandler(){

        
        
        fetch('http://localhost:5251/' , {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"value":this.state.textarea})
        }).then((res) => (res.text())).then((res) => {
            this.props.addActionData(this.props.currentScreen , this.state.textarea , res);
            console.log(res);
        });

        
    }

  render() {
    return (
      <div id="process-screen">
        <section className="process-screen-one">
            <div className="input-container">
            <div className='option-panel'>
            <button id="exec-button" onClick={(e) => {
                this.requestHandler.bind(this)();
            }} >Exec</button>
            </div>
            <textarea onChange={
                (e) => {this.setState({textarea: e.target.value , update: true})}
            } value={this.state.textarea} id="textarea-input"></textarea>
            </div>
        </section>
        <section className="process-screen-two">
        </section>
      </div>
    )
  }

  componentDidMount(){
      const data = this.props.allInputs(this.props.currentScreen);
      console.log(data[data.length - 1] , "in component did mount");
      this.setState({
          textarea: data[data.length - 1],
          update: false
      })
  }

  componentWillUnmount(){
      if(this.state.update){
        this.props.addActionData(this.props.currentScreen , this.state.textarea , "World");
      }
  }
}
