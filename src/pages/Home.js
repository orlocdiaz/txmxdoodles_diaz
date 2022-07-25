import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar'
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idList" element={<ItemListContainer />} />
        <Route path="/item/:idDetail" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        {/* <ItemListContainer /> */}
        {/* <ItemDetailContainer /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
