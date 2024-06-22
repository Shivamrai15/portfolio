import { Globe } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface LinkCardPops {
    live : string;
    github : string;
}

export const LinkCard = ({
    live,
    github
} : LinkCardPops) => {
    return (
        <div className="w-full px-4 py-6 md:px-6 rounded-sm bg-neutral-800 space-y-6">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Links</h3>
            <div className="space-y-4">
                <a 
                    href={live}
                    target = "noreferrer"
                    className="text-emerald-500 transition-all flex items-center gap-x-4"
                >
                    <Globe className="h-5 w-5" />
                    <span className="font-semibold select-none" >Live</span>
                </a>
                <a 
                    href={github}
                    target = "noreferrer"
                    className="text-pink-500 transition-all flex items-center gap-x-4"
                >
                    <BsGithub className="h-5 w-5 select-none" />
                    <span className="font-semibold" >Github</span>
                </a>
            </div>
        </div>
    )
}
