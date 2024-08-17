import { Routes,Route} from 'react-router-dom';
import {Home} from './components/Home';
import './App.css';
import { Cart } from './components/Cart';
import { AuthLogin } from './components/AuthLogin';
function App() {
  return (
   
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/auth/login" element={<AuthLogin/>}/>
    </Routes>
    </>
    
  );
}

export default App;
