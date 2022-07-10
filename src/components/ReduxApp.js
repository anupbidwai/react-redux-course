import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/slice/postsSlice";

const Status = (props) => {
    const status = props.loading === true ? 'loading...' : (props.errorMessage ? props.errorMessage : null)
    return <p style={{ color: props.errorMessage ? 'red' : '' }}>{status}</p>
};

const ReduxApp = () => {
    const dispatch = useDispatch();
    const postsState = useSelector(state => state.posts);
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
        <fieldset>
            {/* posts API */}
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
        </fieldset >
    )
}

export default ReduxApp;