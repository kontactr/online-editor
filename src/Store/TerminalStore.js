import {observable, action, computed} from 'mobx';
import Terminal from './Terminal';

class TerminalStore {

    @observable
    terminalDetails;

    @observable
    id;

    constructor(){
        this.terminalDetails = {};
        this.id = 0;
        this.closeTerminal = this.closeTerminal.bind(this);
        this.createTerminal = this.createTerminal.bind(this);
        this.addActionData = this.addActionData.bind(this);
        this.getTerminalInputs = this.getTerminalInputs.bind(this);
        this.getTerminalOutputs = this.getTerminalOutputs.bind(this);
    }

    @action
    createTerminal(type){
        const newTerminal = new Terminal(type);
        console.log(this);
        this.incrementId();
        const newId = this.getNewId;
        this.terminalDetails[newId] = newTerminal;
        return newId;
    }


    @computed
    get TotalScreens(){
        console.log(this.terminalDetails["A"]);
        let newObject = []
        newObject = Object.keys(this.terminalDetails).map((value) => {
            let processType = this.terminalDetails[value].type === "node" ? "N" : "P";
            return {id: value , type: processType}
        })
        return newObject;
    }

    @action
    incrementId(){
        this.id += 1; 
    }

    @computed
    get getNewId(){
        return this.id;
    }

    @action
    addActionData(id,input , output){
        let temp = this.terminalDetails[id];
        console.log(input,output,temp.allInputs);
        temp.submitResult(input , output);
    }

    @action
    getTerminalInputs(id){
        if(id == -1){
            return [];
        }
        return this.terminalDetails[id].allInputs;
    }

    @action
    getTerminalOutputs(id){
        
        return this.terminalDetails[id].allOutputs;
    }

    @action
    closeTerminal(id){
        
        //this.terminalDetails[id].freeValues();
        
        //console.log(this.terminalDetails);
        delete this.terminalDetails[id];
    }
}

export default new TerminalStore();