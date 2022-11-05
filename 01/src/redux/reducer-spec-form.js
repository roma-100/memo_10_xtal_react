// === reducer-spec-form.js ===
const INPUT_SET_STEP1 = "INPUT_SET_STEP1"
const INPUT_SET_STEP2 = "INPUT_SET_STEP2"
const INIT_SELECTED_MODEL = "INIT_SELECTED_MODEL"
const INIT_FREQUENCY_BLUR = "INIT_FREQUENCY_BLUR"
const FREQUENCY_BLUR = "FREQUENCY_BLUR"

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
    frequencyBlur: 0,
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

if (action.type === INIT_SELECTED_MODEL) {
  //action.selectedModel
  console.log("INIT_SELECTED_MODEL")  
  const selectedModel = this.props.stGenModels.models
  .filter((value, index) => {
    //console.log(JSON.stringify(value.id, null, 2))
    return value.id === this.props.router.params.generatorId
    //return value.id === "5"
  })[0];
  
  const stateCopy = { 
      ...state
  }
  //debugger
  return stateCopy
}

if (action.type === INIT_FREQUENCY_BLUR) {
  //console.log("ffooo")  
  const stateCopy = { 
      ...state,
      frequencyBlur: state.selectedModel.frequencyMin | 0
  }
  //debugger
  return stateCopy
}

if (action.type === FREQUENCY_BLUR) {
  //console.log("ffooo")  
  const frequencyBlurValue = action.frequencyBlurValue
  //debugger
  const stateCopy = { 
      ...state,
      frequencyBlur: frequencyBlurValue
  }
  //debugger
  return stateCopy
}
//debugger
return state

};

export const specFormInputStep1 = (pushValueStep1, selectedModel) => ({type: INPUT_SET_STEP1, pushValueStep1, selectedModel});
export const specFormInputStep2 = (pushValueStep2) => ({type: INPUT_SET_STEP2, pushValueStep2});
export const initFrequencyBlurAC = () => ({type: INIT_FREQUENCY_BLUR});
const frequencyBlurAC = (frequencyBlurValue) => ({type: FREQUENCY_BLUR, frequencyBlurValue});
const initSelectedModel = (selectedModel) => ({type: INIT_SELECTED_MODEL, selectedModel});

//FREQUENCY_BLUR
export const specFormInitObjectsStep2TC = (selectedModel) =>{ //temperatureRange has been already selested
  
  return (dispatch) => {
    dispatch(initSelectedModel(selectedModel))
    //dispatch(frequencyBlurAC(event.target.value))
    //dispatch(filterFrequencyFreeApplyAC)
    //dispatch(filterFrequencyUpdateAC (valueType))
    //dispatch(filterFrequencyApplyAC)
    

  }
}


export const setStabilituVsTemperature = (event) =>{
  
  return (dispatch) => {
    dispatch(frequencyBlurAC(event.target.value))
    //dispatch(filterFrequencyFreeApplyAC)
    //dispatch(filterFrequencyUpdateAC (valueType))
    //dispatch(filterFrequencyApplyAC)
    

  }
}

export default specFormReducer;
