import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const fetchById = (id) => {
    return axios(POSTS_URL, {
        params: {
            id: id
        }
    });
};

export const postsAPI = {
    fetchById: fetchById
};