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
    gsap.to(currentTarget, { backgroundColor: "#144272", color: "#FFF",   bordercolor: "#FFF" } )
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FFF", color: "#144272" , bordercolor: "#666"})
  }


  const slideIn = (id, direction) => {
    if (direction === "right") {
      slideInRight(id);
    } else if (direction === "left") {
      slideInLeft(id);
    }
  }

  export { onLoad, slideIn, onEnter, onLeave };