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

const SpecificationFrequency = (props) => {
  //console.log (props)
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nominalFrequency: "",
    },
  });

  const look = (errors) => console.log(errors.firstName?.message);

  return (
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
                <FormControl sx={{ m: 1, width: "90%" }}>
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
  );
};

export default SpecificationFrequency;
