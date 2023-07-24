import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Blogs, Blog, UserProfile } from './pages'; 
import './assets/App.css';
import { NavBar } from './components/Navbar';

const routes = [
  { path: '/user-profile', label: 'Profile'},
  { path: '/blogs', label: 'Blogs'},
]

function App() {
  return (
    <BrowserRouter>
      <NavBar routes={routes}/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:userName/blogs" element={<Blogs />} />
          <Route path='/:userName/blogs/:id' element={<Blog />} />
          <Route path='/:userName/user-profile' element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
