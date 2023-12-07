import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Menu from './component/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login'
import Register from './component/Register';
import Pnf from './component/Pnf';
import Home from './component/Home';
import ProtectedRoute from './authGaurd/ProtectedRoute';
import Create from './component/Create';
function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <ToastContainer autoClose={4000} position={'top-center'}></ToastContainer>
      <Routes >
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/create'} element={<Create></Create>}></Route>
        </Route>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'/login'} element={<Login></Login>}></Route>
        <Route path={'/register'} element={<Register></Register>}></Route>
        <Route path={'/*'} element={<Pnf></Pnf>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
