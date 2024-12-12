import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../ui/Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Logo />

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#features" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                            <a href="#process" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Our Process</a>
                            <a href="#impact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Impact</a>
                            <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:text-gray-700 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                        <a href="#features" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
                        <a href="#process" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Our Process</a>
                        <a href="#impact" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Impact</a>
                        <a href="#contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        <button className="bg-green-600 text-white w-full px-4 py-2 rounded-md hover:text-gray-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Navbar