import Homepage from './sliding/homePage'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './login/login'
import Admin from './Admin/product'
import './App.css';
import SignUp from './signup/signup'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/admin/product" element={<Admin/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
