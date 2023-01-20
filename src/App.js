import "./App.css"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import moi from "./moi.png"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {

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
        delay: 0.7
      }      
    )
    .to(".title", {
      y: 0
      
    })
    .to(".letter", {
      x: 0,
      delay: 1,
      duration: 2
    })
  }

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
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

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
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
    slideInTop("#box1");
  }, [])
  useEffect(() => {
    slideInTop("#box2");
  }, [])
  useEffect(() => {
    slideInLeft("#box3");
  }, [])
  useEffect(() => {
    slideInLeft("#box4");
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
        ㅤㅤㅤ
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
        <div id="box1" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Diplomes
        </div>
        <div id="box2" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Compétences
        </div>
        <div id="box3" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Expériences
        </div>
        <div id="box4" className="box"  onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Centres d'intérêt
        </div>
      </section>

      <section id="lastSection">
        <div id="box5" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Coordonnées
        </div>
      </section>
    </div>
  )
}

export default App
