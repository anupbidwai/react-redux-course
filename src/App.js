import ListingPhotos from './axios/listing';
import GetPhoto from './axios/getting';
import PostingPhoto from './axios/posting';
import PatchingThumbnail from './axios/patching';
import DeletingPhoto from "./axios/deleting";

import Todo from './components/Todo/withStore';
import ReduxApp from './components/ReduxApp';

import "./style.css";
import UserRegistration from './form/UserRegistration';
import Practice from './components/Practice';
import TonyStark from './hoc/TonyStark';

function App() {
  return <>
    {/* <ListingPhotos /> */}
    {/* <GetPhoto /> */}
    {/* <PostingPhoto /> */}
    {/* <PatchingThumbnail /> */}
    {/* <DeletingPhoto /> */}
    {/* <Todo /> */}
    {/* <ReduxApp /> */}
    {/* <UserRegistration /> */}
    {/* <Practice /> */}
    <TonyStark name="tony" />
  </>
}

export default App;
