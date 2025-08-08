import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-none py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 border-t border-gray-300 pt-6">
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <img src="/logo-wide.png" className="max-w-xs" alt="Logo" />

                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <span className="text-[15px] text-white">
                            &copy; 2025 ELITE VIP AIRPORT SERVICES LTD. ALL RIGHTS RESERVED
                        </span>
                        <Link
                            className="text-[15px] text-white underline"
                            to="/termsandconditions"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>

                <div className="text-sm space-y-2 text-center md:text-right mt-8">
                    <div className="flex items-center justify-center md:justify-end gap-2 ">
                        <Mail className="w-4 h-4 text-white" />
                        <p className="text-white text-[16px]">
                            info@elitevipairportservices.co.uk
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-2">
                        <Phone className="w-4 h-4 text-white" />
                        <p className="text-white text-[16px]">+44 7385234875</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-2">
                        <MapPin className="w-4 h-4 text-white" />
                        <p className="text-white text-[16px]">
                            85 Great Portland Street, London W1W 7LT
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
