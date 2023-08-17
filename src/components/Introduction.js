import "./Introduction.scss";

import SocialMediaButton from "./UI/SocialMediaButton";
import GitHubIcon from "../assets/icons/github.png";
import LinkedinIcon from "../assets/icons/linkedin.png";


const Introduction = (props) => {
    return (
        <div className="introduction">
            <h1>MICHAL FADRNY</h1>
            <div className="introduction__text">
                <h2>FRONT-END DEVELOPER</h2>
                <h3>27YO</h3>
                <h3>CZECH REP</h3>
            </div>
            <div className="introduction__buttons">
                <SocialMediaButton
                    icon = {GitHubIcon}
                    link = "https://github.com/michalfadrnydev"
                    />
                <SocialMediaButton
                    icon = {LinkedinIcon}
                    link = "https://www.linkedin.com/in/michalfadrny"
                />
            </div>
        </div>
    )
}

export default Introduction;