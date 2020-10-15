//import React ,{useState}from 'react';
import React, { useEffect } from "react";
import Routes from './router';
import { GlobalStyles } from "./components/tema/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/tema/Themes";
import Switch from 'react-switch'
import './styles.css'


const useStateWithLocalStorage = (localStorageKey) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem(localStorageKey) || "light"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, theme);
  }, [theme]);

  return [theme, setTheme];
};

export default function App() {
  const [theme, setTheme] = useStateWithLocalStorage("@Theme");

  const themeToggler = () => {
    
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.clear();
    localStorage.setItem("@Theme", theme);

  };

  return (
  
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <>
        <GlobalStyles />
        <div className="App">
             <div class="switch__container"  title="Modo Dark">
                <input
                  checked={theme === "dark" ? true : false}
                  id="switch-shadow"
                  class="switch switch--shadow"
                  type="checkbox"
                  onChange={themeToggler}
                />
                <label for="switch-shadow"></label>
              </div>
          <Routes /> 
        </div>
      </>
    </ThemeProvider>
    

  );
}


