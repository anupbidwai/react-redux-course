import { useEffect, useState } from "react";
import { galleryAPI } from "../api/gallery";
import Thumbnail from "../components/Thumbnail";

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 16,
    padding: 24
};

// child component
const Gallery = (props) => {
    const [gallery, setGallery] = useState();

    const printPhoto = gallery?.map(item => item.albumId === 1
        ? <Thumbnail data={item} key={item.id} />
        : null
    );

    useEffect(() => {
        setGallery(props.data);
    }, [props.data]);

    return (
        gallery?.length > 0
            ? <div style={galleryStyle}>{printPhoto}</div>
            : "Loading ..."
    )
};

// parent component
const ListingThumbnails = () => {

    const [gallery, setGallery] = useState([]);

    // check api status and retun data
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

    // fetching all album items
    useEffect(() => {
        galleryAPI.fetchAll()
            .then(status)
            .then(data)
            .catch(err => console.log(err))
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Listing Thumbnails</h1>
            <Gallery data={gallery} />
        </div>
    )
};
export default ListingThumbnails;