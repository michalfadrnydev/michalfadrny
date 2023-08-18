import React, {useState} from "react";

import "./Projects.scss";
import ProjectBadge from "./UI/ProjectBadge";
import CosmosIcon from "../assets/icons/cosmos.png";
import CoinSpaceIcon from "../assets/icons/coinspace.png";
import DictionaryIcon from "../assets/icons/dictionary.png";
import ProjectInfo from "./UI/ProjectInfo";
import MacImg from "../assets/pictures/mac.png"

const projects = [
    {
        icon: CosmosIcon,
        title: "COSMOS",
        key: "c1",
        img: MacImg,
        tech: ["HTML","CSS","SASS","JAVASCRIPT","RECT"],
        info: [
            "view the optimal layout for the app depending on their device's screen size", 
            "see different hover states for all interactive elements on the page",
            'view each planet page and toggle between the "Overview", "Internal Structure", and "Surface Geology" tabs',
        ],
        appLink: "https://www.seznam.cz/",
        codeLink: "https://github.com/michalfadrnydev/cosmos",
    },
    {
        icon: CoinSpaceIcon,
        title: "COINSPACE",
        key: "c2",
        img: MacImg,
        tech: ["HTML","CSS","SASS","JAVASCRIPT","REACT","EXPRESS", "FIREBASE"],
        info: [
            'use username and password "admin" to log in into demo app pre-filled with default data',
            "record your purchased investment coins",
            "edit already purchased investment coins",
            "use different filters to display coins",
            "look at the statistics, how many coins you have already sold and which ones you still have in stock"
        ],
        appLink: "https://www.seznam.cz/",
        codeLink: "https://github.com/michalfadrnydev/cosmos",
    },
    {
        icon: DictionaryIcon,
        title: "DICTIONARY",
        key: "c3",
        img: MacImg,
        tech: ["HTML","CSS","JAVASCRIPT","API","OOP","EXPRESS"],
        info: [
            "search for words using input field", 
            "play the audio file for a word",
            "switch between light and dark themes",
            "optimal layout for the interface depending on their device's screen size"
        ],
        appLink: "https://www.seznam.cz/",
        codeLink: "https://github.com/michalfadrnydev/cosmos",
    }
]

const Projects = () => {
    const [isSkillActive, setIsSkillActive] = useState(true);
    const projectClickHandler = () => {
        console.log("SAh");
    }
    
    return (
        <div className="projects-container">
            <h1>MY PROJECTS</h1>
            <ul className = "project-list" >
                {projects.map((project) => (
                    <li key={project.key}>
                        <ProjectBadge
                            onClick = {projectClickHandler}
                            title={project.title} 
                            icon={project.icon}
                        />
                        {isSkillActive && 
                            <ProjectInfo
                                className="project-list__tech" 
                                image={project.img}
                                usedTech={project.tech}
                                info={project.info}
                                appLink={project.appLink}
                                codeLink={project.codeLink}
                            />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;