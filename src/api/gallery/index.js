import axios from "axios";

// API URL
export const GALLERY_URL = "https://jsonplaceholder.typicode.com/photos";

// get all data
const getAllPhotos = () => {
    return axios.get(GALLERY_URL);
};

// get specific data
const getById = (id) => {
    return axios.get(`${GALLERY_URL}/${id}`);
};

// get all albums ID's
const getAllAlbumsId = async () => {
    const set = new Set();
    const res = await axios(GALLERY_URL);
    res.data.forEach(item => set.add(item.albumId));
    return [...set];
};

// get data by album ID
const getByAlbumId = (albumId) => {
    return axios.get(GALLERY_URL, {
        params: {
            albumId: albumId
        }
    });
};

// posting new thumbnail
const postingPhoto = (item) => {
    return axios.post(GALLERY_URL, {
        ...item
    });
};

// patching existing thumbnail
const patchingPhoto = (item) => {
    const { id, ...body } = item;
    return axios.patch(`${GALLERY_URL}/${id}`, {
        ...body
    });
};

// delete existing thumbnail
const deletingPhoto = (item) => {
    const { album, id } = item;
    return axios.delete(GALLERY_URL, {
        params: {
            albumId: album,
            id: id
        }
    })
};

// public area
export const galleryAPI = {
    getAllPhotos: getAllPhotos,
    getById: getById,
    getAllAlbumsId: getAllAlbumsId,
    getByAlbumId: getByAlbumId,
    postingPhoto: postingPhoto,
    patchingPhoto: patchingPhoto,
    deletingPhoto: deletingPhoto
};
