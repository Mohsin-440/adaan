import ContactSection from "@/components/sections/contact-section"
import Header from "@/components/header"
import { Metadata } from "next"
import { motion } from "framer-motion"

export const metadata: Metadata = {
    title: "Contact Us - Addaan International Trading Company",
    description:
        "Get in touch with Addaan International Trading Company (AITC) for all your mining equipment needs. We offer expert consultation and customized solutions for the mining industry.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-mining-gray to-mining-gray/95 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mining-blue/20 via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="absolute h-full w-full bg-gradient-to-b from-mining-blue/5 via-transparent to-transparent" />

            <div className="relative">
                <Header />
                <ContactSection
                    showHeader={true}
                    className="pt-32"
                    variant="default"
                />
            </div>
        </main>
    )
}
