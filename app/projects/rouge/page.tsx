import { LinkCard } from "@/components/cards/link-card";
import { Tech } from "@/components/utils/tech";


const RougePage = () => {
    return (
        <div className="space-y-10 pb-14">
            <header className="relative w-full aspect-video bg-[url('https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718988218/ecommerce_a7xpji.avif')] bg-cover bg-no-repeat">
                <div className="h-full w-full bg-gradient-to-b from-transparent to-neutral-900 relative">
                    <h1 className="absolute w-full text-center bottom-0 text-2xl md:text-3xl font-extrabold text-zinc-100 select-none">
                        Ecommerce Platform
                    </h1>
                </div>
            </header>
            <section className="flex items-center justify-center">
                <article className="max-w-5xl w-full py-10 md:py-16 px-6 space-y-10">
                    <h1 className="text-xl md:text-2xl font-semibold select-none" >Overview</h1>
                    <div className="space-y-4">
                        <p className="text-zinc-300 text-base text-justify select-none">This project is an e-commerce platform where users can create an account using their email or Google account. Users can add products to their cart and wishlist, as well as manage multiple addresses and switch between them effortlessly. In the account section, users can view their orders, rate purchased items, and write reviews.</p>
                        <p className="text-zinc-300 text-base text-justify select-none"> This project is created in Next.js. React.js for the frontend, with TailwindCSS for responsive design. MongoDB, integrated with Prisma ORM, handles CRUD operations, while the entire backend is implemented in Next.js. Data fetching is managed using SWR, and state management is handled by Zustand. Stripe is used as the payment gateway, and NextAuth manages authentication.</p>
                    </div>
                </article>
            </section>
            <section className="grid sm:grid-cols-4 w-full px-6 gap-6">
                <LinkCard live="https://rouge-shopping.vercel.app/" github="https://github.com/Shivamrai15/Rouge" />
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
                        <Tech label="Zustand"/>
                    </div>
                </div>
            </section>
            <section className="w-full py-10 md:py-16 px-6 space-y-10">
                <h1 className="text-xl md:text-2xl font-semibold select-none" >Features</h1>
                <ul className="pl-4 space-y-4">
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300 select-none"> <span className="font-medium text-white">Account Creation :</span> Users can create an account using their email ID or through Google.</p>
                    </li>
                    <li className="gap-2 list-disc">
                        <p className="text-zinc-300 select-none"> <span className="font-medium text-white">Filters :</span> Users can apply filters to find products based on price range, color, and size.</p>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white select-none">Wishlist Management :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc select-none">Users can add multiple products to their wishlist.</li>
                            <li className="list-disc select-none">Users can move wishlisted items to their cart.</li>
                            <li className="list-disc select-none">Users can remove items from their wishlist.</li>
                        </ul>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white select-none">Address Management :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc select-none">Users can add multiple addresses to their profile.</li>
                            <li className="list-disc select-none">Users can switch the default address at any time.</li>
                            <li className="list-disc select-none">Users can delete addresses as needed.</li>
                        </ul>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white select-none">Cart Management and Purchasing Process :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc select-none">Users can increase the quantity of a product, with changes reflected in the total price.</li>
                            <li className="list-disc select-none">Users can select specific items they wish to purchase.</li>
                            <li className="list-disc select-none">Upon clicking <span className="font-semibold text-white" >Continue</span>, users are directed to the address page where they can add a new address or select a previously added one.</li>
                            <li className="list-disc select-none">After selecting an address, users proceed to the payment gateway to enter additional details and complete their purchase.</li>
                        </ul>
                    </li>
                    <li className="gap-2 list-disc space-y-1">
                        <span className="font-medium text-white select-none">Reviews :</span>
                        <ul className="text-zinc-300 text-[15px] pl-4">
                            <li className="list-disc select-none">Users can add, update, or delete reviews for purchased items.</li>
                            <li className="list-disc select-none">Users can rate items on a scale of 1 to 5.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default RougePage;