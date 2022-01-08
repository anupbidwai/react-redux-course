import React from 'react';

export const themes = {
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
    dark: {
        backgroundColor: 'black',
        color: 'white'
    }
}

export const ThemeContext = React.createContext(
    themes.light // default value
);

// The defaultValue argument is only used when a component does not have a matching PROVIDER above it in the tree.
// This default value can be helpful for testing components in isolation without wrapping them.
// Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.


