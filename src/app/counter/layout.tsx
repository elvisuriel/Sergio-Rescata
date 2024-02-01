import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from 'react';
interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;