import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import Header from './components/Header';
import VideoDetail from './pages/VideoDetail';
import Forum2 from './pages/Forum2';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/video" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
