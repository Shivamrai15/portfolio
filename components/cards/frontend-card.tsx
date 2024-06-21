import { Tech } from "@/components/utils/tech";


export const FrontEndCard = () => {
    return (
        <div className="w-full h-full bg-neutral-800 rounded-sm p-4 md:p-6 py-6 space-y-6">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Frontend</h3>
            <div className="flex items-center flex-wrap gap-3">
                <Tech label="HTML"/>
                <Tech label="CSS"/>
                <Tech label="JavaScript"/>
                <Tech label="TypeScript" color="#6e6423" />
                <Tech label="TailwindCSS"/>
                <Tech label="ReactJs" color="#236e41" />
                <Tech label="NextJs" color="#234b6e" />
            </div>
        </div>
    )
}
