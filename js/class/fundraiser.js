
import {Global} from './global.js';

export class Fundraiser extends Global {

    constructor ( ) {
        super ();
    }

    init ( ) {
        console.log ('Initialising');
        super.globalInit ();
        console.log ('Running banana()');
        this.banana ();
    }

    banana () {
        super.satsuma ();
    }

}


