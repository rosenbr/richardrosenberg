import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    return (
        <div class="contact">
            <a id="contact__link">
            <h3 class="contact__header">Shoot Me An Email!</h3>
            <div class="contact__email">
                <form action="https://formspree.io/f/xvodwowk" method="POST">
                    <label>Your email:
                        <input type="email" name="_replyto" class="contact__email"></input>
                    </label>
                    <label>Your message:
                        <textarea class="contact__message" name="message"></textarea>
                    </label>
                    <button type="submit" class="contact__button">Send button here
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </button>
                </form>
            </div>
            </a>
        </div>
    )
}

export default Contact;