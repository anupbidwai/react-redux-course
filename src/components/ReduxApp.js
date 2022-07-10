import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/slice/arithmaticSlice";
import { fetchPosts } from "../redux/slice/postsSlice";

const Status = (props) => {
    const status = props.loading === true ? 'loading...' : (props.errorMessage ? props.errorMessage : null)
    return <p style={{ color: props.errorMessage ? 'red' : '' }}>{status}</p>
};

const ReduxApp = () => {
    const dispatch = useDispatch();
    const postsState = useSelector(state => state.posts);
    const arithmaticState = useSelector(state => state.arithmatic);
    const [postId, setPostId] = useState("");

    const handlePostIDInput = (event) => {
        const target = event.target;
        const postId = target.value;
        setPostId(postId);
    };

    const handleFetchPost = () => {
        dispatch(fetchPosts(postId));
    };

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
                <input
                    type="text"
                    placeholder="type post id"
                    value={postId}
                    onChange={handlePostIDInput}
                />
                <button onClick={handleFetchPost}>fetch post</button>
                {
                    postsState.loading === true && <Status loading={postsState.loading} />
                }
                {
                    postsState.records?.length > 0 &&
                    postsState.records.map(post => (
                        <React.Fragment key={post.id}>
                            <p>Post id: {post.id}</p>
                            <p>Post body: {post.body}</p>
                        </React.Fragment>
                    ))
                }
                {
                    postsState.error !== null && <Status errorMessage={postsState.error.message} />
                }
            </fieldset>
        </>
    )
}

export default ReduxApp;