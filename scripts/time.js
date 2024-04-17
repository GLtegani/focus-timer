const TimeData = {
   errorAlert: document.querySelector('.empty-value-error'),
   minutes: document.querySelector('#minutes'),
   seconds: document.querySelector('#seconds'),
};

// FUNCTIONS
const loadInitialItems = () => {
   TimeData.minutes.value = '00';
   TimeData.seconds.value = '00';
   TimeData.errorAlert.style.transform = `translateY(${0})`;
};


// EVENTS
window.addEventListener('DOMContentLoaded', loadInitialItems);

// EXPORTS
export { TimeData, loadInitialItems };