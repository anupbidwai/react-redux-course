const url = "https://jsonplaceholder.typicode.com/posts";

const fetchById = (id) => {
    return fetch(`${url}?id=${id}`);
};

export const postsAPI = {
    fetchById: fetchById
};