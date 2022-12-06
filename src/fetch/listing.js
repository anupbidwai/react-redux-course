import { useEffect, useState } from "react";

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 16,
    padding: 24
};

const thumbnailStyle = {
    margin: 0,
    padding: 24,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: 10
}

const Thumbnail = (props) => {
    const { thumbnail } = props;
    return (
        <figure style={thumbnailStyle}>
            <h1>{thumbnail.title}</h1>
            <img src={thumbnail.thumbnailUrl} alt={thumbnail.title} />
            <figcaption>{thumbnail.id}</figcaption>
        </figure>
    )
};
const Gallery = (props) => {
    const [gallery, setGallery] = useState();

    const printThumbnail = () => gallery.map(item => {
        return item.albumId === 1
            && <Thumbnail thumbnail={item} key={item.id} />
    });

    useEffect(() => {
        setGallery(props.data);
    }, [props.data]);

    return (
        gallery?.length > 0
            ? <div style={galleryStyle}>{printThumbnail()}</div>
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
                throw response.status;
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
        fetch("https://jsonplaceholder.typicode.com/photos", options)
            .then(status)
            .then(data)
            .catch(err => console.log(err))
    }, []);

    return <Gallery data={gallery} />
};
export default ListingGallery;