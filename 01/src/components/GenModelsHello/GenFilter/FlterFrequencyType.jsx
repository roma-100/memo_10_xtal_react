import React from "react";

/* https://mui.com/material-ui/react-radio-button/#api */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FilterFrequencyType = props => {
    return (
      <FormControl onClick={props.filterFrequencyTypeTC}>
      {/* <FormLabel id="demo-radio-buttons-group-label">FrequencyType</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group-frequency-type"
        className="gen-models-filter__source--color"
      >
        <FormControlLabel value="fundamental" control={<Radio />} label="Fundamental"  />
        <FormControlLabel value="with multiplication" control={<Radio />} label="Multiplication" />
  
      </RadioGroup>
    </FormControl>
    )
  }

  export default FilterFrequencyType