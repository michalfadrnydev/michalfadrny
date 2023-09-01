import React, {useState, useEffect} from "react";

import "./Projects.scss";
import ProjectBadge from "./UI/ProjectBadge";
import CosmosIcon from "../assets/icons/cosmos.png";
import CoinSpaceIcon from "../assets/icons/coinspace.png";
import DictionaryIcon from "../assets/icons/dictionary.png";
import ProjectInfo from "./UI/ProjectInfo";
import MacImg from "../assets/pictures/mac.png";
import MacImgCosmos from "../assets/pictures/mac-cosmos.png";
import MacImgDictionary from "../assets/pictures/mac-dictionary.png";
import MacImgCoinspace from "../assets/pictures/mac-coinspace.png";

const projects = [
    {
        icon: CosmosIcon,
        title: "COSMOS",
        key: "c1",
        img: MacImgCosmos,
        tech: ["REACT","JAVASCRIPT","HTML","CSS","SASS"],
        info: [
            "view the optimal layout for the app depending on their device's screen size", 
            "see different hover states for all interactive elements on the page",
            'view each planet page and toggle between the "Overview", "Internal Structure", and "Surface Geology" tabs',
        ],
        appLink: "https://michalfadrnydev.github.io/cosmos",
        codeLink: "https://github.com/michalfadrnydev/cosmos",
        show: false,
    },
    {
        icon: CoinSpaceIcon,
        title: "COINSPACE",
        key: "c2",
        img: MacImgCoinspace,
        tech: ["REACT","JAVASCRIPT","EXPRESS","FIREBASE","HTML","CSS","SASS", ],
        info: [
            "CURRENTLY THERE IS ONGOING DEVELOPMENT",
            'use username and password "admin" to log in into demo app pre-filled with default data',
            "record your purchased investment coins",
            "edit already purchased investment coins",
            "use different filters to display coins",
            "look at the statistics, how many coins you have already sold and which ones you still have in stock"
        ],
        appLink: "",
        codeLink: "",
        show: false,
    },
    {
        icon: DictionaryIcon,
        title: "DICTIONARY",
        key: "c3",
        img: MacImgDictionary,
        tech: ["HTML","CSS","JAVASCRIPT","API","OOP","EXPRESS"],
        info: [
            "search for words using input field",
            "play the audio file for a word",
            "browse Dictionary API's response for the searched word"
        ],
        appLink: "https://michalfadrnydev.github.io/Dictionary-poject/",
        codeLink: "https://github.com/michalfadrnydev/Dictionary-poject",
        show: false,
    },
]

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobileLayout, setIsMobileLayout] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileLayout(window.innerWidth < 992);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const projectClickHandler = (project) => {
        setSelectedProject(project);
    }
    const closeProjectHandler = () => {
        setSelectedProject(null);
    }
    
    return (
        <div className="projects-container">
            <h1>MY PROJECTS</h1>
            <ul className = "project-list" >
                {projects.map((project) => (
                    <li key={project.key}>
                        <ProjectBadge
                            onClick = {() => projectClickHandler(project)}
                            title={project.title} 
                            icon={project.icon}
                        />
                        {isMobileLayout && selectedProject === project && (
                            <ProjectInfo
                                onClose={closeProjectHandler}
                                className="project-list__tech"
                                image={selectedProject.img}
                                usedTech={selectedProject.tech}
                                info={selectedProject.info}
                                appLink={selectedProject.appLink}
                                codeLink={selectedProject.codeLink}
                            />
                        )}
                    </li>
                ))}
            </ul>
            {!isMobileLayout && selectedProject && (
                <ProjectInfo
                    onClose={closeProjectHandler}
                    className="project-list__tech"
                    image={selectedProject.img}
                    usedTech={selectedProject.tech}
                    info={selectedProject.info}
                    appLink={selectedProject.appLink}
                    codeLink={selectedProject.codeLink}
                />
            )}
        </div>
    )
}

export default Projects;