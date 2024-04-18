// IMPORTS
import { TimeData } from "./time.js";

// FUNCTIONS
const resetDefaultValue = () => {
   TimeData.minutes.value = '00';
   TimeData.seconds.value = '00';
};

// EXPORTS
export { resetDefaultValue};