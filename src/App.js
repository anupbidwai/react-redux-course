import ListingPhotos from './axios/listing';
import GetPhoto from './axios/getting';
import PostingPhoto from './axios/posting';
import PatchingThumbnail from './axios/patching';
import DeletingPhoto from "./axios/deleting";

import Todo from './components/Todo/withStore';
import ReduxApp from './components/ReduxApp';
import "./style.css";

function App() {
  return <>
    {/* <ListingPhotos /> */}
    {/* <GetPhoto /> */}
    <PostingPhoto />
    {/* <PatchingThumbnail /> */}
    {/* <DeletingPhoto /> */}
    {/* <Todo /> */}
    {/* <ReduxApp /> */}
  </>
}

export default App;
