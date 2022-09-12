import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
import Layout from './common/Layout/Layout';
import Menu from './pages/Menu/Menu';
import MenuCategoryContent from './pages/Menu/components/MenuCategoryContent/MenuCategoryContent';

function App() {
  return (
    <Layout>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/menu/:id" element={<Menu />} />
            {/* <Route path="/menu/:id/category/:name" element={<MenuCategoryContent />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
