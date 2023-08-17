import SkillBadge from "./UI/SkillBadge";

import DoubleBorder from "./UI/DoubleBorder";
import SingleBorder from "./UI/SingleBorder";

import "./Skills.scss"

const skills = [
    {
        icon: "devicon-html5-plain",
        title: "HTML5"
    },
    {
        icon: "devicon-css3-plain",
        title: "CSS"
    },
    {
        icon: "devicon-sass-original",
        title: "SASS"
    },
    {
        icon: "devicon-javascript-plain",
        title: "JAVASCRIPT"
    },
    {
        icon: "devicon-react-original",
        title: "REACT"
    },
    {
        icon: "devicon-git-plain",
        title: "GIT"
    },
    {
        icon: "devicon-npm-original-wordmark",
        title: "NPM"
    },
    {
        icon: "devicon-express-original",
        title: "EXPRESS"
    },
    {
        icon: "devicon-figma-plain",
        title: "FIGMA"
    }
]

const Skills = () => {
    return (
        <div className="skills-container">
            <DoubleBorder/>
            <h3 className="skills-container__header">MY MAIN SKILLS</h3>
            <div className="skills-container__skills">
                {skills.map((skill) => (
                    <SkillBadge icon={skill.icon} title={skill.title}/>
                ))}
            </div>
            <SingleBorder/>
        </div>
    )
}

export default Skills;