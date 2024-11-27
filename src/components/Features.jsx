/* eslint-disable react/prop-types */
import { FaLeaf, FaRecycle, FaSeedling } from "react-icons/fa";


const FeaturesCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-green-600 text-3xl mb-4">
                <Icon />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

const Features = () => {
    const features = [
        {
            icon: FaLeaf,
            title: "Sustainable Solutions",
            description: "Our mushroom-based products promote ecolofical balance and sustainable living through natural decomposition cycles."
        },
        {
            icon: FaRecycle,
            title: "Natural Cycling",
            description: "We harness the power of fungi to break down organic matter, creating a perfect closed-loop system for waste management."
        },
        {
            icon: FaSeedling,
            title: "Eco-Innovation",
            description: "Leading the way in ecological solutions that transform waste into valuable resources while protecting our environment"
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Why Choose Fungi Cycle</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Discover how our innovative fungi solutions are revolutionizing sustainable practices and creating a greener future.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeaturesCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;