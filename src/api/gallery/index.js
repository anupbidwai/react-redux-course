import axios from "axios";

// API URL
export const GALLERY_URL = "https://jsonplaceholder.typicode.com/photos";

// get all data
const fetchAll = () => {
    return axios.get(GALLERY_URL);
};

// get specific data
const fetchById = (id) => {
    return axios.get(`${GALLERY_URL}/${id}`);
};

// get all albums ID's
const fetchAllAlbumsId = async () => {
    const set = new Set();
    const res = await axios(GALLERY_URL);
    res.data.forEach(item => set.add(item.albumId));
    return [...set];
};

// get data by album ID
const filterByAlbumId = (albumId) => {
    return axios.get(GALLERY_URL, {
        params: {
            albumId: albumId
        }
    });
};

// posting new thumbnail
const postingThumbnail = (item) => {
    return axios.post(GALLERY_URL, {
        ...item
    });
};

// patching existing thumbnail
const patchingThumbnail = (item) => {
    const { id, ...body } = item;
    return axios.patch(`${GALLERY_URL}/${id}`, {
        ...body
    });
};

// delete existing thumbnail
const deletingThumnbnail = (item) => {
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
    fetchAll: fetchAll,
    fetchById: fetchById,
    fetchAllAlbumsId: fetchAllAlbumsId,
    filterByAlbumId: filterByAlbumId,
    postingThumbnail: postingThumbnail,
    patchingThumbnail: patchingThumbnail,
    deletingThumnbnail: deletingThumnbnail
};
