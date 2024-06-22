import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Project"
}

interface LayoutPageProps {
    children : React.ReactNode;
}

const LayoutPage = ({
    children
} : LayoutPageProps ) => {
    return (
        <main className="h-full overflow-y-auto bg-neutral-900 flex justify-center">
            <div className="max-w-4xl w-full">
                {children}
            </div>
        </main>
    )
}

export default LayoutPage;
