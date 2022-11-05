// === reducer-gen_models.js ===
const FILTERS_RESET = "FILTERS_RESET"
const INITIAL_TEMPERATURE_RANGE_ARRAY = "INITIAL_TEMPERATURE_RANGE_ARRAY"


const FILTER_FREQUENCY_FREE_APPLY = "FILTER_FREQUENCY_FREE_APPLY"
//const FILTER_STATE_UPDATE = "FILTER_STATE_UPDATE";

const FILTER_FREQUENCY_UPDATE = "FILTER_FREQUENCY_UPDATE";
const FILTER_FREQUENCY_APPLY = "FILTER_FREQUENCY_APPLY";

const FILTER_TEMPERATURE_RANGE_UPDATE = "FILTER_TEMPERATURE_RANGE_UPDATE";
const MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY = "MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY"
const CREATE_TEMP_RANGE_STABILITY_ARRAY = "CREATE_TEMP_RANGE_STABILITY_ARRAY"


const initialState = {
  models: [
    {
      "id": "1",
      "name": "XBO8",
      "frequencyRange": "8-150 MHz Fundamental",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 3 ppb",
      "packaging": "DIP8 15x15x9.5 mm",
      "pictureTag": "type1",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "2",
      "name": "XBO8S",
      "frequencyRange": "8-150 Fundamental",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 3 ppb",
      "packaging": "DIP8 SMD",
      "pictureTag": "type2",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "3",
      "name": "XBO14",
      "frequencyRange": "8-150 MHz Fundamental",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb",
      "packaging": "DIP14 15x21x9.5 mm",
      "pictureTag": "type4",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "4",
      "name": "XBO14S",
      "frequencyRange": "8-150 MHz Fundamental",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb",
      "packaging": "DIP14 SMD",
      "pictureTag": "type3",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "5",
      "name": "XBO20",
      "frequencyRange": "8-150 MHz Fundamental",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 0.5 ppb",
      "packaging": "Steel case 20x20x12.6 mm",
      "pictureTag": "type5",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "6",
      "name": "XBOH20",
      "frequencyRange": "24-300 MHz Multiplication",
      "frequencyMin": "24",
      "frequencyMax": "300",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 0.5 ppb",
      "packaging": "Steel case 20x20x12.6 mm",
      "pictureTag": "type5",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "7",
      "name": "XBOH14",
      "frequencyRange": "24-300 MHz Multiplication",
      "frequencyMin": "24",
      "frequencyMax": "300",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 15x21x9.5 mm",
      "pictureTag": "type4",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "8",
      "name": "XBOH14S",
      "frequencyRange": "24-300 MHz Multiplication",
      "frequencyMin": "24",
      "frequencyMax": "300",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 SMD ",
      "pictureTag": "type3",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    }
  ],
  temperatureRange: [
    {
      "id": "1",
      "name": 'A',
      "range": '0ºC..50ºC',
      "modelsStability": [
        { modelId: "1" ,
          model: 'XBO8' ,
         stabilityLimit: 2,
         stabilityVsTemperature:
         {
          frequency:[10, 100, 150],
          stability:[2, 5, 10],
         }
         },
        { modelId: "2" ,
          model: 'XBO8S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[2, 5, 10],
        }
        },
        { modelId: "3" ,
          model: 'XBO14' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 5, 10],
        }
        },
        { modelId: "4" ,
          model: 'XBO14S' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 5, 10],
        }
        },
        { modelId: "5" ,
          model: 'XBO20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[0.3, 3, 6],
        }
        },
        { modelId: "6" ,
          model: 'XBOH20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[0.3, 3, 6],
        }
        },
        { modelId: "7" ,
          model: 'XBOH14' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 20, 10],
        }
        },
        { modelId: "8" ,
          model: 'XBOH14S' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 20, 10],
        }
        },
      ]
    },
    {
      "id": "2",
      "name": 'B',
      "range": '-10ºC..60ºC',
      "modelsStability": [
        { modelId: "1" ,
          model: 'XBO8' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[2, 5, 10],
        }
        },
        { modelId: "2" ,
          model: 'XBO8S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[2, 5, 10],
        }
        },
        { modelId: "3" ,
          model: 'XBO14' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 5, 10],
        }
        },
        { modelId: "4" ,
          model: 'XBO14S' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 5, 10],
        }
        },
        { modelId: "5" ,
          model: 'XBO20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[0.3, 3, 6],
        }
        },
        { modelId: "6" ,
          model: 'XBOH20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[0.3, 3, 6],
        }
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 20, 10],
        }
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 20, 10],
        }
        },
      ]
    },
    {
      "id": "3",
      "name": 'C',
      "range": '-30ºC..70ºC',
      "modelsStability": [
        { modelId: "1",
          model: 'XBO8' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[2, 10, 20],
        }
        },
        { modelId: "2",
          model: 'XBO8S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[2, 10, 20],
        }
        },
        { modelId: "3",
          model: 'XBO14' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 10, 20],
        }
        },
        { modelId: "4",
          model: 'XBO14S' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 10, 20],
        }
        },
        { modelId: "5",
          model: 'XBO20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[0.5, 5, 10],
        }
        },
        { modelId: "6",
          model: 'XBOH20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[0.3, 5, 10],
        }
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[10, 50, 100],
        }
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[10, 50, 100],
        }
        },
      ]
    },
    {
      "id": "4",
      "name": 'D',
      "range": '-40ºC..85ºC',
      "modelsStability": [
        { modelId: "1",
          model: 'XBO8' , stabilityLimit: 3,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[3, 15, 30],
        }
        },
        { modelId: "2",
          model: 'XBO8S' , stabilityLimit: 3,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[3, 15, 30],
        }
        },
        { modelId: "3",
          model: 'XBO14' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 10, 20],
        }
        },
        { modelId: "4",
          model: 'XBO14S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 10, 20],
        }
        },
        { modelId: "5",
          model: 'XBO20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[0.5, 5, 10],
        }
        },
        { modelId: "6",
          model: 'XBOH20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[0.3, 3, 6],
        }
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[10, 50, 100],
        }
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[10, 50, 100],
        }
        },
      ]
    },
    {
      "id": "5",
      "name": 'E',
      "range": '-60ºC..85ºC',
      "modelsStability": [
        { modelId: "1",
          model: 'XBO8' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[10, 30, 60],
        }
        },
        { modelId: "2",
          model: 'XBO8S' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[10, 30, 60],
        }
        },
        { modelId: "3",
          model: 'XBO14' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 30, 60],
        }
        },
        { modelId: "4",
          model: 'XBO14S' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 30, 60],
        }
        },
        { modelId: "5",
          model: 'XBO20' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[10, 100, 150],
         stability:[1, 10, 20],
        }
        },
        { modelId: "6",
          model: 'XBOH20' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[5, 10, 20],
        }
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 30,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[30, 100, 200],
        }
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 20,
        stabilityVsTemperature:
        {
         frequency:[24, 100, 295],
         stability:[30, 100, 200],
        }
        },
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

  if (action.type === MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY) {
    
    const selRange = state.temperatureRange.filter(rangeItem => rangeItem.range === state.filterTemperatureRange)
    /* [{"id":5,"name":"E","range":"-60ºC..85ºC","modelsStability":[{"model":"XBO8","stability":200,"stabilityLimit":10},{"model":"XBO8S","stability":200,"stabilityLimit":10},{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5},{"model":"XBOH14","stability":200,"stabilityLimit":20},{"model":"XBOH14S","stability":200,"stabilityLimit":20}]}] */
    const selRangeModelsArray = selRange[0].modelsStability
    /* [{"model":"XBO8","stability":200,"stabilityLimit":10},{"model":"XBO8S","stability":200,"stabilityLimit":10},{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5},{"model":"XBOH14","stability":200,"stabilityLimit":20},{"model":"XBOH14S","stability":200,"stabilityLimit":20}] */
    //console.log(Array.from(new Set([...state.models, ...selRangeModelsArray])))
    
    const selRangeModelStabilityArray = selRangeModelsArray.map(item => item.stabilityLimit)
          .filter((value, index, self) => self.indexOf(value) === index)
    /* [10,5,20]  Not need*/
    
    const updateModelsRangeAndStability = state.models
      .map((model, index) => { 
        const stabilityLim = selRangeModelsArray.filter((value) => value.model === model.name)[0].stabilityLimit
        return {...model,
          stabilityLimit: stabilityLim,
          temperatureRangeSelected: state.filterTemperatureRange
        }
        //return selRangeModelsArray.filter((value) => value.model === model.name)
      })
      //const test2 = selRangeModelsArray.filter((value) => value.model === "XBO8")
      //console.log('selRangeModelsArray: ' + selRangeModelsArray)
      //console.log('test2 ' + test2)
      //console.log('test ' + updateModelsRangeAndStability)

      //debugger

    const stateCopy = { 
        ...state,
        models: updateModelsRangeAndStability
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
//MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY
const filterTemperatureRangeUpdateAC = valueRange => ({type: FILTER_TEMPERATURE_RANGE_UPDATE, valueRange});
const createTemperatureRangeStabilityArray = ({type: CREATE_TEMP_RANGE_STABILITY_ARRAY});
const mark_mdels_by_temperature_range_and_stability = ({type:MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY})

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
    dispatch(mark_mdels_by_temperature_range_and_stability)

  }
}

export const filterInitTC = () => {

  return (dispatch) => {
    dispatch(filterFrequencyFreeApplyAC)
    dispatch(initTemperatureRangeArray)

  }
}

export default gen_modelsReducer;
