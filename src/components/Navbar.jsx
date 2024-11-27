
const Navbar = () => {
    return (
        <nav className="bg-white shadiw-sm ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-green-600">
                        Fungi Cycle
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Solution</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:text-gray-700 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;