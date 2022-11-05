// === reducer-spec-form.js ===
const INPUT_SET_STEP1 = "INPUT_SET_STEP1"
const INPUT_SET_STEP2 = "INPUT_SET_STEP2"


const initialState = {
  selectedModel: {},
  temperatureRange: [],
  inputValueStep1: {
/*       "id": 0,
      "temperatureRangeSelected": "" */
    },
    inputValueStep2: {
/*       "nominalFrequency": "",
      "stabilityVsTemperature": "",
      "voltage": "", */
    },    
    stepsLevel: 0,
};

const specFormReducer = (state = initialState, action) => {

  if (action.type === INPUT_SET_STEP1) {
    //console.log("ff: " + action.id + ', ' + action.range)  
    const inputValueStep1 = action.pushValueStep1
    const selectedModel = action.selectedModel
    //debugger
    const stateCopy = { 
        ...state,
        ...inputValueStep1,
        selectedModel,
        stepsLevel: 1
    }
    //debugger
    return stateCopy
}

if (action.type === INPUT_SET_STEP2) {
  //console.log("ffooo")  
  const inputValueStep2 = action.pushValueStep2
  //debugger
  const stateCopy = { 
      ...state,
      ...inputValueStep2,
      stepsLevel: 2
  }
  //debugger
  return stateCopy
}

//debugger
return state

};

export const specFormInputStep1 = (pushValueStep1, selectedModel) => ({type: INPUT_SET_STEP1, pushValueStep1, selectedModel});
export const specFormInputStep2 = (pushValueStep2) => ({type: INPUT_SET_STEP2, pushValueStep2});

export default specFormReducer;
