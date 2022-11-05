import React from "react";
import GenModel from "./GenModel/GenModel";
/* https://mui.com/material-ui/react-radio-button/#api */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const GenModelsHello = (props) => {

 /* start test */
 //console.log(props)

const handleChangeFrequencyType = event => {
  //props.filterFrequencyTypeAC(event.target.value)
  console.log ('look: ' + event.target.value)
  //props.filterFrequencyTypeTC(event.target.value)
  //props.tt(event.target.value)
  
};

/* console.log('PPPROPS: ' + props) */
 /* end test */

const genModel = props.gen_models.models.map((x, index) => {
  return (
      
      <GenModel
      key={x.id}
      genModelId={x.id} 
      genModelTitle={x.name} 
      genModelPackaging={x.packaging} 
      genModelPicture={x.pictureName}
      genModelIsActive ={x.isActive}
      />      
    );
  })
  /* const ModelsStabilityArray */
  return (
    <>
      <div className="gen-models-filter__wrap">
        <h2>Quick Filter</h2>
      <FilterFrequencyType filterFrequencyTypeTC={props.filterFrequencyTypeTC}/>
      <hr />
      <FilterTemperatureRange 
      filterTemperatureRangeTC={props.filterTemperatureRangeTC}
      temperatureRangeArray={props.gen_models.temperatureRangeArray}
      />

      {/* {temperatureRange()} */}
      </div>
      <div className="gen-models__wrap">
        <h2>OCXO Models</h2>
        <div className="gen-models">{genModel}</div>
      </div>

      <div>
        {" "}
        <p>GenModelsHello Props:</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </>
  );
};
/* ++++++++  FilterFrequencyType ++++++*/
const FilterFrequencyType = props => {
  return (
    <FormControl onClick={props.filterFrequencyTypeTC}>
    <FormLabel id="demo-radio-buttons-group-label">FrequencyType</FormLabel>
    <RadioGroup
      row
      aria-labelledby="radio-buttons-group-label"
      defaultValue=""
      name="radio-buttons-group-frequency-type"
    >
      <FormControlLabel value="fundamental" control={<Radio />} label="Fundamental"  />
      <FormControlLabel value="with multiplication" control={<Radio />} label="with Multiplication" />

    </RadioGroup>
  </FormControl>
  )
}
/* ....  FilterFrequencyType ....*/


/* ++++ FilterTemperatureRange ++++ */
const FilterTemperatureRange = props => {
  
  //temperatureRangeArray
  const temperatureRange = () => {
    return props.temperatureRangeArray.map((rangeItem, index) =>{
      return (<FilterTemperatureRangeRadioItem 
        key={index}
        value = {rangeItem}
        label = {rangeItem}
      />)
    })
  }

  return (
    <FormControl onClick={props.filterTemperatureRangeTC}>
    <FormLabel id="demo-radio-buttons-group-label">TemperatureRange</FormLabel>
    <RadioGroup
      row
      aria-labelledby="radio-buttons-group-label"
      defaultValue=""
      name="radio-buttons-group-temperature-range"
    >
    {temperatureRange()} 

    </RadioGroup>
  </FormControl>
  )
}

const FilterTemperatureRangeRadioItem = props => {
  return (
    <FormControlLabel value={props.value} control={<Radio />} label={props.label}  />
  )
}

export default GenModelsHello;
