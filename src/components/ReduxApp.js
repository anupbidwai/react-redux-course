import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/slice/arithmaticSlice";
import { fetchPosts, greetMe } from "../redux/slice/postsSlice";

const Status = (props) => {
    const status = props.loading === true ? 'loading...' : (props.errorMessage ? props.errorMessage : null)
    return <p style={{ color: props.errorMessage ? 'red' : '' }}>{status}</p>
};

const ReduxApp = () => {

    const [records, setRecords] = useState();
    const [postId, setPostId] = useState("");

    const dispatch = useDispatch();
    const postsState = useSelector(state => state.posts);
    const arithmaticState = useSelector(state => state.arithmatic);

    const handlePostIDInput = (event) => {
        const target = event.target;
        const postId = target.value;
        setPostId(postId);
    };

    const handleFetchPost = (event) => {
        event.preventDefault();
        dispatch(fetchPosts(postId));
    };

    useEffect(() => {
        setRecords(postsState.records);
    }, [postsState.records])


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
                        value={postId}
                        onChange={handlePostIDInput}
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
                <button onClick={() => dispatch(greetMe('good afternoon, Anup'))}>show greeting</button>
                {postsState.greetingMsg ? <p>{postsState.greetingMsg}</p> : null}
            </fieldset>
        </>
    )
}

export default ReduxApp;