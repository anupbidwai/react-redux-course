import ListingPhotos from './axios/listing';
import GetPhoto from './axios/getting';
import PostingPhoto from './axios/posting';
import PatchingThumbnail from './axios/patching';
import DeletingPhoto from "./axios/deleting";

import "./style.css";
import Todo from './components/Todo/withStore';

function App() {
  return <>
    {/* <ListingPhotos /> */}
    {/* <GetPhoto /> */}
    {/* <PostingPhoto /> */}
    {/* <PatchingThumbnail /> */}
    <DeletingPhoto />
    {/* <Todo /> */}
  </>
}

export default App;
