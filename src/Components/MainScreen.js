import React, { Component } from 'react'
import {observer, inject} from 'mobx-react';
import RowHeader from './RowHeader';
import ProcessScreen from './ProcessScreen';



@inject("terminalStore")
@observer
class MainScreen extends Component {

    state = {
        currentScreen: -1
    }

    processSelected(processID){
        this.setState({
            currentScreen: processID
        });
    }

  render() {
     const totalScreens = this.props.terminalStore.TotalScreens;
     const closeTerminal = this.props.terminalStore.closeTerminal;
     const createTerminal = this.props.terminalStore.createTerminal;

     const currentScreenInput = this.props.terminalStore.getTerminalInputs;
     const currentScreenOutput = this.props.terminalStore.getTerminalOutputs;
     const addActionData = this.props.terminalStore.addActionData;
     //console.log(this.props.terminalStore.terminalDetails["A"]);
     console.log(this.state.currentScreen);
    return (
      <div>
        <RowHeader totalScreens={totalScreens}
            closeTerminal = {closeTerminal}
            addTerminal = {createTerminal}
            processSelected = {this.processSelected.bind(this)}
        />
        { this.state.currentScreen > 0 &&
        <ProcessScreen
         key={this.state.currentScreen}
         allInputs = {currentScreenInput}
         allOutputs = {currentScreenOutput}
         addActionData = {addActionData}
         currentScreen = {this.state.currentScreen}
        />
        }

      </div>
    )
  }
}

export default MainScreen;