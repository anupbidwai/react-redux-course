import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {

    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(true);

    const theme = useMemo(() => ({
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }), [dark]);

    useEffect(() => {
        console.log('in effect')
    }, [theme]);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setDark(prevTheme => !prevTheme)} style={{ ...theme }}>toggle theme</button>
            <button onClick={() => setCount(prevCount => ++prevCount)}>update counter</button>
        </>
    )
}
export default HookUseMemo;