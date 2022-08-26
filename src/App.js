import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import AuthWrapper from './layouts/authWrapper';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <AuthWrapper>
      <Routes>
        <Route path="Login" element={<Login />} exact/>
        <Route path="Home" element={<Home />} exact/>
      </Routes>
      </AuthWrapper>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
