import "./ProjectBadge.scss";

const ProjectBadge = (props) => {
    return (
        <button className="project-badge" onClick={props.onClick}>
            <div className="project-badge__icon">
                <img src={props.icon} alt="project-icon.png"/>
            </div>
            <p className="project-badge__title">{props.title}</p>
        </button>
    );
};

export default ProjectBadge;