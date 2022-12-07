const photoStyle = {
    margin: 0,
    padding: 24,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: 10
}

const Photo = (props) => {
    const { photo } = props;
    return (
        <figure style={photoStyle}>
            <h1>{photo.title}</h1>
            <img src={photo.url} alt={photo.title} width="150" height="150" />
            <figcaption>{photo.id}</figcaption>
        </figure>
    )
};

export default Photo;