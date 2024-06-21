"use client";

import Image from "next/image";

import { BackEndCard } from "@/components/cards/backend-card";
import { ContactCard } from "@/components/cards/contact-card";
import { DatabaseCard } from "@/components/cards/db-card";
import { DevopsCard } from "@/components/cards/devops-card";
import { FrontEndCard } from "@/components/cards/frontend-card";
import { MoreProjectCards } from "@/components/cards/more-projects-card";
import { ProjectCard } from "@/components/cards/project-card";

export default function Home() {
    return (
        <main className="h-full overflow-y-auto w-full bg-neutral-900">
            <header className="w-full h-44">
                <div className="h-36 md:h-44 w-full bg-neutral-800 bg-[url('/assets/header-bg.avif')] bg-cover bg-no-repeat bg-top flex items-center justify-center">
                    <div className="max-w-5xl w-full h-full py-5 px-6">
                        <div className="h-full flex items-center space-x-10">
                            <div className="h-full aspect-square rounded-full bg-neutral-600 relative overflow-hidden">
                                <Image
                                    src="https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718989482/111892135_hedkxh.jpg"
                                    alt="Shivam Rai"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <h2 className="text-2xl md:text-4xl font-extrabold select-none" >Shivam Rai</h2>
                                <span className="text-zinc-400 font-medium text-sm select-none">Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-4">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Intoduction</h1>
                    <p className="text-zinc-300 text-base text-justify select-none">I&apos;m a full stack developer with experience in creating robust and scalable software. I am comfortable with highly demanded skills such as Next.js, React.js, and Express.js. Additionally, I have a very good knowledge of the Python programming language. I am seeking opportunities to create projects and deliver them faster than expected. I am comfortable with both web and API development. Let&apos;s build something cool!</p>
                </article>
            </section>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Projects</h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <ProjectCard
                            src="https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/music-streaming_orx0uv.avif"
                            label="Music Streaming"
                            tech="ReactJs, Nextjs, TailwindCSS, TypeScript Prisma, MongoDB ,Zustand, React Query, SWR, Stripe, Cloudinary, NextAuth"
                            href="/projects/safari"
                        />
                        <ProjectCard
                            src="https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/ecommerce_a7xpji.avif"
                            label="Ecommerce Platform"
                            tech="ReactJs, Nextjs, TailwindCSS, TypeScript, Prisma, MongoDB ,Zustand, SWR, Stripe, Cloudinary, NextAuth"
                            href="/projects/rouge"
                        />
                        <ProjectCard
                            src="https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/chat_nju8p6.avif"
                            label="Chat Application"
                            tech="ReactJs, Nextjs, TailwindCSS, JavaScript, Redis, Pusher, NextAuth"
                            href="/projects/jabber"
                        />
                        <ProjectCard
                            src="https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/document_brhjnk.avif"
                            label="Document Editor"
                            tech="ReactJs, Nextjs, TailwindCSS, JavaScript, Convex, Clerk"
                            href="/projects/onedocument"
                        />
                    </div>
                </article>
            </section>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >What I Know</h1>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <FrontEndCard/>
                        <BackEndCard/>
                        <DatabaseCard/>
                        <DevopsCard/>
                    </div>
                </article>
            </section>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Others</h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 w-full">
                            <MoreProjectCards/>
                        </div>
                        <div className="w-full">
                            <ContactCard/>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}
