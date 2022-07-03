import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slice/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const text = useSelector((state) => state.counter.text);
    const heading = useSelector((state) => state.heading.value)
    const dispatch = useDispatch();
    return (
        <>
            <h1>{heading}</h1>
            <span>{count}</span>
            <p>{text}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </>
    )
}


export default Counter;