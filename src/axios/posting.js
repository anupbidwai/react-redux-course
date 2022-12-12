import { useEffect, useRef, useState } from "react";
import { galleryAPI } from "../api/gallery";
import Thumbnail from "../components/Thumbnail";

const PostingThumbnail = () => {
    const thumbnailUrlRef = useRef();
    const titleRef = useRef();
    const alubmnIdRef = useRef();

    const [photo, setPhoto] = useState();
    const [alumbs, setAlbums] = useState();

    const alumbmIdOptions = alumbs
        && alumbs.map(id => <option value={id} key={id}>{id}</option>);

    const handleSubmit = (event) => {
        event.preventDefault();

        // new item for album
        const item = {
            albumId: alubmnIdRef.current.value,
            thumbnailUrl: thumbnailUrlRef.current.value,
            title: titleRef.current.value,
            url: "https://via.placeholder.com/600/810b14"
        }

        try {
            galleryAPI.postingThumbnail(item)
                .then(res => setPhoto(res.data))
        } catch (e) {
            console.log("PostingThumbnail > handleSubmit => ", e)
        }
    }

    useEffect(() => {
        // get all albums ids
        try {
            galleryAPI.fetchAllAlbumsId()
                .then(ids => setAlbums(ids));
        } catch (e) {
            console.log("PostingThumbnail > useEffect =>", e)
        }
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            {
                alumbs ? (
                    <>
                        <h1>Create Thumbnail</h1>
                        <form onSubmit={handleSubmit}>
                            <select ref={alubmnIdRef}>
                                <option>Select album</option>
                                {alumbmIdOptions}
                            </select>
                            <input type="text" placeholder="Thumbnail URL" ref={thumbnailUrlRef} />
                            <input type="text" placeholder="Title" ref={titleRef} />
                            <button type="sbumit">create</button>
                        </form>
                    </>
                ) : "Loading..."
            }
            {
                photo && <Thumbnail data={photo} />
            }
        </div>
    )
};
export default PostingThumbnail;