import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slice/counterSlice";
import { fetchUsers } from "../redux/slice/usersSlice";

const ReduxApp = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const counterState = useSelector(state => state.counter);

    return (
        <>
            <span>{counterState.value}</span>
            <p>{counterState.text}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
            {
                users.loading === true ? <p>loading...</p> : null
            }
            {
                users.records?.length > 0 &&
                <ul>
                    {
                        users.records.map(u => (
                            <li key={u.id}>{u.name}</li>
                        ))
                    }
                </ul>
            }
            {
                users.error ? <p>{users.error.message}</p> : null
            }
        </>
    )
}

export default ReduxApp;