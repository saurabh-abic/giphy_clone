import React, {useContext} from 'react';
import ToggleTheme from './ToggleTheme';
import ThemeContext from '../../context/Context';
import SearchBar from './SearchBar';
import '../../styles/styles.scss';

const Logo = ()=>{
    const { theme } = useContext(ThemeContext);
    return (
        <div className = "logo" style = {{color: theme === "dark" ? "#fff" : "#000"}}>
            Giphy
        </div>
    )
}

const Header = ({handleChange})=>{
    return(
        <header className="appHeader">
            <div className = "searchBarWrapper">
                <Logo/>
                <SearchBar handleChange = {handleChange}/>
                <div className = "toggleTheme">
                    <ToggleTheme/>
                </div>
            </div>
        </header>
    )
}

export default Header;