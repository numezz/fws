import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Privacy from './components/Pages/Privacy/Privacy';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
