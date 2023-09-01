import "./Contact.scss";
import EmailIcon from "../assets/icons/email.png";
import PhoneIcon from "../assets/icons/phone.png";

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact</h2>
                <div className="contact__info">
                    <p>michal.fadrny.dev@gmail.com</p>
                    <a href="tel:+420603734188">+420 603 734 188</a>
                </div>
        </section>
    )
}

export default Contact;