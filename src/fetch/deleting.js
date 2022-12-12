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
            const data = await res.json();

            const options = [];
            data?.map((album) => options.push(<option value={album.id} key={album.id}>{album.id}</option>));
            setAlbums([...options]);

        } catch (e) {
            console.log(e)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (albumRef.current.value === 'Select album ID') throw new Error("Please select Album ID");

            const res = await galleryAPI.deletingThumnbnail({ album: albumRef.current.value, id: albumIdRef.current.value })
            const data = await res.json();
            console.log(data);

        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        // get all albums ID's
        galleryAPI.getAllAlbumsId()
            .then(data => setAlbumIds(data));
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