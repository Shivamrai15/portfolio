"use client";

import { Wifi } from "lucide-react";
import { RiNetflixFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { SiGoogleassistant } from "react-icons/si";


export const MoreProjectCards = () => {

    return (
        <div className="w-full px-4 py-6 md:px-6 bg-neutral-800 rounded-md space-y-6">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Minor Projects</h3>
            <div
                className="flex items-center flex-wrap gap-4"
            >
                <div 
                    className="px-6 py-4 bg-neutral-900 hover:bg-neutral-900/90 rounded-md border-neutral-950 flex items-center gap-x-6 h-full md:cursor-pointer"
                    onClick={()=>window.open('https://netflix-clone-dun-pi-34.vercel.app', '_blank')}
                >
                    <RiNetflixFill className="h-5 w-5 text-zinc-300" />
                    <div className="space-y-4 max-w-44">
                        <h3 className="text-sm font-medium text-zinc-300 select-none" >Netflix Clone</h3>
                        <span className="text-xs text-zinc-500 select-none">
                            ReactJs, NextJs, TailwindCSS, MongoDb, Prisma
                        </span>
                    </div>
                </div>
                <div 
                    className="px-6 py-4 bg-neutral-900 hover:bg-neutral-900/90 rounded-md border-neutral-950 flex items-center gap-x-6 h-full md:cursor-pointer"
                    onClick={()=>window.open('https://spotify-clone-dupe.vercel.app', '_blank')}
                >
                    <FaSpotify className="h-5 w-5 text-zinc-300" />
                    <div className="space-y-4 max-w-44">
                        <h3 className="text-sm font-medium text-zinc-300 select-none" >Spotify Clone</h3>
                        <span className="text-xs text-zinc-500 select-none">
                            ReactJs, NextJs, TailwindCSS, Supabase
                        </span>
                    </div>
                </div>
                <div 
                    className="px-6 py-4 bg-neutral-900 hover:bg-neutral-900/90 rounded-md border-neutral-950 flex items-center gap-x-6 h-full md:cursor-pointer"
                    onClick={()=>window.open('https://github.com/Shivamrai15/Mili-Assistant', '_blank')}
                >
                    <SiGoogleassistant className="h-5 w-5 text-zinc-300" />
                    <div className="space-y-4 max-w-44">
                        <h3 className="text-sm font-medium text-zinc-300 select-none" >Voice Assistant</h3>
                        <span className="text-xs text-zinc-500">
                            Python, MongoDB
                        </span>
                    </div>
                </div>
                <div
                    className="px-6 py-4 bg-neutral-900 hover:bg-neutral-900/90 rounded-md border-neutral-950 flex items-center gap-x-6 h-full md:cursor-pointer"
                    onClick={()=>window.open('https://github.com/Shivamrai15/WI-FI-Security', '_blank')}
                >
                    <Wifi className="h-5 w-5 text-zinc-300" />
                    <div className="space-y-4 max-w-44">
                        <h3 className="text-sm font-medium text-zinc-300 select-none" >WI-FI Security</h3>
                        <span className="text-xs text-zinc-500">
                            Python
                        </span>
                    </div>
                </div>
            </div>      
        </div>
    )
}
