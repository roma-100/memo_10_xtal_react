import React from "react";

/* https://mui.com/material-ui/react-radio-button/#api */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
{/*       <FormLabel id="demo-radio-buttons-group-label">TemperatureRange</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group-temperature-range"
        className="gen-models-filter__source--color"
      >
      {temperatureRange()} 
  
      </RadioGroup>
    </FormControl>
    )
  }
  
  const FilterTemperatureRangeRadioItem = props => {
    return (
      <FormControlLabel value={props.value} control={<Radio color="secondary" />} label={props.label}  />
    )
  }

  export default FilterTemperatureRange