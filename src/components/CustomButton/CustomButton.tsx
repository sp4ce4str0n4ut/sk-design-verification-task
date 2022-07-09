import React from 'react';
import classNames from 'classnames';

import styles from './CustomButton.module.scss';

interface ICustomButtom {
  text: string,
  isLoading: boolean,
  isValid: boolean,
  type?: 'button' | 'submit' | 'reset' | undefined,
}

export const CustomButton = ({
  text,
  isLoading,
  isValid,
  type,
  ...props
}: ICustomButtom) => {

  return (
    <button className={classNames(styles.custom_button, {
        [styles.disabled]: isValid && !isLoading,
        [styles.loading]: isLoading,
    })} type={type} {...props}>
        <div className={classNames(styles.loader, {
        [styles.loader_loading]: isLoading,
        })}/>
        {isLoading ? null : text}
    </button>
  )
}
