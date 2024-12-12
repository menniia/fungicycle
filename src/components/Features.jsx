import { motion } from "framer-motion";
import { Sprout, Recycle, TreePine, LeafyGreen, Factory, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
    {
        name: "Sustainable Growing",
        description: "Our innovative process uses recycled timber sawdust as a growing medium, reducing waste and environmental impact.",
        icon: Sprout
    },
    {
        name: "Waste Reduction",
        description: "By repurposing sawdust from timber production, we prevent waste and create value from byproducts.",
        icon: Recycle
    },
    {
        name: "Carbon Reduction",
        description: "Our process significantly reduces carbon emissions compared to traditional farming methods.",
        icon: TreePine
    },
    {
        name: "Premium Quality",
        description: "We produce high-quality, nutrient-rich oyster mushrooms perfect for both commercial and consumer use.",
        icon: LeafyGreen
    },
    {
        name: "Efficient Production",
        description: "Our controlled environment and optimized growing conditions ensure consistent, year-round production.",
        icon: Factory
    },
    {
        name: "Certified Quality",
        description: "All our products meet the highest standards of quality and sustainability certification.",
        icon: Award
    }
];

export default function Features() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <div id="features" className="py-24 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A Better Way to Grow
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Discover how our innovative approach is transforming mushroom farming while protecting the environment.
                    </p>
                </div>

                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.name}
                                className="relative"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </motion.div>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </div>
                                <motion.div
                                    className="mt-2 ml-16 text-base text-gray-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: inView ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {feature.description}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
