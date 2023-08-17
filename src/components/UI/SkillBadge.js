import "./SkillBadge.scss";

const SkillBadge = (props) => {
    return (
        <div className="skill-badge">
            <i className={props.icon + " skill-badge__icon"}></i>
            <p className="skill-badge__title">{props.title}</p>
        </div>
    );
};

export default SkillBadge;