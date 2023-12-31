import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-out" element={<SignOut/>}/>
    <Route path="/profile" element={<Profile/>}/>

  </Routes>
  </BrowserRouter>
}
