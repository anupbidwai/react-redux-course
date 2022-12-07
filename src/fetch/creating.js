import { useEffect, useState } from "react";
import { galleryAPI } from "../api/gallery";
import Photo from "../components/Photo";

const Create = () => {
    const [photo, setPhoto] = useState();
    useEffect(() => {
        const item = {
            albumId: 1,
            thumbnailUrl: "https://via.placeholder.com/150/810b14",
            title: 'test-thubmnail',
            url: "https://via.placeholder.com/600/810b14"
        }
        galleryAPI.createThumbnail(item)
            .then(res => res.json())
            .then(data => setPhoto(data))
    }, []);

    return photo
        ? <Photo photo={photo} />
        : "Creating..."

};
export default Create;