import React, { useEffect, useState } from 'react';
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import classNames from 'classnames';
import * as yup from 'yup';
import { CustomInput } from '../CustomInput/CustomInput';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { CustomButton } from '../CustomButton/CustomButton';

import styles from'./Form.module.scss';
import { mailRegExp, phoneRegExp } from '../../constants/regExps';

type FormProps = {
    sources: any[],
    cities: any[],
    fetchCitiesData: Function,
    fetchSourcesData: Function,
}

interface IInitialValues {
    name: string,
    tel: string,
    mail: string,
    link: string,
    city: string,
    organization: string,
    receiver: string,
    source: string,
  }
  
  const initialValues: IInitialValues = {
    name: '',
    tel: '',
    mail: '',
    link: '',
    city: '',
    organization: '',
    receiver: '',
    source: '',
  }

function Form({fetchCitiesData, fetchSourcesData, sources, cities}: FormProps): JSX.Element {
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = yup.object({
        name: yup
          .string()
          .min(2, "Минимальная длина 2 символа")
          .required("Обязательное поле"),
        tel: yup
          .string()
          .matches(phoneRegExp, "Номер заполнен некорректно")
          .required("Обязательное поле"),
        mail: yup
          .string()
          .matches(mailRegExp, "Email заполнен некорректно")
          .required("Обязательное поле"),
        link: yup
          .string()
          .min(3, "Минимальная длина 3 символа")
          .required("Обязательное поле"),
        city: yup
          .string()
          .required("Обязательное поле"),
      })

    useEffect(() => {
        fetchCitiesData();
        fetchSourcesData();
    }, []);
    

    function handleClick(): void {
        isHidden ? setIsHidden(false) : setIsHidden(true);
    }

    function LoadMore(): JSX.Element | null {

        return isHidden ? null : (
            <div className={styles.form_more}>
                <div className={styles.form_receiver}>
                    <CustomInput name='receiver' type='text' label='Получатель' placeholder='ФИО'/>
                 </div>
                 <CustomSelect name='source' placeholder='Откуда узнали про нас?' data={sources} />
            </div>
        );  
    }

    return (
            <Formik
                validateOnChange={true}
                initialValues={initialValues}
                validationSchema={validationSchema}
                isInitialValid={validationSchema.isValidSync(initialValues)}
                enableReinitialize={true}
                onSubmit={(
                    values: IInitialValues,
                    { resetForm }: FormikHelpers<IInitialValues>
                  ) => {
                    setIsLoading(true);
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setIsLoading(false);
                        resetForm();
                    }, 2000);
                  }}
            >
                {({isValid}): JSX.Element => {

                    return (
                        <FormikForm>
                            <div className={styles.form}>
                                <div className={styles.form_container}>
                                    <CustomInput name='name' type='text' label='Ваше имя&nbsp;*&nbsp;' placeholder='Иван'/>
                                    <CustomInput name='tel' type='tel' label='Номер телефона&nbsp;*&nbsp;' placeholder='+7 (000) 000-00-00'/>
                                </div>
                                <div className={styles.form_container}>
                                    <CustomInput name='mail' type='text' label='E-mail&nbsp;*&nbsp;' placeholder='example@skdesign.ru'/>
                                    <CustomInput name='link' type='text' label='Ссылка на профиль&nbsp;*&nbsp;' placeholder='instagram.com/skdesign'/>
                                </div>
                                <CustomSelect name='city' placeholder='Выберите город&nbsp;*&nbsp;' data={cities}/>
                                <div className={styles.form_org}>
                                    <CustomInput name='organization' type='text' label='Название огранизации/студии' placeholder='SK Design'/>
                                </div>
                                <div className={styles.form_more_button} onClick={handleClick}>Показать дополнительные поля
                                <div className={classNames(styles.form_more_button_icon, {
                                    [styles.rotate]: !isHidden,
                                })}>{'>'}</div>
                                </div>
                                {LoadMore()}
                                <CustomButton type='submit' text='Отправить заявку' isLoading={isLoading} isValid={!isValid} />
                            </div>
                        </FormikForm>
                    );
                }}
            </Formik>
    );
}

export default Form;
