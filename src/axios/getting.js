import { useRef, useState } from "react";
import { galleryAPI } from "../api/gallery";
import Photo from '../components/Photo';

const GetPhoto = () => {
    const inputRef = useRef();
    const [result, setResult] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const thumnbnaiId = inputRef.current.value;
            if (!thumnbnaiId) throw new Error("Please provide id");

            galleryAPI.getById(thumnbnaiId)
                .then(res => setResult(res.data));

        } catch (e) {
            console.error("Error at GetPhoto =>", e)
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Get Photo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type id" ref={inputRef} />
                <button type="submit">Get photo</button>
            </form>
            {result && <Photo data={result} />}
        </div>
    )
};
export default GetPhoto;