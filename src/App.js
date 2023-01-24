import "./App.css"
import { useEffect, useRef  } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import moi from "./moi.png"
import {DisplayTitre, intro, conclusion,   formations, DisplayFormations, skills, DisplaySkills,  experiences, DisplayExperiences, contacts, DisplayContacts } from './Data';
import { onLoad, slideIn, onEnter, onLeave } from './Effet';
import { Link, Element  } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger)







function App() {


  useEffect(() => {
    onLoad();
  }, [])

  useEffect(() => {
    slideIn("#intro", "left");
  }, []);
  useEffect(() => {
    slideIn("#box1", "right");
  }, []);
  useEffect(() => {
    slideIn("#box2", "left");
  }, []);
  useEffect(() => {
    slideIn("#box3", "right");
  }, []);
  useEffect(() => {
    slideIn("#conclusion", "left");
  }, []);

  return (

   

    <div className="center">
       <nav>
       <Link className="nav-link" to="section1" smooth={true} offset={0} duration={500}>Présentation</Link>
       <Link className="nav-link"to="section2" smooth={true} offset={0} duration={500}>Formations</Link>
       <Link className="nav-link" to="section3" smooth={true} offset={0} duration={500}>Compétences</Link>
       <Link className="nav-link" to="section4" smooth={true} offset={0} duration={500}>Expériences</Link>
       <Link className="nav-link" to="section5" smooth={true} offset={0} duration={500}>Motivations</Link>
       <Link className="nav-link" to="section6" smooth={true} offset={0} duration={500}>Coordonnées</Link>
      </nav>
    

      <section className="section-title">
        <img src={moi} />
        {DisplayTitre(useRef())}
      </section>

  

      <Element name="section1" className="elem">
        <div id="intro" className="box small italic" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {intro}
        </div>
        </Element>

        <Element name="section2" className="elem" >
          {DisplayFormations(formations)}
        </Element>

        <Element name="section3" className="elem">
          {DisplaySkills(skills)}
        </Element>
        
        <Element name="section4" className="elem">
          {DisplayExperiences(experiences)}
        </Element>
        
        <Element name="section5" className="elem">
        <div id="conclusion" className="box small italic"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {conclusion}
        </div>
        </Element>
  
      <Element name="section6" className="elem">
          {DisplayContacts(contacts)}
      </Element>
        

    </div>
  )
}


export default App
