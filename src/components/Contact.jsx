function Contact() {
    return (
        <div className="contact">
            <h1>Contact Info</h1>
            <form>
                <label htmlFor="name">First name:</label><br />
                <input type="text" id="name" name="name" /><br />
                <label htmlFor="email">Last name:</label><br />
                <input type="text" id="email" name="email" />
                <label htmlFor="message">Last name:</label><br />
                <input type="text" id="message" name="message" />
            </form>

        </div>
    );
}

export default Contact;
