import './App.css';
import Header from './assets/Component/Header/header';
import IntroText from './assets/Component/IntroText/introText';
import AboutComponent from './assets/Component/About/about';
import Experience from './assets/Component/Experience/experience';
import Contact from "./assets/Component/ContactMe/contact";
import Footer from "./assets/Component/Footer/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <IntroText/>
      <AboutComponent/>
      <Experience/>
        <Contact/>
      <Footer/>




    </div>
  );
}

export default App;
