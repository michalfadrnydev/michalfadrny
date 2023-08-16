import "./SocialMediaButton.scss"

const SocialMediaButton = (props) => {
    return (
        <a className="social-media-button" href={props.link} target="_blank">
            <div className="social-media-button__icon">
                {props.icon}
            </div>
        </a>
    )
}

export default SocialMediaButton;