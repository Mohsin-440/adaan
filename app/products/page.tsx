import Link from "next/link";

export default function ProductsPage() {
    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-mining-blue mb-4">Our Products</h1>
                    <p className="text-mining-gray/70 max-w-2xl mx-auto">
                        Explore our comprehensive range of mining solutions, including Saudi-made core trays, drilling tools, and more. Click on a product to learn more.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* AITC Core Trays Card */}
                    <div className="bg-mining-blue/5 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition-all">
                        <div>
                            <h2 className="text-2xl font-bold text-mining-blue mb-2">AITC Core Trays</h2>
                            <p className="text-mining-gray/80 mb-4">
                                Saudi-Made Core Trays – Trusted Nationwide. AITC proudly manufactures high-durability HQ, PQ, and NQ core trays at our state-of-the-art Rabigh facility. Approved by Maaden and sold over 250,000 units, we are the first Saudi company aligning core tray production with Vision 2030. Lightweight, stackable, and weather-resistant—perfect for long-term mining use.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center mt-4">
                            <Link href="/products/core-trays" className="bg-mining-blue text-white px-6 py-3 font-semibold rounded-lg shadow hover:bg-mining-blue/90 transition-all">
                                Learn More
                            </Link>
                            <a href="#" target="_blank" className="bg-mining-gray text-white px-6 py-3 font-semibold rounded-lg shadow hover:bg-mining-gray/90 transition-all">
                                Download Brochure
                            </a>
                            <a href="#contact" className="bg-mining-blue/80 text-white px-6 py-3 font-semibold rounded-lg shadow hover:bg-mining-blue transition-all">
                                Get a Quote
                            </a>
                        </div>
                    </div>

                    {/* Placeholder for other product categories */}
                    <div className="bg-mining-gray/5 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
                        <h2 className="text-2xl font-bold text-mining-gray mb-2">Other Product Categories</h2>
                        <ul className="list-disc ml-5 text-mining-gray/80 mb-4">
                            <li>Drilling Tools</li>
                            <li>RC Chip Trays</li>
                            <li>Core Tray Covers & Accessories</li>
                            <li>Desco Drilling Rigs</li>
                            <li>IMDEX Solutions</li>
                            <li>CR Powered by Epiroc</li>
                        </ul>
                        <div className="mt-4 text-mining-blue/80 italic">More details coming soon...</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
