import React from 'react';
import { FieldAttributes, useField } from 'formik';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

import styles from './CustomInput.module.scss';

interface IClassName {
  className?: string,
}

interface CustomInputProps extends IClassName {
  name: string,
  type: string,
  label?: string,
  placeholder?: string,
}

export const CustomInput = ({
  type,
  label,
  placeholder,
  ...props
}: FieldAttributes<CustomInputProps>): JSX.Element => {
  const [field, meta] = useField<CustomInputProps>(props);
  let errorText = meta.touched && meta.error ? meta.error : '';

  return (
    <div className={styles.input_outline_x}>
      {meta.touched && meta.error ? (
        <p className={classNames(styles.input_error)}>{errorText}</p>
      ) : null}
      {field.name === 'tel' ? (
        <Mask
          className={classNames(styles.input_control, styles.input_outline, {
            [styles.input_outline_error]: meta.touched && meta.error,
          })}
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      ) : (
        <Input
          className={classNames(styles.input_control, styles.input_outline, {
            [styles.input_outline_error]: meta.touched && meta.error,
            [styles.stretch]: field.name === 'organization' || field.name === 'receiver',
          })}
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      )}
      <label
        className={classNames(styles.input_label, {
          [styles.input_label_error]: meta.touched && meta.error,
        })}
      >
        {label}
      </label>
    </div>
  );
};

export const Input = ({ ...props }) => {
  return <input {...props} />
}

export const Mask = ({ ...props }) => {
  return <InputMask mask='+7 (999) 999-99-99' {...props} />;
}
