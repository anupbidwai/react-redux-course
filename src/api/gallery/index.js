// API URL
export const GALLERY_URL = "https://jsonplaceholder.typicode.com/photos";

// get all data
const fetchAll = () => {
    return fetch(GALLERY_URL);
};

// get specific data
const fetchById = (id) => {
    return fetch(`${GALLERY_URL}/${id}`);
};

// get all albums ID's
const getAllAlbumsId = async () => {
    const set = new Set();
    const res = await fetch(GALLERY_URL);
    const data = await res.json();

    data.forEach(item => set.add(item.albumId));
    return [...set];
};

// get data by album ID
const filterByAlbumId = (albumId) => {
    return fetch(`${GALLERY_URL}?albumId=${albumId}`);
};

// posting new thumbnail
const postingThumbnail = (item) => {
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

// patching existing thumbnail
const patchingThumbnail = (item) => {
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
};

// delete existing thumbnail
const deletingThumnbnail = (item) => {
    const { album, id } = item;
    const option = {
        method: 'DELETE',
    }
    return fetch(`${GALLERY_URL}?albumId=${album}&id=${id}`, option)
};

// public area
export const galleryAPI = {
    fetchAll: fetchAll,
    fetchById: fetchById,
    getAllAlbumsId: getAllAlbumsId,
    filterByAlbumId: filterByAlbumId,
    postingThumbnail: postingThumbnail,
    patchingThumbnail: patchingThumbnail,
    deletingThumnbnail: deletingThumnbnail
};
