import React from 'react';
import PropTypes from 'prop-types'; 

// const CustomInputField=({customInputLabel,customInputPlaceholder,customInputValue,OnFieldChange,type
//     ,targetState})=>{

const CustomInputField=({customInputLabel="",customInputPlaceholder="",customInputValue="",OnFieldChange=null,
type="",targetState="",fieldName=""})=>{
    //props could also be referred like below
    //const CustomInputField=(props)=>{
    //console.log(props);
    //console.log(props.customInputLabel) or console.log(props.customInputPlaceholder) //these are the attributes passed from the app.js
    //
    const changeHandler=(event)=>{
        OnFieldChange(event,targetState);
    }
    return(
        
        <div className="form-group">
                <label htmlFor={fieldName}>{customInputLabel}</label>
                <input 
                type={type} 
                className="form-control" 
                id="name" 
                placeholder={customInputPlaceholder}
                value={customInputValue} 
                required={true}
                onChange={changeHandler}

                />
        </div>
    )
};

// CustomInputField.defaultProps=()=>{
//     OnFieldChange=null;
// }

CustomInputField.propTypes={
    OnFieldChange:PropTypes.func.isRequired,    
    customInputLabel:PropTypes.string.isRequired,
    customInputPlaceholder:PropTypes.string.isRequired,
    customInputValue:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    targetState:PropTypes.string.isRequired,
};

export default CustomInputField;