import {observable, action, computed} from 'mobx';


class Terminal {

    @observable
    type;
    @observable
    inputs;
    @observable
    outputs;

    constructor(type){

       this.type = type;

        
        this.inputs = [];   

        
        this.outputs = [];

        this.submitResult = this.submitResult.bind(this);
        this.freeValues = this.freeValues.bind(this);

    }

    @action    
    submitResult(input , output){
        this.inputs.push(input);
        this.outputs.push(output);
        console.log(input , output);
    }

    @computed
    get allInputs(){
        return this.inputs;
    }

    @computed
    get allOutputs(){
        return this.outputs;
    }

    @action
    freeValues(){
        this.inputs = null;
        this.outputs = null;
        this.type = null;
        delete this.inputs;
        delete this.outputs;
        delete this.type;
    }

}

export default Terminal;