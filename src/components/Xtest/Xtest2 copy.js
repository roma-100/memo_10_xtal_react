import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {

  const temperatureVsStability = [
    {
      "id": 1,
      "thermoRange 0ºC..50ºC": [0.5, 22]
    }
  ]

  const temperatureRange = [
    {
      "id": 1,
      "name": 'A',
      "range": '0ºC..50ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 0.7 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 3 }
      ]
    },
    {
      "id": 2,
      "name": 'B',
      "range": '-10ºC..60ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 0.7 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 3 }
      ]
    },
    {
      "id": 3,
      "name": 'C',
      "range": '-30ºC..70ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 0.7 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 3 }
      ]
    },
    {
      "id": 4,
      "name": 'D',
      "range": '-40ºC..85ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 0.7 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 3 }
      ]
    },
    {
      "id": 5,
      "name": 'E',
      "range": '-60ºC..85ºC',
      "modelsStability": [
        { model: 'XBO8' , stability: 200, stabilityLimit: 0.5 },
        { model: 'XBO8S' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14' , stability: 200, stabilityLimit: 0.6 },
        { model: 'XBO14S' , stability: 200, stabilityLimit: 0.7 },
        { model: 'XBO20' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14' , stability: 200, stabilityLimit: 5 },
        { model: 'XBOH14S' , stability: 200, stabilityLimit: 3 }
      ]
    }
  ]

  let tmpStabilityA = []

  temperatureRange.forEach((element, index) => {
    console.log(element, index)
    console.log(element.range) // find range
})
  /* const arr = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]); */
  //console.log(arrF[0]['idModel1'])

  const xx = (e) => {
      console.log(e.target.value)
  }  
  return (
    <>
    <FormControl onClick={xx} >
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female"  />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>


    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>

    </>
  );

  
}


