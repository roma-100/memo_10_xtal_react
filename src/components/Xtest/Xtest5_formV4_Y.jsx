import * as React from 'react';
import { useForm, Controller  } from "react-hook-form";
import TextField from '@mui/material/TextField';

export default function App() {
  const { control, handleSubmit, formState: { errors }  } = useForm({
    defaultValues: {
      firstName: 45.2,
      firstName2: "hhh"
    }
  });
  const onSubmit = data => console.log(data);
  const look = errors => console.log(errors.firstName?.message)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "This is required", 
        maxLength: {
          value: 5,
          message: "This is too long"
        }
      }}
        render={({ field }) => <TextField 
        {...field} 
        label='label_firstName'
        id="standard-size-small"
        error={errors.firstName ? true: false}
       /*  error="false" */
        /* defaultValue="Small" */
        size="small"
        variant="standard"
        />}
        
      />
      <p>{errors.firstName?.message}</p>



        <Controller
        name="firstName2"
        control={control}
        rules={{ required: true, maxLength: 10 }}
        render={({ field }) => <TextField 
        {...field} 
        label="Size"
        id="standard-size-small"
        //error="true"
        /* defaultValue="Small" */
        size="small"
        variant="standard"
        />}
      />
      <p>Error</p>
      {look(errors)}
      
      <input type="submit" />
    </form>
  );
}