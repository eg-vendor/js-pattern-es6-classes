

// Import
import {Fundraiser} from './class/fundraiser.js';

// Instantiate
var fundraiser = new Fundraiser ();

// Initialise
function execute ( ) {
    fundraiser.init ();
}
window.document.addEventListener ('DOMContentLoaded',execute);

// Expose properties and methods within a "namespace"
window.bab = {
    'fundraiser' : {
        'banana' : fundraiser.banana
    }
};
