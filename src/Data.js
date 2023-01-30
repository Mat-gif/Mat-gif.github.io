import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBriefcase, faCalendarDays, faCircleChevronDown, faEnvelope, faLocationDot, faPhone  } from "@fortawesome/free-solid-svg-icons";
import { useState   } from "react"



function DisplayTitre(props) {
  return (
    <h1 className="title" ref={props}>
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
  )}



const formations = [
  {
    id: "dip1", 
    title: "Master Informatique",
    speciality:"Intégration de Compétences (ICO)",
    period: "En cours",
    location: "Université de Montpellier, Montpellier, France",
    skills : [ "Javascript (Node.js, Jquery, Api REST, React)",
                "Html, CSS, Php",
                "Programmation orientée objet (Java)",
                "Architectures logicielles  (Java, Api REST/SOAP, Spring)",
                "Scripting Système (Pyhton / Bash)",
                "UML, algèbre relationnelle, SQL"
    ],
    url: "https://informatique-fds.edu.umontpellier.fr/etudiants/offre-de-formation-lmd5/parcours-ico-integration-de-competences-ouverture-septembre-2021-2/"
  },
  {
    id: "dip2", 
    title: "Master Sciences de la mer",
    speciality:"Oceanographie Biologique et Ecologie Marine (OBEM)",
    period: "2019-2021",
    location: "Aix-Mareille Université, Marseille, France",
    mention: "Bien",
    skills : ["Statistiques spatiales, descriptives et analytiques", "Modélisation et méthodes numériques", "Analyses de séries temporelles", "Analyses de signaux", "R, Python, Fortran 90"],
    url: "https://formations.univ-amu.fr/ME5LSM-PRLSM5AB.html"
  },
  {
    id: "dip3", 
    title: "Licence Sciences de la vie",
    speciality:"Biochimie Biologie Moléculaire et Microbiologie (2B2M)",
    period: "2016-2019",
    location: "Université Paul Sabatier, Toulouse, France",
    url: "https://www.univ-tlse3.fr/licence-parcours-biochimie-biologie-moleculaire-et-microbiologie-2b2m"
  },
    {
      id: "dip4", 
      title: "Baccalauréat général",
      speciality:"Scientifique",
      period: "2013-2015",
      location: "Nouvelle-Calédonie, France",
      mention: "Assez bien",
    }

 
  ];
  
  
  function DisplayFormations(props) {
    
  const [selectedDiv, setSelectedDiv] = useState(null);
   
  const [isVisible, setIsVisible] = useState(false);
  
  const handleDivClick = (divId) => {
   if(divId === selectedDiv){
     console.log("if")
     setIsVisible(!isVisible);
   } else {
     console.log("else")
     setSelectedDiv(divId);
     setIsVisible(true);
   }
 }
    return (
      <div id="box1" className="box"  >
            <h3>Formations & Compétences</h3>   
            {props.map((prop, index) => (

              <div className="my-container small miniBox"
              key={`${prop.id}-${index}`} 
              onClick={() =>  handleDivClick(prop.id)}
                >

                <div className="diploma-title bold"><a href={prop.url}> {prop.title} </a></div>
                <div className="diploma-speciality">{prop.speciality}</div>
                <div className="diploma-period"><FontAwesomeIcon icon={faCalendarDays} />  {prop.period}</div>
                <div className="diploma-location"><FontAwesomeIcon icon={faLocationDot} /> {prop.location}</div>
                {prop.hasOwnProperty('mention') && (
                <div className="diploma-mention">Mention : {prop.mention}</div>
                )}

                {
                  prop.hasOwnProperty('skills') &&
                  <p><FontAwesomeIcon icon={faCircleChevronDown} /></p>
                }
                { selectedDiv === prop.id && 
                  isVisible   &&  
                prop.hasOwnProperty('skills') && <div className="small italic left"> 
                {prop.hasOwnProperty('skills') && (
                prop.skills.map((skill, index) => (
                    <div className="formation-skill" ><FontAwesomeIcon icon={faArrowRight} /> {skill}</div>
                )))}
                </div>}
              </div> 
            ))}
      </div>
    )}



  const experiences = [
    {
      id: "experience1",
      title: "Stage de Recherche de Master 2",
      speciality:"Évolution spatio-temporelle de la diversité du phytoplancton dans les écosystèmes côtiers français face aux influences climatiques et anthropiques.",
      period: "01/2021 – 05/2021",
      location: "UMR EPOC – Station Marine d’Arcachon, France",
      skills : ["Analyse de données", "Analyse de séries temporelles", "Statistiques univariées et multivarié", "Modélisation dynamique", "Programmation sous R"]
    }
  ];

  function DisplayExperiences(props) {

  const [selectedDiv, setSelectedDiv] = useState(null);
   
   const [isVisible, setIsVisible] = useState(false);
   
   const handleDivClick = (divId) => {
    if(divId === selectedDiv){
      console.log("if")
      setIsVisible(!isVisible);
    } else {
      console.log("else")
      setSelectedDiv(divId);
      setIsVisible(true);
    }
  }

    return (
       <div id="box3" className="box" >
          <h3>Expériences </h3>
          {props.map((prop, index) => (

              <div className="my-container small miniBox2" 
              key={`${prop.id}-${index}`} 
              onClick={() =>  handleDivClick(prop.id)}
              >
                <div className="experience-title bold">{prop.title}</div>
                <div className="experience-speciality">{prop.speciality}</div>
                <div className="experience-period"><FontAwesomeIcon icon={faCalendarDays} /> {prop.period}</div>
                <div className="experience-location"><FontAwesomeIcon icon={faLocationDot} /> {prop.location}</div>
                
                  
                  
                {
                  <p><FontAwesomeIcon icon={faCircleChevronDown} /></p>
                }
              
                {
                  
                  selectedDiv === prop.id && 
                  isVisible   &&  
                  <div className="small italic left"> 
                  {prop.skills.map((skill, index) => (
                      <div className="experience-skill" ><FontAwesomeIcon icon={faArrowRight} /> {skill}</div>
                  ))}
                </div>
              }
              </div>
            ))}
            
      </div>
    )}

/*

  const skills = [
    {
        id: "skill1",
        name: "Technologies du web",
        specialities:["Html/CSS", "Javascript (Node.js, Jquery, Api REST, React)","Php"]
    },
    {
        id: "skill2",
        name: "Programmation orientée objet & Architecture logiciel",
        specialities:["Java (Api REST/SOAP, Spring)"]
    },
    {
        id: "skill3",
        name: "Scripting Système", 
        specialities:["Pyhton","Bash"]
    }, 
    {
        id: "skill4",
        name: "Systèmes d'information et bases de données",
        specialities:["UML","algèbre relationnelle","SQL"]
    }
  ];


  
  function DisplaySkills(props) {

   const [selectedDiv, setSelectedDiv] = useState(null);
   
   const [isVisible, setIsVisible] = useState(false);
   
   const handleDivClick = (divId) => {
    if(divId === selectedDiv){
      console.log("if")
      setIsVisible(!isVisible);
    } else {
      console.log("else")
      setSelectedDiv(divId);
      setIsVisible(true);
    }
  }

    return (
      <div id="box2" className="box"  >
          Compétences 
         {props.map((prop, index) => (

              <div  className="my-container small miniBox" 
                    key={`${prop.id}-${index}`} 
                    onClick={() =>  handleDivClick(prop.id)}>

                <div className="skill-name bold">{prop.name}</div>

                {
                  <p><FontAwesomeIcon icon={faCircleChevronDown} /></p>
                }
              
                {
                  selectedDiv === prop.id && 
                  isVisible   &&  
                  <div className="small italic "> 
                {prop.hasOwnProperty('specialities') && (
                  prop.specialities.map((speciality, index2) => (
                    <div className="skill-speciality" key={`${prop.id}-${index2}`} >{speciality}</div>
                  ))
                )}
              </div>
              }
              </div>
            ))}
      </div>
    )}
*/

  const contacts = [
    {
      name: "CAZERES Mathieu",
      info:"Etudiant en Master d'Informatique",
      email: "mathieucazeres@gmail.com",
      city: "Montpellier",
      country:"France",
      linkedin: "https://www.linkedin.com/in/mathieu-cazeres-741800225",
      github: "https://github.com/Mat-gif"
    }
  ];


  function DisplayContacts(props) {
    return (
     <div id="box5" className="box" >
            {props.map((prop, index) => (
        <div className="my-container small" key={index}>
          <div className="contact-name bold">{prop.name}</div>
          <div className="contact-info"> <FontAwesomeIcon icon={faBriefcase} /> {prop.info}</div>
          <div className="contact-email"><FontAwesomeIcon icon={faEnvelope} />  {prop.email}</div>
          <div className="contact-address"><FontAwesomeIcon icon={faLocationDot} />  {prop.city}, {prop.country}</div>
          <div className="contact-linkedin"><FontAwesomeIcon icon={faLinkedin}/> <a href={prop.linkedin}> {prop.linkedin} </a></div>
          <div className="contact-github"><FontAwesomeIcon icon={faGithub} /> <a href={prop.github}> {prop.github} </a></div>
        </div>
      ))}   
      </div>
    )}




    let intro = "Originaire de Nouvelle-Calédonie, je suis passionné par les technologies du web, je souhaite améliorer mes connaissances dans l’intégration de technologies web pour créer des applications modernes et performantes. Je suis à la recherche d’une alternance pour ma dernière année de master afin de développer mes compétences dans ce domaine."

    let conclusion = "Ayant acquis une solide expérience en résolution de problèmes techniques grâce à mes projets de fin d'études et à mes expériences professionnelles. Je suis également habitué à apprendre rapidement de nouvelles technologies et de nouveaux outils, afin de me tenir à jour dans le domaine en constante évolution. Enfin, je suis efficace dans le travail d’équipe, j'ai déjà travaillé en collaboration avec d'autres membres pour atteindre des objectifs communs. Je suis convaincu que ces compétences font de moi un atout pour tout projet de développement web et je suis impatient de continuer à développer ces compétences.";

  export {DisplayTitre, intro, conclusion, formations, DisplayFormations,   experiences, DisplayExperiences, contacts, DisplayContacts };