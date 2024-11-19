import styles from './App.module.css';
import { About } from './components/About/About';
import {Hero} from './components/Hero/Hero';
import {Navbar} from './components/Navbar/Navbar';
import { Experience } from './components/Experience/experience';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';


function App() {

return (
   <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App;
