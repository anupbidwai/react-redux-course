export const GALLERY_URL = "https://jsonplaceholder.typicode.com/photos";

const fetchAll = () => {
    return fetch(GALLERY_URL);
};

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

const updateThumbnail = (item) => {
    const { id, ...body } = item;
    const option = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            ...body
        })
    }
    return fetch(`${GALLERY_URL}/${id}`, option);
}

export const galleryAPI = {
    fetchAll: fetchAll,
    fetchById: fetchById,
    createThumbnail: createThumbnail,
    updateThumbnail: updateThumbnail
};
