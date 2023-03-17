import { useEffect, useState } from "react";

const Practice = () => {
    const [count, setCount] = useState(0);

    const msgs = ['GM', 'GN'];

    useEffect(() => {

        let intervalCnt = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalCnt);

    }, []);

    const greetMe = msg => console.log(msg);


    return (
        <>
            {
                msgs.map(item => (
                    <button key={item} onClick={() => greetMe(item)}>click me</button>
                ))

            }
        </>
    )
}
export default Practice;