import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("Please fill in all required fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Please enter a valid email address");
            return;
        }

        setErrorMessage("");
        setIsSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: "",
            subject: "",
        });
    };

    return (
        <section>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        required
                    />
                </div>

                {errorMessage && <p>{errorMessage}</p>}
                <button type="submit">
                    Submit
                </button>
            </form>
            {isSubmitted && <p>Your message has been delivered successfully</p>}
        </section>
    );
};

export default ContactForm;