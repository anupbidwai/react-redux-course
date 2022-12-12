import { useEffect, useState, useRef } from 'react';
import { galleryAPI } from '../api/gallery';

const DeletingThumbnail = () => {
    const [albumIds, setAlbumIds] = useState();
    const [albums, setAlbums] = useState();
    const albumRef = useRef();
    const albumIdRef = useRef();

    const handleAlbumChange = async () => {
        try {
            if (albumRef.current.value === 'Select album ID') setAlbums([]);

            const res = await galleryAPI.filterByAlbumId(albumRef.current.value);

            const options = [];
            res.data?.map((album) => options.push(<option value={album.id} key={album.id}>{album.id}</option>));
            setAlbums([...options]);

        } catch (e) {
            console.log("DeletingThumbnail > handleAlbumChange => ", e)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (albumRef.current.value === 'Select album ID') throw new Error("Please select Album ID");

            const res = await galleryAPI.deletingThumnbnail({ album: albumRef.current.value, id: albumIdRef.current.value })
            console.log(res.data);

        } catch (e) {
            console.error("DeletingThumbnail > handleSubmit => ", e);
        }
    };

    useEffect(() => {
        // get all albums ID's
        try {
            galleryAPI.fetchAllAlbumsId()
                .then(ids => setAlbumIds(ids));
        } catch (e) {
            console.log("DeletingThumbnail > useEffect => ", e);
        }
    }, []);

    // all albums
    const albumsOption = albumIds?.map((aid) => <option value={aid} key={aid}>{aid}</option>);

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <select ref={albumRef} onChange={handleAlbumChange}>
                    <option>Select album ID</option>
                    {albumsOption}
                </select>
                {
                    albums?.length > 0
                    && <select ref={albumIdRef}>{albums}</select>
                }

                <button>Delete</button>
            </form>
        </div>
    )
};
export default DeletingThumbnail;