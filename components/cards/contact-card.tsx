"use client";

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const ContactCard = () => {
    return (
        <div className="w-full bg-neutral-800 px-4 py-6 space-y-6 h-full rounded-md">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Contact Me</h3>
            <div className="flex flex-col space-y-6">
                <a 
                    href="https://www.linkedin.com/in/shivam-rai-63234b282"
                    target = "noreferrer"
                    className="flex items-center gap-x-4"
                >
                    <FaLinkedinIn className="text-[#1f5cbf] h-6 w-6" />
                    <span className="text-base font-medium text-zinc-300 select-none" >
                        Linkedin
                    </span>
                </a>
                <a 
                    href="https://github.com/Shivamrai15"
                    target = "noreferrer"
                    className="flex items-center gap-x-4"
                >
                    <FaGithub className="text-zinc-300 h-6 w-6" />
                    <span className="text-base font-medium text-zinc-300 select-none" >
                        Github
                    </span>
                </a>
                <a 
                    href="https://www.instagram.com/shivamrai_0706/"
                    target = "noreferrer"
                    className="flex items-center gap-x-4"
                >
                    <FaInstagram className="text-[#92336e] h-6 w-6" />
                    <span className="text-base font-medium text-zinc-300 select-none" >
                        Instagram
                    </span>
                </a>
            </div>
        </div>
    )
}
