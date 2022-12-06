const GALLERY_URL = "https://jsonplaceholder.typicode.com/photos";

const fetchById = (id) => {
    return fetch(`${GALLERY_URL}/${id}`);
};

export const galleryAPI = {
    fetchById: fetchById
};
