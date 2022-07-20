import './App.css';
import NavBar from './components/NavBar'
// import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
