import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/layout/navbar";
import { primaryFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://audiscribe.vercel.app'),
    title: { 
        template: '%s | Umar Saeed', 
        default: 'Umar Saeed' 
    },
    description: "A portfolio website designed to showcase my skills, experiences, and accomplishments. Here, you'll find a collection of my real-world projects and insights into my professional.",
    icons: {
        icon: [
            { url: '../app/favicon.ico', sizes: '48x48' }, 
            { url: '../../public/favicon/android-chrome-192x192.png', sizes: '192x192' }
        ],
        apple: [
            { url: '../../public/favicon/apple-touch-icon.png', sizes: '180x180' }
        ],
    },
    openGraph: {
        title: 'Audiscribe',
        description: "A portfolio website designed to showcase my skills, experiences, and accomplishments. Here, you'll find a collection of my real-world projects and insights into my professional.",
        url: 'https://umarsaeed.vercel.app',
        siteName: 'Umar Saeed',
        images: [
            {
                url: '../../public/og-image.png', 
                width: 1900,
                height: 1036,          
                alt: 'Home Page Preview'
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Umar Saeed',
        description: "A portfolio website designed to showcase my skills, experiences, and accomplishments. Here, you'll find a collection of my real-world projects and insights into my professional.",
        images: ['../../public/og-image.png'], 
    },
    robots: {
        index: true,
        follow: true,
    },
    manifest: '../../public/favicon/site.webmanifest'
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={`antialiased bg-custom-gradient-4 min-h-dvh ${primaryFont.className} text-secondary-500`}>
                <NextUIProvider>
                    <NavBar />

                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
