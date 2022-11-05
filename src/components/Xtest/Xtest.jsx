import React, {useState}  from 'react';
import { Field, reduxForm } from 'redux-form'
import Test3 from './Xtest3'

const Xtest =() => {
    return (
        <>
        <h1>Xtest!!!</h1>

        <hr/>

        <NameForm />
        <Checkbox />
        <Test3 />
        
        </>
    )
}




class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this.state.value);
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      //event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


  function Checkbox() { 
  
    const [checked, setChecked] = useState(false); 
    const handleChange = () => { 
      
      setChecked(!checked); 
      
    }; 
    
    return ( 
      
      <div> 
      
         
          
        <p>
          {checked ? 'Checked' : 'Not checked'}
        </p> 
      
      </div> 
      
    ); 
    
  }; 
  
export default Xtest