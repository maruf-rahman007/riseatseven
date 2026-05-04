export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-neutral-800 pb-16">
                    <div className="max-w-md">
                        <h3 className="text-4xl font-serif mb-6">Rise at Seven is a search-first content marketing agency</h3>
                        <p className="text-neutral-400 mb-8">Stay updated with Rise news, events, and insights straight to your inbox.</p>
                        <form className="flex w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-b border-white py-3 px-2 flex-grow focus:outline-none focus:border-[#ade8ce] transition-colors"
                            />
                            <button type="submit" className="text-sm uppercase tracking-wider font-bold hover:text-[#ade8ce] ml-4 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-wrap gap-16">
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-[#ade8ce] font-semibold tracking-widest uppercase text-xs">Menu</h4>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Work</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Services</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">About</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Blog</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Contact</a>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-[#ade8ce] font-semibold tracking-widest uppercase text-xs">Socials</h4>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Instagram</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">TikTok</a>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-[#ade8ce] font-semibold tracking-widest uppercase text-xs">Offices</h4>
                            <p className="text-neutral-400">London</p>
                            <p className="text-neutral-400">Sheffield</p>
                            <p className="text-neutral-400">Manchester</p>
                            <p className="text-neutral-400">New York</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap overflow-hidden">
                        Rise at Seven
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-between w-full mt-8 text-neutral-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Rise at Seven</p>
                        <div className="flex space-x-6 mt-4 sm:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
