import React, {useState} from 'react';
import s from './styles.module.css';

interface WindowPropsInterface {
    value: number,
    disabled: boolean,
    flag: boolean,
    flag2: boolean
}

const Window: React.FC<WindowPropsInterface> = ({value, disabled, flag, flag2}) => {

    const windowClass = disabled ? s.disabled : '';

    return (
        <div className={s.window__wrapper}>
            {
                flag ?
                    flag2 ?
                        <div className={s.window__error}>Incorrect value!</div>
                        :
                        <div className={s.window__text}>Enter value and press <span>SET</span></div>
                    :
                    <div className={windowClass}>{value}</div>
            }
        </div>
    );
};

export default Window;