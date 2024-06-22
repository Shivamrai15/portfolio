import Image from "next/image";
import { LinkCard } from "@/components/cards/link-card";
import { Tech } from "@/components/utils/tech";


const MusicStreamingPage = () => {
    return (
        <div className="space-y-10 pb-14">
            <header className="relative w-full aspect-video bg-[url('https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/music-streaming_orx0uv.avif')] bg-cover bg-no-repeat">
                <div className="h-full w-full bg-gradient-to-b from-transparent to-neutral-900 relative">
                    <h1 className="absolute w-full text-center bottom-0 text-2xl md:text-3xl font-extrabold text-zinc-100 select-none">
                        Music Streaming WebApp
                    </h1>
                </div>
            </header>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Overview</h1>
                    <div className="space-y-4">
                        <p className="text-zinc-300 text-base text-justify select-none">This project is a music streaming web app where users can listen to songs. Subscribed users enjoy an ad-free experience, unlimited playlist creation, and the ability to share their playlists. They also have access to synced lyrics and can organize their listening queue. Additionally, users can follow their favorite artists and like any song they enjoy.</p>
                        <p className="text-zinc-300 text-base text-justify select-none"> This project is created in Next.js. React.js for the frontend, with TailwindCSS for responsive design. MongoDB, integrated with Prisma ORM, handles CRUD operations, while the entire backend is implemented in Next.js. Data fetching is managed using React Query and SWR, and state management is handled by Zustand. Stripe is used as the payment gateway, and NextAuth manages authentication.</p>
                    </div>
                </article>
            </section>
            <section className="grid sm:grid-cols-4 w-full px-6 gap-6">
                <LinkCard live="https://safari-music.vercel.app/" github="https://github.com/Shivamrai15/Safari" />
                <div className="w-full sm:col-span-3 py-6 px-4 md:px-6 bg-neutral-800 rounded-sm space-y-6">
                    <h3 className="text-lg text-zinc-400 font-semibold select-none" >Tech Stack</h3>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Tech label="ReactJs" color="#236e41" />
                        <Tech label="NextJs" color="#234b6e" />
                        <Tech label="TailwindCSS"/>
                        <Tech label="TypeScript" color="#6e6423" />
                        <Tech label="Prisma"/>
                        <Tech label="MongoDB" color="#236e41" />
                        <Tech label="NextAuth"/>
                        <Tech label="Stripe"/>
                        <Tech label="SWR"/>
                        <Tech label="ReactQuery" color="#6e2623" />
                        <Tech label="Zustand"/>
                        <Tech label="fuse.js"/>
                    </div>
                </div>
            </section>
            <section className="w-full py-10 md:py-16 px-6 space-y-10">
                <h1 className="text-xl md:text-2xl font-semibold select-none" >Features</h1>
                <ul className="pl-4 space-y-4">
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300"> <span className="font-medium text-white">Account Creation :</span> Users can create an account using their email ID or through Google or GitHub.</p>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white">Ad-Free Listening :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc">Subscribed users can play songs without ads.</li>
                            <li className="list-disc">Unsubscribed users can play songs without ads for 30 minutes.</li>
                        </ul>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white">Playlists :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc">Subscribed users can create unlimited playlists.</li>
                            <li className="list-disc">Unsubscribed users can create up to 5 playlists.</li>
                            <li className="list-disc">Users can create public or private playlists based on their preference.</li>
                        </ul>
                    </li>
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300"> <span className="font-medium text-white">Artist Following :</span> Users can follow their favorite artists.</p>
                    </li>
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300"> <span className="font-medium text-white">Song Liking :</span> Users can like songs to save them.</p>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white">Playback Restrictions for Unsubscribed Users :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc">Cannot seek songs.</li>
                            <li className="list-disc">Cannot play previously played songs.</li>
                        </ul>
                    </li>
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300"> <span className="font-medium text-white">Synced Lyrics :</span> Subscribed users can view synced lyrics while listening.</p>
                    </li>
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300"> <span className="font-medium text-white">Queue Management :</span> Subscribed users can manage and organize their playback queue.</p>
                    </li>
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300"> <span className="font-medium text-white">History Management :</span> User can manage their listening history.</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default MusicStreamingPage;