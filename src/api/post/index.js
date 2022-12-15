import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const getById = (id) => {
    return axios(POSTS_URL, {
        params: {
            id: id
        }
    });
};

export const postsAPI = {
    getById: getById
};