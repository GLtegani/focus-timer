// IMPORTS
import { resetDefaultValue } from "./utils.js";

// DATA
const TimeData = {
   errorAlert: document.querySelector('.empty-value-error'),
   minutes: document.querySelector('#minutes'),
   seconds: document.querySelector('#seconds'),
};

// FUNCTIONS
const loadInitialItems = () => {
   resetDefaultValue();
};


// EVENTS
window.addEventListener('DOMContentLoaded', loadInitialItems);

// EXPORTS
export { TimeData, loadInitialItems };