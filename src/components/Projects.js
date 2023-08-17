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
        tech: ["HTML","CSS","JAVASCRIPT","API","OOP","SASS"],
        info: [
            "search for words using input field", 
            "play the audio file for a word",
            "switch between light and dark themes",
            "optimal layout for the interface depending on their device's screen size"
        ],
        appLink: "https://www.seznam.cz/",
        codeLink: "https://github.com/michalfadrnydev/cosmos",
    },
    {
        icon: CoinSpaceIcon,
        title: "COINSPACE",
        key: "c2",
    },
    {
        icon: DictionaryIcon,
        title: "SASS",
        key: "c3",
    }
]

const Projects = () => {
    const [isSkillActive, setIsSkillActive] = useState("true");
    const projectClickHandler = () => {
        console.log("SAh");
    }
    
    return (
        <div className="projects-container">
            <h1>MY PROJECTS</h1>
            <ul className = "projects-container__list" >
                {projects.map((project) => (
                    <li key={project.key}>
                        <ProjectBadge
                            onClick = {projectClickHandler}
                            title={project.title} 
                            icon={project.icon}
                        />
                        {isSkillActive && 
                            <ProjectInfo 
                                image={projects[0].img}
                                usedTech={projects[0].tech}
                                info={projects[0].info}
                                appLink={projects[0].appLink}
                                codeLink={projects[0].codeLink}
                            />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;