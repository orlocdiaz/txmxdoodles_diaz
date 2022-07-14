import './App.css';
import NavBar from './components/NavBar'
// import ItemListContainer from './components/ItemCount';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
