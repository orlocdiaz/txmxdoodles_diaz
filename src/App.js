import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import GalleryContainer from './containers/GalleryContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <GalleryContainer />
    </>
  );
}

export default App;
