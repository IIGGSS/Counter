import React, {ChangeEvent} from 'react';
import s from './styles.module.css';


interface SettingsWindowPropsInterface {
    max: number,
    start: number,
    onMaxChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onStartChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    flag2: boolean
}

const SettingsWindow: React.FC<SettingsWindowPropsInterface> = ({
                                                                    max,
                                                                    start,
                                                                    onMaxChangeHandler,
                                                                    onStartChangeHandler,
                                                                    flag2
                                                                }) => {

    const error = flag2 ? s.error : '';
    return (
        <div className={s.settingsWindow__wrapper}>
            <div className={s.settingsWindow__row}>
                <span>enter the maximum value</span>
                <input className={`${s.input} ${error}`} value={max} onChange={onMaxChangeHandler} type="number"/>
            </div>
            <div className={s.settingsWindow__row}>
                <span>Enter start value</span>
                <input className={`${s.input} ${error}`} value={start} onChange={onStartChangeHandler} type="number"/>
            </div>
        </div>
    );
};

export default SettingsWindow;