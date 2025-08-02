import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="bg-none py-8 ">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:items-start border-t pt-8">
                <div >
                    <img src="/logo-wide.png" className="max-w-xs  " />
                    <div className="flex items-center justify-between gap-20">
                        <span className="text-[15px] text-gray-400">
                            &copy; 2025 ELITE VIP AIRPORT SERVICES LTD . ALL RIGHTS RESERVED
                        </span>
                        <Link className="text-[15px] text-gray-400 underline" to={'/termsandconditions'}>
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
                <div className="text-center md:text-right text-sm space-y-2">
                    <div className="flex items-center justify-center md:justify-end gap-2">
                        <Mail className="w-4 h-4 text-white" />
                        <p className="text-white text-[16px]">info@elitevipairportservices.co.uk</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-2">
                        <Phone className="w-4 h-4 text-white" />
                        <p className="text-white text-[16px]">+44 7947581313</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-2">
                        <MapPin className="w-4 h-4 text-white" />
                        <p className="text-white text-[16px]">85 Great Portland Street , London W1W 7LT</p>
                    </div>


                </div>
            </div>

        </footer>
    )
}

export default Footer;
