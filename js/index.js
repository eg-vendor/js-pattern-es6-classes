

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
window.q = function (selectString) {
    // Query for element list
    return document.querySelectorAll (selectString);
};
window.a = function (elmt) {
    // All attributes of an element
    var rtn = {};
    for (var name of elmt.getAttributeNames()) {
	    rtn[name] = elmt.getAttribute (name);
    }
    return rtn;
};
