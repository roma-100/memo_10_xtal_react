//***********  SpecificationStep1.jsx **** */
import React from "react";
import { useForm, Controller  } from "react-hook-form";
import {TextField, Radio, FormLabel, RadioGroup, InputAdornment,OutlinedInput, 
  FormControl, FormControlLabel, FormHelperText
} from '@mui/material/';

const SpecificationStep1 = (props) => {
    const { control, handleSubmit, formState: { errors }  } = useForm({
      defaultValues: {
        nominalFrequency: '',
        stabilityVsTemperature: '',
        voltage: "3.3"
      }
    });
    const onSubmit = data => console.log(data);
    const look = errors => console.log(errors.firstName?.message)
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="nominalFrequency"
            control={control}
            rules={{ required: "This is required", 
            maxLength: {
              value: 10,
              message: "Value is too long"
            }
          }}
            render={({ field }) => 
            <TextField 
            {...field} 
            label='Nominal Frequency'
            id="standard-size-small"
            error={errors.nominalFrequency ? true: false}
          /*  error="false" */
            /* defaultValue="Small" */
            size="small"
            margin='dense'
            variant="standard"
            />}
            
          />
          <p>{errors.nominalFrequency?.message}</p>
        </div>
  
        <div>
          <Controller
          name="stabilityVsTemperature"
          control={control}
          rules={{ required: true, maxLength: 5 }}
          render={({ field }) => <TextField 
          {...field} 
          label="Stability vs. Temperature"
          placeholder="to 0.3 ppb"
          id="standard-size-small"
          error={errors.stabilityVsTemperature ? true: false}
          //error="true"
          /* defaultValue="Small" */
          size="small"
          margin='dense'
          variant="standard"
          />}
        />
        </div>

        <div>
        <Controller
          name="voltage"
          control={control}
          rules={{ required: true }}
          render={
              ({ field }) => {
              return (
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Voltage</FormLabel>
                    <RadioGroup
                    {...field} 
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel value={3.3} control={<Radio />} label="3.3V" />
                    <FormControlLabel value={5} control={<Radio />} label="5V" />
                  </RadioGroup>
                  </FormControl>
              )
            }
        }
        />
      </div>
{/* ++++ Start Test ++++ */}
      <div>
          <Controller
            name="xTest1"
            control={control}
            rules={{ required: "This is required", 
            maxLength: {
              value: 10,
              message: "Value is too long"
            }
          }}
            render={({ field }) => {
              return (
                <TextField
                label="Nominal Frequency xTest1"
                id="standard-size-small"
                /* sx={{ m: 1, width: '25ch' }} */
                margin='dense'
                variant="standard"
                InputProps={{
                  startAdornment: <InputAdornment position="start">MHz</InputAdornment>,
                }}
              />
              )
            }
          }
            
          />
        </div>

{/* xTest 2 */}       
<div>
          <Controller
            name="xTest2"
            control={control}
            rules={{ required: "This is required", 
            maxLength: {
              value: 10,
              message: "Value is too long"
            }
          }}
            render={({ field }) => {
              return (
                <TextField sx={{ m: 1, width: '25ch' }} variant="outlined"
                label="Nominal Frequency xTest2"
                id="standard-size-small"
                /* sx={{ m: 1, width: '25ch' }} */
                margin='dense'
                InputProps={{
                  startAdornment: <InputAdornment position="start">MHz</InputAdornment>,
                }}
              />
              )
            }
          }
            
          />
        </div> 

{/* xTest 3 */}       
<div>
          <Controller
            name="xTest3"
            control={control}
            rules={{ required: "This is required", 
            maxLength: {
              value: 10,
              message: "Value is too long"
            }
          }}
            render={({ field }) => {
              return (
                <TextField 
                label="Nominal Frequency xTest3"
                id="standard-size-small"
                /* sx={{ m: 1, width: '25ch' }} */
                margin='dense'
                InputProps={{
                  startAdornment: <InputAdornment position="start">MHz</InputAdornment>,
                }}
              />
              )
            }
          }
            
          />
        </div>         

{/* xTest 4 */}   
<div>  
        <Controller

            name="nominalFrequency"
            control={control}
            rules={{ required: "This is required", 
            maxLength: {
              value: 10,
              message: "Value is too long"
            }
          }}
            render={({ field }) => 
            <TextField 
            {...field} 
            label='Nominal Frequency xTest4'
            id="standard-size-small"
            error={errors.nominalFrequency ? true: false}
          /*  error="false" */
            /* defaultValue="Small" */
            size="small"
            margin='dense'
            variant="standard"

            />}
            
          />
          <p>{errors.nominalFrequency?.message}</p>
        </div>        
{/* ++++ End Test ++++ */}

        <p>Error</p>
        {look(errors)}
        
        <input type="submit" />
      </form>
    );

  }


export default SpecificationStep1