import { useEffect, useState } from "react";
import { GALLERY_URL } from "../api/gallery";
import Photo from "../components/Photo";

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 16,
    padding: 24
};

const Gallery = (props) => {
    const [gallery, setGallery] = useState();

    const printPhoto = () => gallery.map(item => {
        return item.albumId === 1
            && <Photo photo={item} key={item.id} />
    });

    useEffect(() => {
        setGallery(props.data);
    }, [props.data]);

    return (
        gallery?.length > 0
            ? <div style={galleryStyle}>{printPhoto()}</div>
            : "Loading ..."
    )
};

const ListingGallery = () => {

    const [gallery, setGallery] = useState([]);

    const status = (response) => {
        try {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch (e) {
            console.error(e)
        }
    };

    const data = (result) => {
        setGallery(result);
    };

    useEffect(() => {
        const options = {
            method: 'GET'
        }
        fetch(GALLERY_URL, options)
            .then(status)
            .then(data)
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Listing Thumbnails</h1>
            <Gallery data={gallery} />
        </>
    )
};
export default ListingGallery;