import "./ProjectInfo.scss"

const ProjectInfo = (props) => {
    return (
        <div className="project-info">
            <img src={props.image} alt="image.png"/>
            <div>
                {props.usedTech.map((stack, content) => (
                    <div>{content}</div>
                ))}
            </div>
            <ul>
                {props.info.map((element) => (
                    <li>{element}</li>
                ))}
            </ul>
            <button><a href={props.appLink}>TRY IT</a></button>
            <button><a href={props.codeLink}>CODE</a></button>
        </div>
    )
}

export default ProjectInfo;