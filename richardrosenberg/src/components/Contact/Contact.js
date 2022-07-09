import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    return (
        <div className="contact">
            <a id="contact__link">
            <h3 className="contact__header">Shoot Me An Email!</h3>
            <div className="contact__email">
                <form action="https://formspree.io/f/xvodwowk" method="POST">
                    <label>Your email:
                        <input type="email" name="_replyto" className="contact__email"></input>
                    </label>
                    <label>Your message:
                        <textarea className="contact__email" name="message"></textarea>
                    </label>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" size='4x' className="contact__email contact__button"><button type="submit"></button></FontAwesomeIcon>
                </form>
            </div>
            </a>
        </div>
    )
}

export default Contact;