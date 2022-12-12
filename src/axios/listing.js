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
            : 'Loading ...'
    )
};

// parent component
const ListingThumbnails = () => {
    const [gallery, setGallery] = useState([]);

    // fetching all album items
    useEffect(() => {
        galleryAPI.fetchAll()
            .then(res => setGallery(res.data))
            .catch(err => console.error("Error at ListingThumbnails => ", err))
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Listing Thumbnails</h1>
            <Gallery data={gallery} />
        </div>
    )
};
export default ListingThumbnails;