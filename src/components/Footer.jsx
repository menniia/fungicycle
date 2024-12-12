import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Sprout } from "lucide-react";
import { FaMeta } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <a href="/" className="flex items-center space-x-2">
                                <Sprout className="h-8 w-8 text-green-600" />
                                <span className="font-bold text-xl text-green-600">Fungi Cycle</span>
                            </a>
                        </div>
                        <p className="text-sm">
                            Revolutionizing sustainable practices through innovative fugal solutions
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-green-500 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">Services</a></li>
                            <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/fungi_cycle?igsh=aDUzeTE5aXQ3dmQx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61570396109659"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors"
                            >
                                <FaMeta className="text-2xl" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@fungicycle?lang=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors"
                            >
                                <FaTiktok className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Fungi Cycle. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;