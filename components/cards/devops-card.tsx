import { Tech } from "@/components/utils/tech";


export const DevopsCard = () => {
    return (
        <div className="w-full h-full bg-neutral-800 rounded-sm p-4 md:p-6 py-6 space-y-6">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Devops</h3>
            <div className="flex items-center flex-wrap gap-3">
                <Tech label="Docker"/>
                <Tech label="Git"/>
                <Tech label="GitHub"/>
            </div>
        </div>
    )
}