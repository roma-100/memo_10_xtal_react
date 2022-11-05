import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import asyncValidate from './asyncValidate'

// +++ Start Validate +++
const validate = values => {
  const errors = {}

  const requiredFields = [
    'firstName',
    'lastName'/* ,
    'email',
    'favoriteColor',
    'notes' */
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  if (values.notes && values.notes.length > 10) {
    errors.notes = 'More then 10 chars'
  }

  console.log(errors)
  return errors
}

// +++ Helper validate+++
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
// ... End validate...

// +++ Start components +++
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {

  return (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid} 
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
}

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
)

// ... End components ...
/* 
        <Field
          classes={classes}
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <option value="" />
          <option value={'ff0000'}>Red</option>
          <option value={'00ff00'}>Green</option>
          <option value={'0000ff'}>Blue</option>
        </Field>
*/
// +++ Start Render Option Value +++
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)
// ... End Render Option Value ...

//+++ Start Output render +++
const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={radioButton}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field
          classes={classes}
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <option value="" />
          <option value={'ff0000'}>Red</option>
          <option value={'00ff00'}>Green</option>
          <option value={'0000ff'}>Blue</option>
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div />
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline
          rowsmax="4"
          margin="normal"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
// ... End Output render ...

// +++ Start HOC Form +++
const Xxx = reduxForm({
//export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm)

const Xtest = (props) => {
  const addNewMessage = (value) => {
    console.log(value)
    //debugger
    //props.sendMessageCreator(value.newMessage)
  }

  return (
    <>
    <Xxx onSubmit={addNewMessage}/>
    </>
  )
}

export default Xtest