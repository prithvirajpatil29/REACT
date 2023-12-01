import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music';
import Contact from './components/Contact';
import Track  from './components/Track';
import Pnf from './components/Pnf';
function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path={'/'} element={<Music></Music>}></Route>
        <Route path={'/contact'} element={<Contact/>}></Route>
        <Route path={'/track/:artistId'} element={<Track/>}></Route>
        <Route path={'/*'} element={<Pnf></Pnf>}></Route>
      </Routes>
    </BrowserRouter>
    );
}
export default App;