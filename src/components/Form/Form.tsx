import React, { useState } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import './Form.scss';

function Form() {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        isClicked ? setIsClicked(false) : setIsClicked(true);
    }

    function LoadMore() {
        return isClicked ? null : (
            <div className='form_more'>
                 <CustomInput  width='92%' type='text' label='Получатель' placeholder='ФИО'/>
                 <CustomSelect placeholder='Откуда узнали про нас?' />
            </div>
        );  
    }

    return (
        <div className="form">
            <div className='input_container'>
                <CustomInput width='85%' type='text' label='Ваше имя&nbsp;*&nbsp;' placeholder='Иван'/>
                <CustomInput width='85%' type='tel' label='Номер телефона&nbsp;*&nbsp;' placeholder='+7 (000) 000-00-00'/>
            </div>
            <div className='input_container'>
                <CustomInput width='85%' type='email' label='E-mail&nbsp;*&nbsp;' placeholder='example@skdesign.ru'/>
                <CustomInput width='85%' type='url' label='Ссылка на профиль&nbsp;*&nbsp;' placeholder='instagram.com/skdesign'/>
            </div>
            <CustomSelect placeholder='Выберите город&nbsp;*&nbsp;' />
            <div className='input_org'>
                <CustomInput type='text' label='Название огранизации/студии' placeholder='SK Design'/>
            </div>
            <button className='form_more_button' onClick={handleClick}>Показать дополнительные поля</button>
            {LoadMore()}
            <button className='form_button'>Отправить заявку</button>
        </div>
    );
}

export default Form;
