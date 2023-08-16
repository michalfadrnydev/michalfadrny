import "./Header.scss"
import ProfileImage from "../assets/pictures/Profilephoto_pracovni.png"; 

const Header = () => {
    return (
        <div className="header">
            <p className="header__background-text">WELCOME</p>
            <p className="header__background-text">WELCOME</p>
            <p className="header__background-text">WELCOME</p>
            <p className="header__background-text">WELCOME</p>
            <p className="header__background-text">WELCOME</p>
            <p className="header__background-text">WELCOME</p>
            <img className="header__image" src={ProfileImage} alt="profile.img"/>
        </div>
    )
}

export default Header;