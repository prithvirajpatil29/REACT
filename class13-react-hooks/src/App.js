import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Ex1 from './components/Ex1'
import { Ex2 } from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Ex9 from './components/Ex9';
function App() {
  return (
    <BrowserRouter>
        <Menu></Menu>
      <Routes>
        <Route path='/'></Route>
        <Route path='/ex1' element={<Ex1></Ex1>} ></Route>
        <Route path='/ex2' element={<Ex2></Ex2>}></Route>
        <Route path='/ex3' element={<Ex3 itemsPerPage={9}></Ex3>}></Route>
        <Route path='/ex4' element={<Ex4 itemsPerPage={5}></Ex4>}></Route>
        <Route path='/ex5' element={<Ex5></Ex5>}></Route>
        <Route path='/ex6' element={<Ex6></Ex6>}></Route>
        <Route path='/ex7' element={<Ex7></Ex7>}></Route>
        <Route path='/ex8' element={<Ex8></Ex8>}></Route>
        <Route path='/ex9' element={<Ex9></Ex9>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
