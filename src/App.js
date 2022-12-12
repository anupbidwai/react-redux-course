import ListingThumbnails from './axios/listing';
import GettingThumbnail from './axios/getting';
import PostingThumbnail from './axios/posting';
import PatchingThumbnail from './axios/patching';
import DeletingThumbnail from "./axios/deleting";

import "./style.css";
import ReduxApp from './components/ReduxApp';

function App() {
  return <>
    {/* <ListingThumbnails />
    <GettingThumbnail />
    <PostingThumbnail />
    <PatchingThumbnail />
    <DeletingThumbnail /> */}
    <ReduxApp />
  </>
}

export default App;
