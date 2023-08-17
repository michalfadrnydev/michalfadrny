import "./SocialMediaButton.scss"

const SocialMediaButton = (props) => {
    return (
        <a className="social-media-button" href={props.link} target="_blank">
            <img className="social-media-button__icon" src={props.icon}/>
        </a>
    )
}

export default SocialMediaButton;