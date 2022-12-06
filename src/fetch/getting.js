import { useRef } from "react";
import { galleryAPI } from "../api/gallery";

const GettingThumbnail = () => {
    const inputRef = useRef();
    const fetchThumbnail = async () => {
        const thumnbnaiId = inputRef.current.value;
        const res = await galleryAPI.fetchById(thumnbnaiId);
        const result = await res.json();
        console.log(result);
    };
    return (
        <>
            <input type="text" placeholder="Type id" ref={inputRef} />
            <button onClick={fetchThumbnail}>fetch thumbnail</button>
        </>
    )
};
export default GettingThumbnail;