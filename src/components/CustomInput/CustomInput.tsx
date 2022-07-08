import React from 'react';
import './CustomInput.scss';

  type CustomInputProps = {
    width?: string,
    type: string,
    label?: string,
    placeholder?: string,
  }

export const CustomInput = ({width, type, label, placeholder, ...props}: CustomInputProps): JSX.Element => {
    return (
        <div className='input-outline-x'>
            <input className='input-control input-outline' type={type} placeholder={placeholder} style={{width: width}} />
            <label className='input-label'>{label}</label>
        </div>    
    );
}
