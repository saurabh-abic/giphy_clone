import React, {useContext} from 'react';
import ThemeContext from '../../context/Context';
import '../../styles/styles.scss';


const ToggleTheme = () =>{
    const { theme, setTheme } = useContext(ThemeContext);
    const toggle = theme == "dark"; 

    const triggerToggle = () => {
        setTheme(theme == "dark" ? "light" : "dark")
    }

    return (
        <div onClick={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span>🌜</span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span>🌞</span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>   
    )
}

export default ToggleTheme;