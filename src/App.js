import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Users from './pages/users';
import Company from './pages/company';
import Reserv from './pages/reservation';
import Createcomp from './pages/createcomp';
import Notifs from './pages/notif';
import Travel from './pages/travel';
import Colis from './pages/colis';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import './Components/styles.css';
import './Components/style2.css'
 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' index element={<Home />}></Route>
        <Route path='header' element={<Header />}></Route>
        <Route path='sidebar' element={<Sidebar />}></Route>
        <Route path='users' element={<Users />}></Route>
        <Route path='company' element={<Company />}></Route>
        <Route path='reservation' element={<Reserv />}></Route>
        <Route path='createcomp' element={<Createcomp />}></Route>
        <Route path='notif' element={<Notifs />}></Route>
        <Route path='travel' element={<Travel />}></Route>
        <Route path='colis' element={<Colis />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//export default App;