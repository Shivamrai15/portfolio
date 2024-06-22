import { Tech } from "@/components/utils/tech";
import { LinkCard } from "@/components/cards/link-card";


const DocumentEditorPage = () => {
    return (
        <div className="space-y-10 pb-14">
            <header className="relative w-full aspect-video bg-[url('https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/document_brhjnk.avif')] bg-cover bg-no-repeat">
                <div className="h-full w-full bg-gradient-to-b from-transparent to-neutral-900 relative">
                    <h1 className="absolute w-full text-center bottom-0 text-2xl md:text-3xl font-extrabold text-zinc-100 select-none">
                        Document Editor
                    </h1>
                </div>
            </header>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Overview</h1>
                    <div className="space-y-4">
                        <p className="text-zinc-300 text-base text-justify select-none">This project allows users to create multiple nested documents and share them by making the documents public. Users can embed images either by providing a direct link or by manually uploading a file. Documents can be moved to the trash, where users have the option to permanently delete them or restore them. Users can log in using various account types, including Google, Microsoft, or GitHub accounts.</p>
                        <p className="text-zinc-300 text-base text-justify select-none">This project is created in Next.js. React.js for the frontend, with TailwindCSS for responsive design. The entire backend is implemented in Next.js. Convex is used as the real-time database to store documents, while edgestore is used to store images. Clerk manages authentication.</p>
                    </div>
                </article>
            </section>
            <section className="grid sm:grid-cols-4 w-full px-6 gap-6">
                <LinkCard live="https://one-document.vercel.app/" github="https://github.com/Shivamrai15/One-Document" />
                <div className="w-full sm:col-span-3 py-6 px-4 md:px-6 bg-neutral-800 rounded-sm space-y-6">
                    <h3 className="text-lg text-zinc-400 font-semibold select-none" >Tech Stack</h3>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Tech label="ReactJs" color="#236e41" />
                        <Tech label="NextJs" color="#234b6e" />
                        <Tech label="TailwindCSS"/>
                        <Tech label="JavaScript"/>
                        <Tech label="Convex" color="#6e2623" />
                        <Tech label="Clerk"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DocumentEditorPage;