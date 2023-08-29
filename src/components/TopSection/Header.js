import "./Header.scss"
import ProfileImage from "../../assets/pictures/Profilephoto_pracovni.png"; 

const Header = () => {
    const headerOpacity = [0.8, 0.6, 0.45, 0.4, 0.25];

    return (
        <div className="header">
            {headerOpacity.map((header) => (
                <p 
                    className="header__background-text"
                    style={{opacity: header}}
                    key = {Math.random}
                >
                    WELCOME
                </p>
            ))}
            <img className="header__image" src={ProfileImage} alt="profile.img"/>
        </div>
    )
}

export default Header;