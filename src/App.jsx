import './index.css';
import Intro from './components/Intro';
import Overview from './components/Overview';
import Education from './components/Education'
import Projects from './components/Projects'
import Feedback from './components/Feedbacks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Temp2 from './components/temp2'

const App = () => (
  <>
    <Intro />
    <Overview />
    {/* <Temp2/> */}
    <Education/>
    <Projects/>
    <Feedback/>
    <Contact/>
    <Footer/>
   

  </>
)

export default App
