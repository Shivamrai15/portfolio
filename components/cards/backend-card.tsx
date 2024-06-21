import { Tech } from "@/components/utils/tech";


export const BackEndCard = () => {
    return (
        <div className="w-full h-full bg-neutral-800 rounded-sm p-4 md:p-6 py-6 space-y-6">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Backend</h3>
            <div className="flex items-center flex-wrap gap-3">
                <Tech label="NodeJs" color="#234b6e" />
                <Tech label="ExpressJs"/>
                <Tech label="NextJs"/>
                <Tech label="FastAPI" color="#236e41" />
                <Tech label="NextAuth"/>
            </div>
        </div>
    )
}
