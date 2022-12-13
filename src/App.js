import ListingThumbnails from './axios/listing';
import GettingThumbnail from './axios/getting';
import PostingThumbnail from './axios/posting';
import PatchingThumbnail from './axios/patching';
import DeletingThumbnail from "./axios/deleting";

import "./style.css";
import Todo from './components/Todo/withStore';

function App() {
  return <>
    {/* <ListingThumbnails />
    <GettingThumbnail />
    <PostingThumbnail />
    <PatchingThumbnail />
    <DeletingThumbnail /> */}
    <Todo />
  </>
}

export default App;
