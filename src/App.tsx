import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import background from './assets/img/OCEAN.jpg';
import {Counter, Settings} from "./components";

function App() {

    const [start, setStart] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(max);
    const [value, setValue] = useState<number>(startValue);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        let svAsString = localStorage.getItem('startValue');
        let mvAsString = localStorage.getItem('maxValue');
        if (svAsString && mvAsString) {
            setStart(JSON.parse(svAsString));
            setMax(JSON.parse(mvAsString));
            setStartValue(JSON.parse(svAsString));
            setMaxValue(JSON.parse(mvAsString));
            setValue(JSON.parse(svAsString));
        }

    }, [])

    const inc = () => {
        setValue(value + 1);
    }
    const reset = () => {
        setValue(startValue);
    }
    const set = () => {
        setStartValue(start);
        setMaxValue(max);
        setValue(start);
        setFlag(false);
        localStorage.setItem('startValue', JSON.stringify(start));
        localStorage.setItem('maxValue', JSON.stringify(max));
    }

    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value));
        setFlag(true);
    }
    const onStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value));
        setFlag(true);
    }

    const disable = value === maxValue ? true : false;
    const disableSet = start >= max || start < 0 || !flag ? true : false;
    const disableInc = value === maxValue || start >= max || start < 0 === true || flag ? true : false;
    const disableReset = start >= max || start < 0 || flag ? true : false;
    const flag2 = start >= max || start < 0 ? true : false;

    return (
        <div className="App" style={{
            backgroundImage: `url(${background})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'
        }}>
            <div className={'App__wrapper'}>
                <Settings
                    max={max}
                    start={start}
                    onMaxChangeHandler={onMaxChangeHandler}
                    onStartChangeHandler={onStartChangeHandler}
                    set={set}
                    disableSet={disableSet}
                    flag2={flag2}
                />
                <Counter
                    value={value}
                    disable={disable}
                    inc={inc}
                    disableInc={disableInc}
                    disableReset={disableReset}
                    reset={reset}
                    flag={flag}
                    flag2={flag2}
                />
            </div>
        </div>
    );
}

export default App;
