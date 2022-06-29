import './Contact.css';

const Contact = () => {

    return (
        <div class="contact">
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
                        <i class="far fa-envelope fa-2x contact__button"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;