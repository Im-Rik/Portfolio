import './index.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Overview from './components/Overview';
import Education from './components/Education'
import Projects from './components/Projects'
import Feedback from './components/Feedbacks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InfiniteMovingCardsDemo from './components/temp2'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => (
  <>
    <BrowserRouter>

      <Navbar />
      
      <div id="home"><Home /></div>
      <div id="overview"><Overview /></div>
      <div id="education"><Education /></div>
      <div id="projects"><Projects /></div>
      <div id="feedback"><Feedback /></div>
      <div id="contact"><Contact /></div>

      <Footer/>

    </BrowserRouter>
  </>
);



export default App;
