import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slice/counterSlice";
import { fetchUsers } from "../redux/slice/userSlice";

const ReduxApp = () => {
    const dispatch = useDispatch();

    const userState = useSelector(state => state.user);
    const counterState = useSelector(state => state.counter)

    return (
        <>
            <span>{counterState.value}</span>
            <p>{counterState.text}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
            {
                userState.loading === true ? <p>loading...</p> : null
            }
            {
                userState.users?.length > 0 &&
                <ul>
                    {
                        userState.users.map(u => (
                            <li key={u.id}>{u.name}</li>
                        ))
                    }
                </ul>
            }
            {
                userState.error ? <p>{userState.error.message}</p> : null
            }
        </>
    )
}

export default ReduxApp;