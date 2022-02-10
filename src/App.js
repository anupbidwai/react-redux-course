import './App.css';
import { ThemeContext, themes } from './context/theme_context';
import { useState } from 'react';
import { Button } from './components/Elements';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === themes.light ? themes.dark : themes.light
    });
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <Button type="button" label="toggle button" onClick={toggleTheme}>toggle button</Button>
        <h1>Heading 1</h1>
        <Button type="button" label="dummy">dummy</Button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
