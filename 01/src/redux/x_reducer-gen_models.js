// === reducer-gen_models.js ===
const FILTER_FREQUENCY_FUNDAMENTAL = "FILTER_FREQUENCY_FUNDAMENTAL";
const FILTER_FREQUENCY_FUNDAMENTAL_APPLY = "FILTER_FREQUENCY_FUNDAMENTAL_APPLY";

const FILTER_FREQUENCY_MULTIPLICATION= "FILTER_FREQUENCY_MULTIPLICATION";
const FILTER_FREQUENCY_MULTIPLICATION_APPLY = "FILTER_FREQUENCY_MULTIPLICATION_APPLY";


const FILTER_FREQUENCY_FREE_APPLY = "FILTER_FREQUENCY_FREE_APPLY"

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
      "name": "XBOH14",
      "frequencyRange": "24-300 MHz",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 15x21x9.5 mm",
      "pictureName": "./pimages/type2_200px.png",
      "isActive": false
    },
    {
      "id": 7,
      "name": "XBOH14S",
      "frequencyRange": "24-300 MHz",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 SMD ",
      "pictureName": "./pimages/type2_200px.png",
      "isActive": false
    }
  ],
  temperatureVsStability: [
    {
      "id": 1,
      "thermoRange": "0ºC..50ºC",
      "stabilityModels": ["200...0.3"]
    }
  ],
  frequencyType: {
    placeholderType: 'fundamental / with multiplication',
    variantType : ['fundamental', 'with multiplication']
  },
  filterFrequencyType: '',
  filters: 
    {frequencyTypeFundamental: false,
     frequencyTypeMultiplication: false, 
    }

};

const gen_modelsReducer = (state = initialState, action) => {
  //debugger
  //console.log('44action' + action.value);

  if (action.type === FILTER_FREQUENCY_FUNDAMENTAL) {
    //debugger
    const stateCopy = { 
        ...state,
        filters: 
        {frequencyTypeFundamental: true,
         frequencyTypeMultiplication: false, 
        }
    }
    return stateCopy
  } 

  if (action.type === FILTER_FREQUENCY_MULTIPLICATION) {
    //debugger
    const stateCopy = { 
        ...state,
        filters: 
        {frequencyTypeFundamental: false,
         frequencyTypeMultiplication: true, 
        }    }
    return stateCopy
  } 
  
/* **** filters apply **** */  
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

//Aply if it is matter
if (action.type === FILTER_FREQUENCY_FUNDAMENTAL_APPLY 
  && state.filters.frequencyTypeFundamental) {
  //debugger

  const stateCopy = { 
      ...state,
      models: state.models.map ( //возвр новый объект
      model => { 
          return (model.frequencyType === 'fundamental')
           ? {...model,isActive: true} : {...model,isActive: false};
      }
    ),

  }
  return stateCopy
} 

//Aply if it is matter
if (action.type === FILTER_FREQUENCY_MULTIPLICATION_APPLY 
  && state.filters.frequencyTypeMultiplication) {
  //debugger

  const stateCopy = { 
      ...state,
      models: state.models.map ( //возвр новый объект
      model => { 
          return (model.frequencyType === 'with multiplication')
           ? {...model,isActive: true} : {...model,isActive: false};
      }
    ),

  }
  return stateCopy
} 

//debugger
return state

};

//debuggerexport const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});
//FILTER_FREQUENCY_FREE_APPLY
const filterFrequencyFreeApplyAC = ({type: FILTER_FREQUENCY_FREE_APPLY});

const filterFrequencyFundamentalAC = ({type: FILTER_FREQUENCY_FUNDAMENTAL});
const filterFrequencyFundamentalApplyAC = ({type: FILTER_FREQUENCY_FUNDAMENTAL_APPLY});

const filterFrequencyMultiplicationAC = ({type: FILTER_FREQUENCY_MULTIPLICATION});
const filterFrequencyMultiplicationApplyAC = ({type: FILTER_FREQUENCY_MULTIPLICATION_APPLY});

export const filterFrequencyTypeTC = (event) =>{
  console.log('lookk: ' + event.target.value);
  //value="Fundamental"  value="withMultiplication"
  const valueType = event.target.value
  return (dispatch) => {
    dispatch(filterFrequencyFreeApplyAC)
    valueType === 'Fundamental' && dispatch(filterFrequencyFundamentalAC)
    valueType === 'Fundamental' && dispatch(filterFrequencyFundamentalApplyAC)

    valueType === 'withMultiplication' && dispatch(filterFrequencyMultiplicationAC)
    valueType === 'withMultiplication' && dispatch(filterFrequencyMultiplicationApplyAC)
  }
}


export default gen_modelsReducer;