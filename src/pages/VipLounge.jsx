import React from "react";

function VipLounge() {
    return (
        <div className="w-full px-4 py-20 flex flex-col items-center mt-3">

            <div className="w-full max-w-6xl mb-10">
                <div className="inline-block bg-gray-600 text-white px-6 py-3 text-xl font-bold tracking-wide shadow-md">
                    VIP LOUNGE
                </div>
            </div>

            <div className="w-full max-w-6xl flex flex-col md:flex-row md:space-x-8 items-start">

                <img
                    src="/Lounge.jpg"
                    alt="Chauffeur"
                    className="w-[400px]   mb-6 md:mb-0 object-cover"
                />

                <div className="text-white  text-base md:text-lg leading-relaxed md:w-1/2 space-y-4 ">
                    <p>
                        Indulge in the ultimate pre-flight experience with our VIP airport lounge access, expertly arranged by Elite VIP Services.
                    </p>
                    <p>
                        Enjoy a luxurious retreat where you can unwind, savor refreshments, stay connected with complimentary Wi-Fi, and relax in style before your flight.
                    </p>
                    <p>
                        Take advantage of shower facilities to refresh and rejuvenate, or enjoy a quiet workspace to catch up on last-minute tasks.
                    </p>
                    <p>
                        Our team will ensure a seamless experience, so you can focus on what matters most to your journey.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default VipLounge;
