import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Crewneck from './pages/Apparel/Tops/crewneck';
import Contact from './pages/Contact/Contact';
import Lifestyle from './pages/Accessories/Lifestyle';
import Footer from './Components/Footer/Footer';
import All from './pages/All';
import Cart from './pages/Cart/Cart';
import { ShopContextProvider } from './pages/Cart/shop-context';
import TitanRadioSticker from './pages/Accessories/Stickers/titanradio';
import TRSticker from './pages/Accessories/Stickers/tr';
import BWSticker from './pages/Accessories/Stickers/bw';
import Condom from './pages/Accessories/Lifestyle/condom';
import Deskpad from './pages/Accessories/Lifestyle/desk-pad';
import Cup from './pages/Accessories/Lifestyle/mug';
import Backpack from './pages/Accessories/Lifestyle/backpack';
import Pen from './pages/Accessories/Lifestyle/pen';
import Laptopcase from './pages/Accessories/Lifestyle/laptopcase';


function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Lifestyle />} />
          <Route path="/All" element={<All />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path= "/Apparel/Tops/Crewneck" element={<Crewneck />} />
          <Route path="/accessories/sticker/" element={<TitanRadioSticker/>} />
          <Route path="/accessories/sticker/TRSticker/" element={<TRSticker/>} />
          <Route path="/accessories/sticker/BWSticker/" element={<BWSticker/>} />
          <Route path="/accessories/condom/" element={<Condom/>} />
          <Route path="/accessories/deskpad/" element={<Deskpad/>} />
          <Route path="/accessories/mug/" element={<Cup/>} />
          <Route path="/accessories/backpack/" element={<Backpack/>} />
          <Route path="/accessories/pen/" element={<Pen/>} />
          <Route path="/accessories/laptopcase/" element={<Laptopcase/>} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
