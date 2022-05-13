import React from 'react';
import s from './styles.module.css';

interface ButtonPropsInterface {
    title: string,
    callBack: () => void,
    disabled: boolean
}

const Button: React.FC<ButtonPropsInterface> = ({title, callBack, disabled}) => {

    const buttonClassDis = disabled ? s.disabled : '';
    const buttonClass = title === 'inc' ? s.inc : title === 'reset' ? s.reset : s.set

    return (
        <div className={`${s.button__wrapper} ${buttonClass}`}>
            <button className={buttonClassDis} onClick={callBack} disabled={disabled}>{title}</button>
        </div>
    );
};

export default Button;