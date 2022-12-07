const GALLERY_URL = "https://jsonplaceholder.typicode.com/photos";

const fetchById = (id) => {
    return fetch(`${GALLERY_URL}/${id}`);
};

const createThumbnail = (item) => {
    return fetch(`${GALLERY_URL}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            ...item
        })
    })
};

export const galleryAPI = {
    fetchById: fetchById,
    createThumbnail: createThumbnail
};
