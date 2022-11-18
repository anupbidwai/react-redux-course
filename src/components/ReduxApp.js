import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/slice/arithmaticSlice";
import { fetchPosts, postActions } from "../redux/slice/postsSlice";

const Status = (props) => {
    const status = props.loading === true ? 'loading...' : (props.errorMessage ? props.errorMessage : null)
    return <p style={{ color: props.errorMessage ? 'red' : '' }}>{status}</p>
};

const ReduxApp = () => {
    const [records, setRecords] = useState();
    const inputRef = useRef();
    const postsState = useSelector(state => state.posts);
    const arithmaticState = useSelector(state => state.arithmatic);
    const dispatch = useDispatch();

    const handleFetchPost = (event) => {
        event.preventDefault();
        const postId = inputRef.current.value;
        dispatch(fetchPosts(postId));
    };

    useEffect(() => {
        setRecords(postsState.records);
    }, [postsState.records])

    useEffect(() => console.log('mounted'))

    return (
        <>
            {/* arithmatic operations */}
            <fieldset>
                <button onClick={() => dispatch(add({ a: 10, b: 20 }))}>add</button>
                <p>{arithmaticState.addResult}</p>
            </fieldset>
            {/* posts API */}
            <fieldset>
                <legend>posts</legend>
                <form>
                    <input
                        type="text"
                        placeholder="type post id"
                        ref={inputRef}
                    />
                    <button type="submit" onClick={handleFetchPost}>fetch post</button>
                </form>
                {
                    postsState.loading === true && <Status loading={postsState.loading} />
                }
                {
                    records?.length > 0 &&
                    records.map(post => (
                        <React.Fragment key={post.id}>
                            <p>Post id: {post.id}</p>
                            <p>Post body: {post.body}</p>
                        </React.Fragment>
                    ))
                }
                {
                    postsState.error !== null && <Status errorMessage={postsState.error.message} />
                }
                {
                    records?.length === 0 && <Status errorMessage="record does not exist" />
                }
                <button onClick={() => dispatch(postActions.greetMe(new Date().getHours() >= 12 ? 'Good afternoon' : 'Good moring'))}>show greeting</button>
                {postsState.greetingMsg ? <p>{postsState.greetingMsg}</p> : null}
            </fieldset>
        </>
    )
}

export default ReduxApp;