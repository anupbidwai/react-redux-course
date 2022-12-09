const thumbnailStyle = {
    margin: 0,
    padding: 24,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: 10
}

const Thumbnail = (props) => {
    const { data } = props;
    return (
        <figure style={thumbnailStyle}>
            <h1>{data.title}</h1>
            <img src={data.thumbnailUrl} alt={data.title} width="150" height="150" />
            <figcaption>{data.id}</figcaption>
        </figure>
    )
};

export default Thumbnail;