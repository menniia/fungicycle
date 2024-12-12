import { Sprout } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
                <Sprout className="h-8 w-8 text-green-600" />
                <span className="font-bold text-xl text-green-600">Fungi Cycle</span>
            </a>
        </div>
    );
}