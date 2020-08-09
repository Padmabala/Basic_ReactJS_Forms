//import React,{Component,Fragment} from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInputField from './CommonComponents/CustomInputField/CustomInputField';

class App extends Component
{
  constructor(){
    super();
    
    console.log("Hello");
  }
  state={
    customInputValue:"",
    customEmailValue:"",
    customPasswordValue:"",
    customRetypePasswordValue:"",
    customDOBValue:""
  };

  OnFieldChange=(event,targetState)=>{
     this.setState({      
      [targetState]:event.target.value
  })
}

getFormValues(){
  return{
    customInputValue:this.state.customInputValue,
    customEmailValue:this.state.customEmailValue,
    customPasswordValue:this.state.customPasswordValue,
    customRetypePasswordValue:this.state.customRetypePasswordValue,
    customDOBValue:this.state.customDOBValue,
  }
}
submitForm () {
  const formFields = this.getFormValues();

  const url = "https://practiseendpoint.free.beeceptor.com/submit"
  const config = {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(formFields)
  };

  fetch(url, config)
      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
      .catch(err => {
          console.error(err);
      })
}
  render(){
    const {customInputValue,customEmailValue,customPasswordValue,
      customRetypePasswordValue,customDOBValue}=this.state;
    return(
      <div>
     <form id="registration-form" action={this.submitForm()} target="_self" method="POST">
      <CustomInputField
        type={'text'} fieldName={"name"}
        customInputLabel="Name" customInputPlaceholder="Enter your Name" customInputValue={customInputValue}
        OnFieldChange={this.OnFieldChange} targetState={"customInputValue"}
      /> 
      <CustomInputField
        type={'email'} fieldName={"email"}
        customInputLabel="E-Mail" customInputPlaceholder="Enter your E-Mail" customInputValue={customEmailValue}
        OnFieldChange={this.OnFieldChange} targetState={"customEmailValue"}
      /> 
      <CustomInputField
        type={'password'} fieldName={"password"}
        customInputLabel="Password" customInputValue={customPasswordValue}
        OnFieldChange={this.OnFieldChange} targetState={"customPasswordValue"}
      /> 
      <CustomInputField
        type={'password'} fieldName={"cPassword"}
        customInputLabel="Confirm Password" customInputValue={customRetypePasswordValue}
        OnFieldChange={this.OnFieldChange} targetState={"customRetypePasswordValue"}
      /> 
         <CustomInputField
        type={'date'} fieldName={"DOB"}
        customInputLabel="Date of Birth" customInputValue={customDOBValue}
        OnFieldChange={this.OnFieldChange} targetState={"customDOBValue"}
      />    
      <input type="submit" value="Submit" class="btn btn-primary"></input>
      </form>
  </div>
    )
  }
}


export default App;