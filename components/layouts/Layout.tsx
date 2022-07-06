import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name='author' content='Luis Melendez' />
                <meta
                    name='description'
                    content='Informacion del pokemon XXXXXXXXXXX'
                />
            </Head>
            <Navbar />
            <main
                style={{
                    padding: "0 1.5rem",
                }}
            >
                {children}
            </main>
        </>
    );
};
