import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


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
  }

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -100,
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


  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#144272", color: "white",   bordercolor: "white" } )
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "white", color: "#144272" , bordercolor: "#666"})
  }



  export { onLoad, slideInTop, onEnter, onLeave };