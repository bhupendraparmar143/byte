import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home_Page/Home';
import Contest from './Components/Contest-Page/Contest';
import Leaderboard from './Components/Leaderboard-Page/Leaderboard2';
import Footer from './Components/Footer-Page/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login-SignUp-Page/Login';
import SignUp from './Components/Login-SignUp-Page/SignUp';
import 'animate.css';



function App() {
  return (
    <>
      <Router basename="/byte">
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Footer/>}/>
          <Route path='/contest' element={<Contest/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
