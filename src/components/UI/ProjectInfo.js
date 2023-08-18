import "./ProjectInfo.scss"
import AppLinkIcon from "../../assets/icons/external-link.png";
import CodeLinkIcon from "../../assets/icons/code.png";

const ProjectInfo = (props) => {
    return (
        <div className="project-info">
            <img src={props.image} alt="image.png"/>
            <ul className="project-info__tech">
                {props.usedTech.map((content) => (
                    <li>{content}</li>
                ))}
            </ul>
            <ul className="project-info__desc">
                {props.info.map((element) => (
                    <li>{element}</li>
                ))}
            </ul>
            <div className="project-info__buttons">
                <button>
                    <img src={AppLinkIcon}/>
                    <a href={props.appLink}>TRY IT</a>
                </button>
                <button>
                    <img src={CodeLinkIcon}/>
                    <a href={props.codeLink}>CODE</a>
                </button>
            </div>
        </div>
    )
}

export default ProjectInfo;