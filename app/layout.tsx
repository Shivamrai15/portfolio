import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shivam Rai",
    description: "I'm a full stack developer with experience in creating robust and scalable software. I am comfortable with highly demanded skills such as Next.js, React.js, and Express.js. Additionally, I have a very good knowledge of the Python programming language. I am seeking opportunities to create projects and deliver them faster than expected. I am comfortable with both web and API development. Let's build something cool!",
    keywords : ["porfolio", "nextjs", "react", "reactjs", "web", "web developer", "full stack", "full stack developer", "developer"],
    openGraph: {
        images: [{
            url : "https://res.cloudinary.com/dzmnw2hcz/image/upload/v1718989482/111892135_hedkxh.jpg",
            height : 1200,
            width : 1200
        }],
        type : "profile",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
