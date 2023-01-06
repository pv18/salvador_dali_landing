import React, {useEffect, useRef, useState} from 'react';
import sun from './sun.svg';
import moon from './moon.svg';

export const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState)
    }

    const btnNormal = 'dark-mode-btn'
    const btnActive = 'dark-mode-btn dark-mode-btn--active'

    return (
        <button className={darkMode ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

