import { FaArrowRight } from "react-icons/fa";


const HeroSection = () => {

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Nurture Your Business, <br />Reap The Rewards
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center hover:bg-blue-700 transition-colors">
                        Read More
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;