import React from 'react';
import './CustomSelect.scss';

  type CustomSelectProps = {
    label?: string,
    placeholder?: string,
  }

export const CustomSelect = ({label, placeholder, ...props}: CustomSelectProps): JSX.Element => {
    return (
        <div className='select-outline-x'>
            <select className='select-control select-outline' required>
                <option value="" disabled={true} selected={true}></option>
                <option value="1">Select option 1</option>
                <option value="2">Select option 2</option>
                <option value="3">Select option 3</option>    
            </select>
            <label className='select-label'>{placeholder}</label>
        </div>    
    );
}
