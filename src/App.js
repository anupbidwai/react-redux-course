import './App.css';
import { ThemeContext, themes } from './context/theme_context';
import { useState } from 'react';
import { Button } from './components/Elements';
import ErrorBoundary from './error-boundries';
import BuggyCounter from './error-boundries/BuggyCounter';
import MouseTracker from './render-props';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === themes.light ? themes.dark : themes.light
    });
  };
  return (
    <>
      {/* context */}
      <fieldset>
        <legend>Context</legend>
        <ThemeContext.Provider value={theme}>
          <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Button type="button" label="toggle button" onClick={toggleTheme}>toggle button</Button>
            <h1>Heading 1</h1>
          </div>
        </ThemeContext.Provider>
      </fieldset>
      {/* error boundry */}
      <fieldset>
        <legend>Errorboundry</legend>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </fieldset>
      <fieldset>
        <legend>Render props</legend>
        <MouseTracker />
      </fieldset>
    </>
  );
}

export default App;
