import Header from "./Header";
import Introduction from "./Introduction";
import "./TopSection.scss";

const TopSection = (props) => {
    return (
        <div className="top">
            <div className="top-section">
                <Header/>
                <Introduction className="top-section__text"/>   
            </div>
            <ul className="top-menu">
                {/*
                    <li><a>MAIN SKILLS</a></li>
                    <li><a>MY PROJECTS</a></li>
                    <li><a>CONTACT</a></li>
                 */
                }
                WELCOME TO MY PERSONAL WEBPAGE
            </ul>
        </div>
    )
}

export default TopSection;