// https://reactjs.org/docs/context.html#reactcreatecontext
import React, { useState } from 'react';
import Page from './Page';
import { Button } from '../components/Elements';
import { ThemeContext, themes } from './theme_context';


function ContextExample() {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        let currentTheme = theme;
        currentTheme = currentTheme === themes.light ? themes.dark : themes.light;
        setTheme(currentTheme);
    };
    return (
        <Page>
            <ThemeContext.Provider value={theme}>
                <Button value="toggle_theme" type="button" onClick={toggleTheme}>Toggle theme</Button>
            </ThemeContext.Provider>
        </Page>

    )
}

export default ContextExample;