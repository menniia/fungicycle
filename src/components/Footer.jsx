import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <div>
                <FontAwesomeIcon icon={faMeta} />
            </div>
            <div>
                <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div>
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </footer>
    )
}

export default Footer;