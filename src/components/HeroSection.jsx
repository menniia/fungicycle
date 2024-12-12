import { ArrowRight, Leaf, Recycle, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {

    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            
                            {/* Animated heading */}
                            <motion.h1
                                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <span className="block">Revolutionizing</span>
                                <span className="block text-green-600">Mushroom Farming</span>
                            </motion.h1>

                            {/* Animated paragraph */}
                            <motion.p
                                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Sustainable oyster mushroom cultivation using recycled timber sawdust.
                                Join us in reducing carbon emissions while producing premium quality mushrooms.
                            </motion.p>

                            {/* Animated button */}
                            <motion.div
                                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <div className="rounded-md shadow">
                                    <motion.button
                                        className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Started
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Animated icons grid */}
                            <motion.div
                                className="mt-8 grid grid-cols-3 gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <motion.div
                                    className="flex items-center space-x-2"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <Recycle className="h-6 w-6 text-green-600" />
                                    <span className="text-sm text-gray-600">Sustainable Process</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-2"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <TreePine className="h-6 w-6 text-green-600" />
                                    <span className="text-sm text-gray-600">Sawdust Recycling</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-2"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                >
                                    <Leaf className="h-6 w-6 text-green-600" />
                                    <span className="text-sm text-gray-600">Carbon Reduction</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Animated image section */}
            <motion.div
                className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="/images/istockphoto-1246468417-612x612.webp"
                    alt="Oyster mushrooms growing"
                />
            </motion.div>
        </div>
    )
}

export default HeroSection;
