import React, {ChangeEvent, useState} from 'react';
import s from './styles.module.css';
import {Button, SettingsWindow,} from "../index";

interface SettingsPropsInterface {
    max:number,
    start:number,
    onMaxChangeHandler: (e: ChangeEvent<HTMLInputElement>)=>void,
    onStartChangeHandler: (e: ChangeEvent<HTMLInputElement>)=>void,
    set:()=>void,
    disableSet:boolean,
    flag2:boolean
}

const Settings: React.FC<SettingsPropsInterface> = ({max,start,onStartChangeHandler,onMaxChangeHandler,set,disableSet,flag2}) => {


    return (
        <div className={s.settings__wrapper}>
            <SettingsWindow max={max} start={start} onStartChangeHandler={onStartChangeHandler} onMaxChangeHandler={onMaxChangeHandler} flag2={flag2}/>
            <Button callBack={set} title={'set'} disabled={disableSet}/>
        </div>
    );
};

export default Settings;