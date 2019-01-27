import {observable, action} from 'mobx';

class One{

    @observable
    count = 0;

    @action
    addValue(){
        this.count += 1;
    }

}

export default new One();