import { useRef, useState } from 'react';
import { galleryAPI } from '../api/gallery';

const PatchingThumbnail = () => {
    const idRef = useRef();
    const titleRef = useRef();
    const [item, setItem] = useState({
        id: '1',
        title: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (value !== null) {
            setItem(prevState => {
                return {
                    ...prevState,
                    [name]: value
                }
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item) {
            galleryAPI.patchingThumbnail(item)
                .then(res => console.log(res.data));
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Updating Thumbnail</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type id" ref={idRef} onChange={handleChange} name="id" />
                <input type="text" placeholder="Type title" ref={titleRef} onChange={handleChange} name="title" />
                <button type="submit">Update</button>
            </form>
        </div>
    )
};
export default PatchingThumbnail;