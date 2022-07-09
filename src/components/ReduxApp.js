import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/slice/postsSlice";
import { fetchUsers } from "../redux/slice/usersSlice";

const Status = (props) => {
    const status = props.loading === true ? 'loading...' : (props.errorMessage ? props.errorMessage : null)
    return <p style={{ color: props.errorMessage ? 'red' : '' }}>{status}</p>
};

const ReduxApp = () => {
    const dispatch = useDispatch();
    const usersState = useSelector(state => state.users);
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
        <>
            {/* user API */}
            <fieldset>
                <legend>all users</legend>
                <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
                {
                    usersState.loading === true && <Status loading={usersState.loading} />
                }
                {
                    usersState.records?.length > 0 &&
                    <ul>
                        {
                            usersState.records.map(u => (
                                <li key={u.id}>{u.name}</li>
                            ))
                        }
                    </ul>
                }
                {
                    usersState.error !== null && <Status errorMessage={usersState.error.message} />
                }

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