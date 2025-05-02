import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import TabBar from './components/TabBar'; // Navigasyon barı ayrı bileşen
import SignUp from './components/SignUp/SignUp';
import { AuthProvider } from './Contexts/UserControlContext';
import Profile from './components/Profile/Profile';
import { ProductItems } from './Contexts/ProductsContext';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductItems>
          <TabBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </ProductItems>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
