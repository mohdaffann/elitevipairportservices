import React from "react";

function Meet() {
    return (
        <div className="w-full px-4 py-20 flex flex-col items-center mt-3">

            <div className="w-full max-w-6xl mb-10">
                <div className="inline-block bg-gray-600 text-white px-6 py-3 text-xl font-bold tracking-wide shadow-md">
                    MEET & GREET
                </div>
            </div>

            <div className="w-full max-w-6xl flex flex-col xl:flex-row md:space-x-8 items-start">

                <img
                    src="/Meet.jpg"
                    alt="Chauffeur"
                    className="w-[400px] md:w-[500px] lg:w-[600px] xl:w-[400px]   rounded shadow-lg mb-6 md:mb-0 object-cover"
                />

                <div className="text-white mt-6 md:mt-8 xl:mt-0  text-base md:text-lg lg:text-2xl xl:text-lg leading-relaxed xl:w-1/2 space-y-4 ">
                    <p>
                        Our Meet & Greet service ensures a smooth, personalized airport experience from the moment you arrive.
                    </p>
                    <p>
                        Whether you're landing or taking off, our professional greeters will assist you with fast-track immigration, baggage handling, and escorting you through the airport with ease.
                    </p>
                    <p>
                        Enjoy a hassle-free journey with priority access and dedicated support, designed for comfort, efficiency, and a touch of VIP luxury.
                    </p>

                </div>
            </div>
        </div>


    )
}

export default Meet;
