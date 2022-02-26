// https://reactjs.org/docs/error-boundaries.html
/**
* Note: Error boundaries do not catch errors for:
* 1. Event handlers (learn more)
* 2. Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
* 3. Server side rendering
* 4. Errors thrown in the error boundary itself (rather than its children)
*/


/*
* A class component becomes an error boundary
* if it defines either (or both) of the lifecycle methods
* static getDerivedStateFromError() or componentDidCatch().
* Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown.
* Use componentDidCatch() to log error information.
*/

import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

