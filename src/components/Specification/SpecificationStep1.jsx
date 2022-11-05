//***********  SpecificationStep1.jsx **** */
import React, { useState } from "react";
import './SpecificationStep1.scss'
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

const SpecificationStep1 = (props) => {
  const [stabilityAccurate, setStabilityAccurate] = useState(props.selectedModel.stabilityLimit);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nominalFrequency: "",
      stabilityVsTemperature: "",
      voltage: "3.3",
      outputType: "Sine-wave"
    },
  });

  const formElementDecor = {
    textField: { p:1, m: 1, width: "93%", display: "flex", justifyContent: "center"},

    radioGroupFormControl: { p:1, width: "93%", display: "flex", justifyContent: "center"},
    radioGroupLabel: {color: "#084C81", display: "flex", justifyContent: "center"},
    radioGroup: { width: "100%", display: "flex", justifyContent: "center"}
  }
 

  const onSubmit = (data) => {
    props.specFormInputStep2({
      inputValueStep2: {
        nominalFrequency: data.nominalFrequency,
        stabilityVsTemperature: data.stabilityVsTemperature,
        voltage: data.voltage,
        outputType: data.outputType
      },
    });
    // console.log(data)
  };
  const look = (errors) => console.log(errors.firstName?.message);

const getStability = (frequency, frequencyArr, stabilityArr) => {
  if (frequency < frequencyArr[0]) return stabilityArr[0]
  if (frequency < frequencyArr[1]) {
    const result = (stabilityArr[1] - stabilityArr[0]) * (frequency - frequencyArr[0]) / (frequencyArr[1] - frequencyArr[0]) + stabilityArr[0]
    return result.toFixed()
  }
  if (frequency <= frequencyArr[2]) {
    const result = (stabilityArr[2] - stabilityArr[1]) * (frequency - frequencyArr[1]) / (frequencyArr[2] - frequencyArr[1]) + stabilityArr[1]
    return result.toFixed()
  }
  return props.selectedModel.stabilityLimit
}



const handleOnBlur = (e) => {
  const frequency = e.target.value
  const frequencyArr = props.stabilityVsTemperature.frequency
  const stabilityArr = props.stabilityVsTemperature.stability
  console.log("frequency: " +  frequency)
  console.log("frequency: " +  frequencyArr)
  console.log("stability: " +  stabilityArr)
  /* console.log("look:  " + getStability(frequency, frequencyArr, stabilityArr)) */
  setStabilityAccurate(getStability(frequency, frequencyArr, stabilityArr))
  console.log("look:  " + stabilityAccurate)
}

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
    <div className="specification-form__wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
{/* Start nominalFrequency +++++++++++ */}            
          <Controller
            name="nominalFrequency"
            control={control}
            rules={{
              required: "This is required",
              maxLength: {
                value: 10,
                message: "Value is too long",
              },
              min:{
                value: props.selectedModel.frequencyMin,
                message: "Min value is " + props.selectedModel.frequencyMin + " MHz",
              },
              max:{
                value: props.selectedModel.frequencyMax,
                message: "Max value is " + props.selectedModel.frequencyMax + " MHz",
              },
            }}
            render={({ field }) => {
              return (
                <FormControl sx={formElementDecor.textField}
                onBlur={handleOnBlur}
                >
                <TextField

                  {...field}
                  label="Nominal Frequency"
                  /* id="standard-size-small" */
                  /* sx={{ m: 1, width: '25ch' }} */
                  margin="dense"
                  variant="outlined"
                  error={errors.nominalFrequency ? true : false}
                  placeholder={
                    errors.nominalFrequency
                      ? errors.nominalFrequency.message
                      : "8...150"
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">MHz</InputAdornment>
                    ),
                  }}
                  /* onChange={handleChange('weight')} */
                />
                  <FormHelperText 
                  sx={{ color: 'red' }}
                  id="standard-weight-helper-text">{errors.nominalFrequency !== "This is required" &&
                  errors.nominalFrequency?.message}
                  </FormHelperText>
                </FormControl>
              );
            }}
          />
        </div>
{/* END nominalFrequency +++++++++++ */}  

{/* Start stabilityVsTemperature +++++++++++ */}  
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
              return (
                <FormControl sx={formElementDecor.textField}>
                <TextField
                  
                  {...field}
                  label={ props.selectedModel.temperatureRangeSelected ?
                    `Stability vs Temperature ${props.selectedModel.temperatureRangeSelected}`: "Error. Temperature range has not been selected!"
                  }
                  /* id="standard-size-small" */
                  /* sx={{ m: 1, width: '25ch' }} */
                  margin="dense"
                  variant="outlined"
                  error={errors.stabilityVsTemperature ? true : false}
                  placeholder={stabilityAccurate +''}
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
        </div>
{/* END stabilityVsTemperature +++++++++++ */} 


{/* Start voltage +++++++++++ */} 
        <div>
          <Controller 
            name="voltage"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <div className="radiogroup--decor">
                <FormControl sx={formElementDecor.radioGroupFormControl}>
                  <FormLabel id="voltage-radio-buttons-group-label"
                  sx={formElementDecor.radioGroupLabel}
                  >
                    Supply Voltage
                  </FormLabel>
                  <RadioGroup sx={formElementDecor.radioGroup}
                    {...field}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="3.3"
                      control={<Radio />}
                      label="3.3V"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="secondary" />}
                      label="5V"
                    />
                  </RadioGroup>
                </FormControl>
                </div>
              );
            }}
          />
        </div>
{/* END voltage +++++++++++ */} 

{/* Start Output Type +++++++++++ */} 
<div>
          <Controller
            name="outputType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {

              return (
                <div className="radiogroup--decor">
                <FormControl sx={formElementDecor.radioGroupFormControl}>
                  <FormLabel id="outputType-radio-buttons-group-label"
                  sx={formElementDecor.radioGroupLabel}
                  >
                  Output Type
                  </FormLabel>
                  <RadioGroup sx={formElementDecor.radioGroup}
                    {...field}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="Sine-wave"
                      control={<Radio />}
                      label="Sine-wave"
                    />
                    <FormControlLabel
                      value="HCMOS"
                      control={<Radio />}
                      label="HCMOS"
                    />
                  </RadioGroup>
                </FormControl>
                </div>
              );
            }}
          />
        </div>
{/* END Output Type +++++++++++ */} 

        <input type="submit" />
        {/* <div><pre>{JSON.stringify(data, null, 2) }</pre></div>; */}
      </form>
    </div>
{/* END Form  +++++++++++ */}       
    </>
  );
};

export default SpecificationStep1;
