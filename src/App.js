import "./App.css"
import { useEffect, useRef, useState  } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import moi from "./moi.png"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)







function App() {

  const [formations, setFormations] = useState([
    {
      title: "Formation 1",
      period: "Du 01/01/2021 au 01/01/2022",
      location: "Paris, France",
      mention: "Bien"
    },
    {
      title: "Formation 2",
      period: "Du 01/01/2022 au 01/01/2023",
      location: "Lyon, France",
      mention: "Très bien"
    },
    {
      title: "Formation 3",
      period: "Du 01/01/2023 au 01/01/2024",
      location: "New York, USA",
      mention: "Excellent"
    }
  ]);

  let intro = "Je suis actuellement étudiant en  Master d'informatique et passionné par le développement web et JavaScript, je souhaite développer mes connaissances dans l’intégration de technologies web pour créer des applications modernes et performantes. Je suis à la recherche d'une alternance pour ma dernière année de master afin de mettre en pratique mes connaissances et de continuer à développer mes compétences dans ce domaine passionnant.";
  let conclusion = "Ayant acquis une solide expérience en résolution de problèmes techniques grâce à mes projets de fin d'études et à mes expériences professionnelles. Je suis également habitué à apprendre rapidement de nouvelles technologies et de nouveaux outils, afin de me tenir à jour dans le domaine en constante évolution. Enfin, je suis efficace dans le travail d’équipe, j'ai déjà travaillé en collaboration avec d'autres membres pour atteindre des objectifs communs. Je suis convaincu que ces compétences font de moi un atout pour tout projet de développement web et je suis impatient de continuer à développer ces compétences.";

  const titleRef = useRef()

  const onLoad = () => {
    gsap.timeline({
      onComplete: function () {
        console.log('animation terminée')

      }
    })
      .fromTo(".letter",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.33,
        delay: 0.4
      }      
    )
    .to(".title", {
      y: 0
      
    })
    .to(".letter", {
      x: 0,
      delay: 0.5,
      duration: 2
    })
  }

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -400,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 400,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }


  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#000", color: "#FFF" })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FFF", color: "#000" })
  }

  useEffect(() => {
    onLoad();
  }, [])
  useEffect(() => {
    slideInLeft("#intro");
  }, [])
  useEffect(() => {
    slideInRight("#box1");
  }, [])
  useEffect(() => {
    slideInLeft("#box2");
  }, [])
  useEffect(() => {
    slideInRight("#box3");
  }, [])
  useEffect(() => {
    slideInLeft("#conclusion");
  }, [])


  return (
    <div className="App">
      <div className="divtitle">
      <img src={moi}  className="letter" />
      <h1 className="title" ref={titleRef}>
        <span className="letter">C</span>
        <span className="letter">A</span>
        <span className="letter">Z</span>
        <span className="letter">E</span>
        <span className="letter">R</span>
        <span className="letter">E</span>
        <span className="letter">S</span>
        ㅤ
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">T</span>
        <span className="letter">H</span>
        <span className="letter">I</span>
        <span className="letter">E</span>
        <span className="letter">U</span>
      </h1>
      </div>

      
      <section id="nextSection">

      

      <div id="intro" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          {intro}
        </div>

        <div id="box1" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Formations
            {formations.map((formation, index) => (
              <div className="diploma-container" key={index}>
                <div className="diploma-title">{formation.title}</div>
                <div className="diploma-period">Période : {formation.period}</div>
                <div className="diploma-location">Lieu : {formation.location}</div>
                <div className="diploma-mention">Mention : {formation.mention}</div>
              </div>
            ))}
        </div>
        <div id="box2" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Compétences
        </div>
        <div id="box3" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Expériences
        </div>
        <div id="conclusion" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {conclusion}
        </div>
      </section>

      <section id="lastSection">
        <div id="box5" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Coordonnées
          <p className="coord">mathieucazeres@gmail.com</p>
          <p className="coord">0783048656</p>
          <p className="coord">34090 Montpellier France</p>


        </div>
      </section>
    </div>
  )
}

export default App
