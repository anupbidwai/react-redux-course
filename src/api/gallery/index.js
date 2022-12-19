import axios from "axios";


// API URL
export const apiURL = "https://jsonplaceholder.typicode.com/photos";

// get all data
const getAllPhotos = () => {
    return axios.get(apiURL);
};

// get specific data
const getById = (id) => {
    return axios.get(`${apiURL}/${id}`);
};

// get all albums ID's
const getAllAlbumsId = async () => {
    const set = new Set();
    const res = await axios(apiURL);
    res.data.forEach(item => set.add(item.albumId));
    return [...set];
};

// get data by album ID
const getByAlbumId = (albumId) => {
    return axios.get(apiURL, {
        params: {
            albumId: albumId
        }
    });
};

// posting new thumbnail
const postingPhoto = (item) => {
    return axios.post(apiURL, {
        ...item
    }).then(res => {
        console.log(res.data)
        return res;
    });
};

// patching existing thumbnail
const patchingPhoto = (item) => {
    const { id, ...body } = item;
    return axios.patch(`${apiURL}/${id}`, {
        ...body
    });
};

// delete existing thumbnail
const deletingPhoto = (item) => {
    const { album, id } = item;
    return axios.delete(apiURL, {
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
