import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slice/counterSlice";
import { fetchUsers } from "../redux/slice/empSlice";

const ReduxApp = () => {
    const dispatch = useDispatch();
    const empState = useSelector(state => state.emp);
    const counterState = useSelector(state => state.counter);

    return (
        <>
            <span>{counterState.value}</span>
            <p>{counterState.text}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
            {
                empState.loading === true ? <p>loading...</p> : null
            }
            {
                empState.users?.length > 0 &&
                <ul>
                    {
                        empState.users.map(u => (
                            <li key={u.id}>{u.name}</li>
                        ))
                    }
                </ul>
            }
            {
                empState.error ? <p>{empState.error.message}</p> : null
            }
        </>
    )
}

export default ReduxApp;