// === reducer-gen_models.js ===
const FILTERS_RESET = "FILTERS_RESET"
const INITIAL_TEMPERATURE_RANGE_ARRAY = "INITIAL_TEMPERATURE_RANGE_ARRAY"


const FILTER_FREQUENCY_FREE_APPLY = "FILTER_FREQUENCY_FREE_APPLY"
//const FILTER_STATE_UPDATE = "FILTER_STATE_UPDATE";

const FILTER_FREQUENCY_UPDATE = "FILTER_FREQUENCY_UPDATE";
const FILTER_FREQUENCY_APPLY = "FILTER_FREQUENCY_APPLY";

const FILTER_TEMPERATURE_RANGE_UPDATE = "FILTER_TEMPERATURE_RANGE_UPDATE";
const CREATE_TEMP_RANGE_STABILITY_ARRAY = "CREATE_TEMP_RANGE_STABILITY_ARRAY"


const initialState = {
  models: [
    {
      "id": 1,
      "name": "XBO8",
      "frequencyRange": "8-150 MHz",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 3 ppb",
      "packaging": "DIP8 15x15x9.5 mm",
      "pictureName": "./pimages/type1_200px.png",
      "isActive": true
    },
    {
      "id": 2,
      "name": "XBO8S",
      "frequencyRange": "8-150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 3 ppb",
      "packaging": "DIP8 SMD",
      "pictureName": "./pimages/type2_200px.png",
      "isActive": true
    },
    {
      "id": 3,
      "name": "XBO14",
      "frequencyRange": "8-150 MHz",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb",
      "packaging": "DIP14 15x21x9.5 mm",
      "pictureName": "./pimages/type3_200px.png",
      "isActive": true
    },
    {
      "id": 4,
      "name": "XBO14S",
      "frequencyRange": "8-150 MHz",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb",
      "packaging": "DIP14 SMD",
      "pictureName": "./pimages/type4_200px.png",
      "isActive": true
    },
    {
      "id": 5,
      "name": "XBO20",
      "frequencyRange": "8-150 MHz",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 0.5 ppb",
      "packaging": "Steel case 20x20x12.6 mm",
      "pictureName": "./pimages/type5_200px.png",
      "isActive": true
    },
    {
      "id": 6,
      "name": "XBOH20",
      "frequencyRange": "24-300 MHz",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 0.5 ppb",
      "packaging": "Steel case 20x20x12.6 mm",
      "pictureName": "./pimages/type5_200px.png",
      "isActive": true
    },
    {
      "id": 7,
      "name": "XBOH14",
      "frequencyRange": "24-300 MHz",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 15x21x9.5 mm",
      "pictureName": "./pimages/type2_200px.png",
      "isActive": true
    },
    {
      "id": 8,
      "name": "XBOH14S",
      "frequencyRange": "24-300 MHz",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 SMD ",
      "pictureName": "./pimages/type2_200px.png",
      "isActive": true
    }
  ],
  temperatureRange: [
    {
      "id": 1,
      "name": 'A',
      "range": '0ºC..50ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 1 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 1 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 0.3 },
        { model: 'XBOH20' , stability: 200, stabilityLimit: 0.3 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 5 }
      ]
    },
    {
      "id": 2,
      "name": 'B',
      "range": '-10ºC..60ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 1 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 1 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 0.3 },
        { model: 'XBOH20' , stability: 200, stabilityLimit: 0.3 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 5 }
      ]
    },
    {
      "id": 3,
      "name": 'C',
      "range": '-30ºC..70ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 1 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 1 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBOH20' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 10 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 10 }
      ]
    },
    {
      "id": 4,
      "name": 'D',
      "range": '-40ºC..85ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 3 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 3 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 2 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBOH20' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 10 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 10 }
      ]
    },
    {
      "id": 5,
      "name": 'E',
      "range": '-60ºC..85ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 10 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 10 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 5 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 20 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 20 }
      ]
    }
  ],
  temperatureRangeArray: [],  //* ["0ºC..50ºC","-10ºC..60ºC","-30ºC..70ºC","-40ºC..85ºC","-60ºC..85ºC"] */
  stabilityLimit: [], /* [10,5,20] */
  selRangeModelsExactStabilityArray: [], //["XBO8","XBO8S","XBO14","XBO14S","XBO20","XBOH20","XBOH14","XBOH14S"]
  filterFrequencyType: '', //"with multiplication" "fundamental"
  filterTemperatureRange: '', 
  filterStabilityLimit: '',  

};

const gen_modelsReducer = (state = initialState, action) => {
  //debugger placeholderType: 'fundamental / with multiplication',
  //console.log('44action' + action.valueType);
  if (action.type === FILTER_FREQUENCY_FREE_APPLY) {
    //set free all models
    let stateCopy = {
      ...state,
      models: state.models.map ( //возвр новый объект
      model => { 
          return ({...model,isActive: true})
      }
    )
    }
  
    return stateCopy
  }

  if (action.type === FILTERS_RESET) {
    //set free all models
    let stateCopy = JSON.parse(JSON.stringify(state))
  
    return stateCopy
  }
  
  if (action.type === INITIAL_TEMPERATURE_RANGE_ARRAY) {
    //set free all models
    let stateCopy = {
      ...state,
      temperatureRangeArray: state.temperatureRange.map(element => {
        return element.range
    })
    }
  
    return stateCopy
  }

  if (action.type === FILTER_FREQUENCY_UPDATE) {
    const stateCopy = { 
        ...state,
        filterFrequencyType: action.valueType
    }
    return stateCopy
  } 

  if (action.type === FILTER_TEMPERATURE_RANGE_UPDATE) {
    //console.log('gggg' + action.valueTemperatureRange.target.value)
    const stateCopy = { 
        ...state,
        filterTemperatureRange: action.valueRange
    }
    return stateCopy
  } 

  if (action.type === CREATE_TEMP_RANGE_STABILITY_ARRAY) {
    const selRange = state.temperatureRange.filter(rangeItem => rangeItem.range === state.filterTemperatureRange)
    const selRangeModelsArray = selRange[0].modelsStability
    const selRangeModelStabilityArray = selRangeModelsArray.map(item => item.stabilityLimit)
          .filter((value, index, self) => self.indexOf(value) === index)
    const stateCopy = { 
        ...state,
        stabilityLimit: selRangeModelStabilityArray
    }
    return stateCopy
  } 

  if (action.type === FILTER_FREQUENCY_APPLY) {

    if (!state.filterFrequencyType) {return {...state}}  //empty test

    const stateCopy = { 
      ...state,
      models: state.models.map ( //возвр новый объект
      model => { 
          return (model.frequencyType === state.filterFrequencyType)
           ? {...model,isActive: true} : {...model,isActive: false};
      }
    ),

  }
  return stateCopy
} 
/* --- */


//debugger
return state

};

//debuggerexport const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});
//CLEAR_ALL_FILTERS
const filtersReset = ({type: FILTERS_RESET});
const initTemperatureRangeArray = ({type: INITIAL_TEMPERATURE_RANGE_ARRAY});

const filterFrequencyFreeApplyAC = ({type: FILTER_FREQUENCY_FREE_APPLY});

const filterFrequencyUpdateAC = valueType => ({type: FILTER_FREQUENCY_UPDATE, valueType});
const filterFrequencyApplyAC = ({type: FILTER_FREQUENCY_APPLY});
//CREATE_TEMP_RANGE_STABILITY_ARRAY
const filterTemperatureRangeUpdateAC = valueRange => ({type: FILTER_TEMPERATURE_RANGE_UPDATE, valueRange});
const createTemperatureRangeStabilityArray = ({type: CREATE_TEMP_RANGE_STABILITY_ARRAY});

export const filterFrequencyTypeTC = (event) =>{
  
  //value="Fundamental"  value="withMultiplication"
  const valueType = event.target.value
  //console.log('lookk1: ' + valueType);
  return (dispatch) => {
    //dispatch(filterFrequencyFreeApplyAC)
    dispatch(filterFrequencyUpdateAC (valueType))
    dispatch(filterFrequencyApplyAC)

  }
}

export const filterTemperatureRangeTC = (event) =>{
  const valueRange = event.target.value
  return (dispatch) => {
    dispatch(filterTemperatureRangeUpdateAC(valueRange))
    dispatch(createTemperatureRangeStabilityArray)

  }
}

export const filterInitTC = () => {

  return (dispatch) => {
    dispatch(filterFrequencyFreeApplyAC)
    dispatch(initTemperatureRangeArray)

  }
}

export default gen_modelsReducer;
