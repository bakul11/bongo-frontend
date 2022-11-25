import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './Componets/Authentication/ForgetPassword/ForgetPassword';
import NewPassword from './Componets/Authentication/ForgetPassword/NewPassword';
import Login from './Componets/Authentication/Login/Login';
import Register from './Componets/Authentication/Register/Register';
import Cart from './Componets/Cart/Cart';
import NoMatch from './Componets/NoMatch/NoMatch';
import Drama from './Componets/Pages/Drama/Drama';
import Home from './Componets/Pages/Home/Home';
import LiveTVDetails from './Componets/Pages/Home/LiveTV/LiveTVDetails';
import PlayVideo from './Componets/Pages/Home/MoviePlay/PlayVideo';
import Movie from './Componets/Pages/Movie/Movie';
import Natok from './Componets/Pages/Natok/Natok';
import PopularPages from './Componets/Pages/PopularPages/PopularPages';
import Premium from './Componets/Pages/Premium/Premium';
import Profile from './Componets/Profile/Profile';
import Protected from './Componets/Protected/Protected';
import ScrollToTop from './Componets/ScrollToTop/ScrollToTop';
import Footer from './Componets/Shared/Footer/Footer';
import Navbar from './Componets/Shared/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* All Pages Start */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movie />}></Route>
        <Route path='/natok' element={<Natok />}></Route>
        <Route path='/drama' element={<Drama />}></Route>
        <Route path='/popular' element={<PopularPages />}></Route>

        {/* Protected Route  */}
        <Route path='/premium' element={
          <Protected>
            <Premium />
          </Protected>
        }></Route>

        {/* cart  */}
        <Route path='/cart' element={<Cart />}></Route>

        {/* All Details Pages  */}
        <Route path='/watch/:id' element={<PlayVideo />}></Route>
        <Route path='/liveTv/:name' element={<LiveTVDetails />}></Route>

        {/* Authentication User */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
        <Route path='/resetNewPassword' element={<NewPassword />}></Route>

        {/* No Match Pages  */}
        <Route path='*' element={<NoMatch />}></Route>


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;