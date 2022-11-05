//***********  SpecificationStep1.jsx **** */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Radio,
  FormLabel,
  RadioGroup,
  InputAdornment,
  OutlinedInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material/";
import SpecificationBanerStep1 from "./SpecificationBannerStep1";
import SpecificationFrequency from "./xd_SpecificationFrequency";

const SpecificationStep1 = (props) => {
  //console.log (props)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nominalFrequency: "",
      stabilityVsTemperature: "",
      voltage: "3.3",
    },
  });

  const onSubmit = (data) => {
    props.specFormInputStep2({
      inputValueStep2: {
        nominalFrequency: data.nominalFrequency,
        stabilityVsTemperature: data.stabilityVsTemperature,
        voltage: data.voltage,
      },
    });
    // console.log(data)
  };
  const look = (errors) => console.log(errors.firstName?.message);

  return (
    <>
{/* Start Banner +++++++++++ */}  
      <SpecificationBanerStep1
        picturePath = {props.picturePath}
        selectedModel = {props.selectedModel}
        features = {props.selectedModel.features}
      />
{/* END Banner +++++++++++ */}       

{/* Start Form  +++++++++++ */} 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <SpecificationFrequency {...props} 
        />
        </div>

        <div>
          <Controller
            name="stabilityVsTemperature"
            control={control}
            rules={{
              required: "This is required",
              maxLength: {
                value: 8,
                message: "Value is too long",
              },
            }}
            render={({ field }) => {
              //window.bb = { field }
              return (
                <FormControl sx={{ m: 1, width: "90%" }}>
                <TextField
                  
                  {...field}
                  label={ props.selectedModel.temperatureRangeSelected ?
                    `Stability vs Temperature ${props.selectedModel.temperatureRangeSelected}`: "hhh"
                  }
                  /* id="standard-size-small" */
                  /* sx={{ m: 1, width: '25ch' }} */
                  margin="dense"
                  variant="outlined"
                  error={errors.stabilityVsTemperature ? true : false}
                  placeholder={"0.3"                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">ppb</InputAdornment>
                    ),
                  }}
                  
                  /* onChange={handleChange('weight')} */
                />
                  <FormHelperText 
                  sx={{ color: 'red' }}
                  id="standard-weight-helper-text">{errors.stabilityVsTemperature ? 
                                                    errors.stabilityVsTemperature?.message : 
                                                    null}
                  </FormHelperText>
                </FormControl>
              );
            }}
          />
          <p>
            {errors.stabilityVsTemperature?.message}
          </p>
        </div>

        <div>
          <Controller
            name="voltage"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <FormControl sx={{ m: 1, width: "25ch" }}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Supply Voltage
                  </FormLabel>
                  <RadioGroup
                    {...field}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value={3.3}
                      control={<Radio />}
                      label="3.3V"
                    />
                    <FormControlLabel
                      value={5}
                      control={<Radio />}
                      label="5V"
                    />
                  </RadioGroup>
                </FormControl>
              );
            }}
          />
        </div>

        <p>Error</p>
        {look(errors)}

        <input type="submit" />
        {/* <div><pre>{JSON.stringify(data, null, 2) }</pre></div>; */}
      </form>
{/* END Form  +++++++++++ */}       
    </>
  );
};

export default SpecificationStep1;
