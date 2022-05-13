import React from 'react';
import s from './styles.module.css';
import {Button, Window} from "../index";

interface CounterPropsInterface {
    value: number,
    disable: boolean,
    disableInc: boolean,
    inc: () => void,
    reset: () => void,
    flag: boolean,
    disableReset: boolean,
    flag2: boolean
}

const Counter: React.FC<CounterPropsInterface> = ({
                                                      value,
                                                      disable,
                                                      flag,
                                                      inc,
                                                      disableInc,
                                                      reset,
                                                      disableReset,
                                                      flag2
                                                  }) => {

    return (
        <div className={s.counter__wrapper}>
            <Window value={value} disabled={disable} flag={flag} flag2={flag2}/>
            <Button callBack={inc} title={'inc'} disabled={disableInc}/>
            <Button callBack={reset} title={'reset'} disabled={disableReset}/>
        </div>
    );
};

export default Counter;