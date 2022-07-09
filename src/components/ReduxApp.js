import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slice/counterSlice";
import { fetchUsers } from "../redux/slice/recordSlice";

const ReduxApp = () => {
    const dispatch = useDispatch();
    const recordState = useSelector(state => state.record);
    const counterState = useSelector(state => state.counter);

    return (
        <>
            <span>{counterState.value}</span>
            <p>{counterState.text}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
            {
                recordState.loading === true ? <p>loading...</p> : null
            }
            {
                recordState.users?.length > 0 &&
                <ul>
                    {
                        recordState.users.map(u => (
                            <li key={u.id}>{u.name}</li>
                        ))
                    }
                </ul>
            }
            {
                recordState.error ? <p>{recordState.error.message}</p> : null
            }
        </>
    )
}

export default ReduxApp;