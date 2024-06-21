"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
    src : string;
    label : string;
    tech : string;
    href : string;
}

export const ProjectCard = ({
    label,
    src,
    tech,
    href
} : ProjectCardProps ) => {

    const router = useRouter();

    return (
        <div
            className="w-full rounded-md overflow-hidden group md:cursor-pointer"
            onClick={()=>router.push(href)}
        >
            <div className="aspect-video w-full relative">
                <Image
                    src={src}
                    fill
                    alt={label}
                    className="object-cover brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
                />
            </div>
            <div className="bg-white p-4 py-6 w-full">
                <h1 className=" text-[17px] font-bold text-zinc-800 select-none" >{label}</h1>
                <span className="text-[13px] line-clamp-2 text-zinc-700 select-none">{tech}</span>
            </div>
        </div>
    )
}
