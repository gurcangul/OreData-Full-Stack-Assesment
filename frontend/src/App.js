import './App.css';
import Post from './components/Post';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Todos from './components/TodosList';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/post' element={<Post/>}></Route>
          <Route path='/' element={<Todos/>}></Route>
          <Route path='/register' element={<SignUp/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
