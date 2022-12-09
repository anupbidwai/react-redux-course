import { useRef, useState } from "react";
import { galleryAPI } from "../api/gallery";
import Photo from '../components/Photo';

const GettingThumbnail = () => {
    const inputRef = useRef();
    const [result, setResult] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const thumnbnaiId = inputRef.current.value;
            if (!thumnbnaiId) throw new Error("Please provide id");
            let res = await galleryAPI.fetchById(thumnbnaiId);
            if (res.ok) {
                let data = await res.json()
                console.log(data)
                setResult(data);
            } else {
                throw new Error("Something went wromg !!!");
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Fetching Thumbnail</h1>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <input type="text" placeholder="Type id" ref={inputRef} />
                <button type="submit">fetch thumbnail</button>
            </form>
            {result && <Photo photo={result} />}
        </>
    )
};
export default GettingThumbnail;