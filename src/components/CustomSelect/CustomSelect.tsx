import React, { useState } from 'react';
import classNames from 'classnames';
import { FieldAttributes, useField } from 'formik';

import styles from './CustomSelect.module.scss';

  type CitiesData = {
    id: string,
    name: string
  }

  interface IClassName {
    className?: string
  }

  interface CustomSelectProps extends IClassName {
    name: string,
    label?: string,
    placeholder?: string,
    handleChange?: any,
    data?: Array<CitiesData>,
  }

export const CustomSelect = ({
  label,
  placeholder,
  data,
  ...props
}: FieldAttributes<CustomSelectProps>): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const [field, meta] = useField<CustomSelectProps>(props);
  let errorText = meta.error && meta.touched ? meta.error : '';

  const handleClick = () =>
    isClicked ? setIsClicked(false) : setIsClicked(true);

  return (
    <div className={styles.select_outline_x}>
      <Select
        className={classNames(styles.select_control, styles.select_outline, {
          [styles.select_outline_error]: meta.touched && meta.error,
        })}
        onClick={handleClick}
        {...field}
        {...props}
      >
        <option defaultValue='' disabled hidden></option>
        {data?.map((item, index) => (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        ))}
      </Select>
      <label
        className={classNames(styles.select_label, {
          [styles.select_label_error]: meta.touched && meta.error,
        })}
      >
        {placeholder}
      </label>
      <div
        className={classNames(styles.select_outline_x_icon, {
          [styles.rotate]: isClicked,
        })}
      >
        {">"}
      </div>
      {meta.touched && meta.error ? (
        <p className={classNames(styles.select_error)}>{errorText}</p>
      ) : null}
    </div>
  );
};

export const Select = ({ ...props }) => {
  return <select {...props} required />
}
