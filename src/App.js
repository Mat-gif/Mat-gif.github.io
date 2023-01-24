import "./App.css"
import { useEffect, useRef  } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import moi from "./moi.png"
import {DisplayTitre, intro, conclusion,   formations, DisplayFormations, skills, DisplaySkills,  experiences, DisplayExperiences, contacts, DisplayContacts } from './Data';
import { onLoad, slideIn, onEnter, onLeave } from './Effet';

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

      <section className="section-title">
        <img src={moi}  className="letter" />
        {DisplayTitre(useRef())}
      </section>

      <section id="nextSection">
        <div id="intro" className="box small italic" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {intro}
        </div>
        <div id="box1" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Formations
          {DisplayFormations(formations)}
        </div>
        <div id="box2" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Compétences 
          {DisplaySkills(skills)}
        </div>
        <div id="box3" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Expériences 
          {DisplayExperiences(experiences)}
        </div>
        <div id="conclusion" className="box small italic"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {conclusion}
        </div>
      </section>

      <section id="lastSection">
        <div id="box5" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {DisplayContacts(contacts)}
        </div>
      </section>

    </div>
  )
}


export default App
