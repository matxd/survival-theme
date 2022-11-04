import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About'
import Menu from './components/Menu';
import Default from './pages/Default';

function AppRoutes() {
  return (
    <>
      <BrowserRouter> {/*  Informa que teremos um roteamento */}
        <Menu />
        <Routes>
          <Route path='/' element={<Default />} />
          <Route index element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='*' element={<h1>Erro 404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
