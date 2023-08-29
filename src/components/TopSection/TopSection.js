import Header from "./Header";
import Introduction from "./Introduction";
import "./TopSection.scss";

const TopSection = () => {
    return (
        <div className="top-section">
            <Header/>
            <Introduction className="top-section__text"/>
        </div>
    )
}

export default TopSection;