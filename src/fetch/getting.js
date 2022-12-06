import { useEffect, useState } from "react";

const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 16
};

const thumbnailStyle = {
    margin: 0,
    padding: 24,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
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

    useEffect(() => {
        setGallery(props.data);
    }, [props.data]);

    const printThumbnail = () => gallery.map(item => {
        return item.albumId === 1
            && <Thumbnail thumbnail={item} key={item.id} />
    });

    return (
        gallery?.length > 0
            ? <div style={galleryStyle}>{printThumbnail()}</div>
            : "Loading ..."
    )
};

const GetResource = () => {

    const [gallery, setGallery] = useState([]);

    const status = (response) => {
        if (response.ok) {
            return response.json();
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
export default GetResource;