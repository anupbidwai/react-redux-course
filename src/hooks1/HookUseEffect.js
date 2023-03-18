import { useState, useEffect, useMemo } from "react";

const HookUseEffect = () => {

    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(true);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    useEffect(() => {
        console.log('in effect')
    }, [dark]);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setDark(prevTheme => !prevTheme)} style={{ ...theme }}>toggle theme</button>
            <button onClick={() => setCount(prevCount => ++prevCount)}>update counter</button>
        </>
    )
}
export default HookUseEffect;