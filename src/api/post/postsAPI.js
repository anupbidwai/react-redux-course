const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";


const fetchById = (id) => {
    return fetch(`${POSTS_URL}?id=${id}`);
};

export const postsAPI = {
    fetchById: fetchById
};