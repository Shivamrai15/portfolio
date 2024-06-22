import { LinkCard } from "@/components/cards/link-card";
import { Tech } from "@/components/utils/tech";


const ChatApplicationPage = () => {
    return (
        <div className="space-y-10 pb-14">
            <header className="relative w-full aspect-video bg-[url('https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/chat_nju8p6.avif')] bg-cover bg-no-repeat">
                <div className="h-full w-full bg-gradient-to-b from-transparent to-neutral-900 relative">
                    <h1 className="absolute w-full text-center bottom-0 text-2xl md:text-3xl font-extrabold text-zinc-100 select-none">
                        Chat Application
                    </h1>
                </div>
            </header>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Overview</h1>
                    <div className="space-y-4">
                        <p className="text-zinc-300 text-base text-justify select-none">This is a chat application where users can log in using their Google or GitHub accounts. Users can add friends via email and accept incoming friend requests. They can send messages, media files, and emojis to friends in real time. Users have the ability to delete sent messages and clear entire conversations. Additionally, users can forward messages to multiple friends simultaneously.</p>
                        <p className="text-zinc-300 text-base text-justify select-none">This project is created in Next.js. React.js for the frontend, with TailwindCSS for responsive design. The entire backend is implemented in Next.js. Redis is used as the database to store messages, while Pusher handles real-time messaging and notifications, state management is handled by Zustand. NextAuth manages authentication.</p>
                    </div>
                </article>
            </section>
            <section className="grid sm:grid-cols-4 w-full px-6 gap-6">
                <LinkCard live="https://chatwithjabber.vercel.app/" github="https://github.com/Shivamrai15/Jabber" />
                <div className="w-full sm:col-span-3 py-6 px-4 md:px-6 bg-neutral-800 rounded-sm space-y-6">
                    <h3 className="text-lg text-zinc-400 font-semibold select-none" >Tech Stack</h3>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Tech label="ReactJs" color="#236e41" />
                        <Tech label="NextJs" color="#234b6e" />
                        <Tech label="TailwindCSS"/>
                        <Tech label="JavaScript"/>
                        <Tech label="Redis" color="#6e2623" />
                        <Tech label="Pusher"/>
                        <Tech label="NextAuth"/>
                        <Tech label="Zustand"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChatApplicationPage;