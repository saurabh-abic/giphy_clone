import React, {useState, useCallback, useEffect, useRef} from 'react';
import './styles/styles.scss'; 
import Header from './app/header/Header';
import Dashboard from './app/Dashboard';
import { useScroll } from './app/utils/utils';
import ThemeContext from './context/Context';

function App() {
  const {loading, handleChange, loader, list} = useScroll();
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className="app" style = {{backgroundColor: theme === 'dark' ? "#000" : "#fff"}}>
            <Header handleChange = {handleChange}/>
            <Dashboard ref = {loader} loading = {loading} list = {list}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
