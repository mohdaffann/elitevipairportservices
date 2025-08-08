import { User, ShoppingBag, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { href, NavLink, useLocation } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import MobileDropdown from "./MobileDropdown";
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const loc = useLocation();
    const isHome = loc.pathname === '/'
    useEffect(() => {
        if (!isHome) return;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const servicesItems = [
        { name: 'MEET & GREET', href: '/services/meet-and-greet' },
        { name: 'VIP LOUNGE PASS', href: '/lounge', subjAvail: true },
        { name: 'FAST TRACK', href: '/fasttrack', subjAvail: true },


    ];



    const bookNowItems = [
        { name: 'LONDON-HEATHROW', href: '/book/london-heathrow' },
        { name: 'LONDON-GATWICK', href: '/book/london-gatwick' }

    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome && window.innerWidth >= 1024 ? isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent' : 'bg-gray-800 shadow-lg'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <NavLink className='flex items-center' to={''} onClick={() => {
                        setTimeout(() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                        }, 50);
                    }}>
                        <img src="/logo-wide.png" className="w-52 h-14" />
                    </NavLink>
                    <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">

                        <NavLink to={''} className="text-white hover:text-gray-300 transition-colors duration-200 font-medium tracking-wide text-sm">
                            HOME
                        </NavLink>

                        <NavLink to={'/locations'} className="text-white hover:text-gray-300 transition-colors duration-200 font-medium tracking-wide text-sm">
                            LOCATIONS
                        </NavLink>

                        <NavDropdown
                            title="SERVICES"
                            items={servicesItems}
                        />
                        <NavDropdown
                            title="BOOK NOW"
                            items={bookNowItems}
                            className="border border-white rounded px-3 py-1 self-center  hover:text-gray-900 transition-all duration-200"
                        />


                    </nav>



                    {/* Mobile menu button */}
                    <div className="lg:hidden ">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white hover:text-gray-300 cursor-pointer transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-800 py-4">
                        <div className="flex flex-col space-y-4">
                            <NavLink to={''} onClick={() => {
                                setTimeout(() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                }, 50);

                            }} className="text-white hover:text-gray-300 transition-colors duration-200 font-medium tracking-wide text-sm">
                                HOME
                            </NavLink>

                            <NavLink to={'/locations'} onClick={() => {
                                setTimeout(() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                }, 50);
                            }} className="text-white hover:text-gray-300 transition-colors duration-200 font-medium tracking-wide text-sm">
                                LOCATIONS
                            </NavLink>



                            <MobileDropdown
                                title="SERVICES"
                                items={servicesItems}
                                openDropdown={openDropdown}
                                setOpenDropdown={setOpenDropdown}
                                setIsMobileMenuOpen={setIsMobileMenuOpen}

                            />




                            <MobileDropdown
                                title="BOOK NOW"
                                items={bookNowItems}
                                openDropdown={openDropdown}
                                setOpenDropdown={setOpenDropdown}
                                setIsMobileMenuOpen={setIsMobileMenuOpen}
                            />




                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Header