import { Tech } from "@/components/utils/tech";

export const DatabaseCard = () => {
    return (
        <div className="w-full h-full bg-neutral-800 rounded-sm p-4 md:p-6 py-6 space-y-6">
            <h3 className="text-lg text-zinc-400 font-semibold select-none" >Database and ORM</h3>
            <div className="flex items-center flex-wrap gap-3">
                <Tech label="MySQL"/>
                <Tech label="MongoDB" color="#236e41" />
                <Tech label="PostgresSQL"/>
                <Tech label="Redis" color="#6e2623" />
                <Tech label="Prisma"/>
            </div>
        </div>
    )
}
