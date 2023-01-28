import "./App.css"
import { useEffect, useRef  } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import moi from "./moi.png"
import {DisplayTitre, intro, conclusion,   formations, DisplayFormations,  experiences, DisplayExperiences, contacts, DisplayContacts } from './Data';
import { onLoad, slideInTop, onEnter, onLeave } from './Effet';
import { Link, Element  } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger)


const DownloadPDFButton = () => {
  return (
      <a href={require('./CV_CazeresMathieu.pdf')} download>
          Télécharger mon CV
      </a>
  );
};

function App() {


  useEffect(() => {
    onLoad();
  }, [])


  
  useEffect(() => {
    slideInTop("#intro");
  }, []);
  useEffect(() => {
    slideInTop("#box1");
  }, []);

  useEffect(() => {
    slideInTop("#box3");
  }, []);
  useEffect(() => {
    slideInTop("#conclusion");
  }, []);

  return (

   

    <div className="center">
       <nav>
       <Link className="nav-link" to="section1" smooth={true} offset={0} duration={500}>Présentation</Link>
       <Link className="nav-link"to="section2" smooth={true} offset={0} duration={500}>Formations</Link>
       <Link className="nav-link" to="section4" smooth={true} offset={0} duration={500}>Expériences</Link>
       <Link className="nav-link" to="section5" smooth={true} offset={0} duration={500}>Motivations</Link>
       <Link className="nav-link" to="section6" smooth={true} offset={0} duration={500}>Coordonnées</Link>
      </nav>
    

      <section className="section-title">
        <img src={moi} />
        {DisplayTitre(useRef())}
      </section>

  

      <Element name="section1" className="elem"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div id="intro" className="box small italic">
            {intro}
        </div>
        </Element>

        <Element name="section2" className="elem"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {DisplayFormations(formations)}
        </Element>

        <Element name="section4" className="elem"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {DisplayExperiences(experiences)}
        </Element>
        
        <Element name="section5" className="elem"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div id="conclusion" className="box small italic"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {conclusion}
        </div>
        </Element>
  
      <Element name="section6" className="elem"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {DisplayContacts(contacts)}
          <div>
            <DownloadPDFButton />
        </div>
      </Element>
        

    </div>
  )
}


export default App
