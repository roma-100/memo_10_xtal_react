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
  ]

  let tmpStabilityA = []


const temperatureRangeArray = temperatureRange.map(element => {
    return element.range
})
/* ["0ºC..50ºC","-10ºC..60ºC","-30ºC..70ºC","-40ºC..85ºC","-60ºC..85ºC"] */
console.log(temperatureRangeArray[2])

const selRange = temperatureRange.filter(rangeItem => rangeItem.range === '-60ºC..85ºC')
/* [{"id":5,"name":"E","range":"-60ºC..85ºC","modelsStability":[{"model":"XBO8","stability":200,"stabilityLimit":10},{"model":"XBO8S","stability":200,"stabilityLimit":10},{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5},{"model":"XBOH14","stability":200,"stabilityLimit":20},{"model":"XBOH14S","stability":200,"stabilityLimit":20}]}] */
const selRangeModelsArray = selRange[0].modelsStability
/* [{"model":"XBO8","stability":200,"stabilityLimit":10},{"model":"XBO8S","stability":200,"stabilityLimit":10},{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5},{"model":"XBOH14","stability":200,"stabilityLimit":20},{"model":"XBOH14S","stability":200,"stabilityLimit":20}] */
const selRangeModelStabilityArray = selRangeModelsArray.map(item => item.stabilityLimit)
.filter((value, index, self) => self.indexOf(value) === index)
/* [10,5,20] */
const selRangeModelsExactStabilityArray = selRangeModelsArray.filter(rangeItem => rangeItem.stabilityLimit <= 5)
/* [{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5}] */

const sweeterArray = selRangeModelsArray.map(selRangeModelsArrayItem => {
  return selRangeModelsArrayItem.model
})
/* ["XBO8","XBO8S","XBO14","XBO14S","XBO20","XBOH20","XBOH14","XBOH14S"] */

  return (
    <>
    {JSON.stringify(sweeterArray)}

      <ul>
        {selRangeModelStabilityArray.map(item => {
          return <li>{item}</li>;
        })}
      </ul>

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


