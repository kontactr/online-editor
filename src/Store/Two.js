import {observable, action} from 'mobx';

class Two{

    @observable
    count = 0;

    @action
    addValue(){
        this.count += 1;
    }

}

export default new Two();