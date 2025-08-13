import React from "react";

function Fasttrack() {
    return (
        <div className="w-full px-4 py-20 flex flex-col items-center mt-3">

            <div className="w-full max-w-6xl mb-10">
                <div className="inline-block bg-gray-600 text-white px-6 py-3 text-xl font-bold tracking-wide shadow-md">
                    FAST TRACK
                </div>
            </div>

            <div className="w-full max-w-6xl flex flex-col xl:flex-row md:space-x-8 items-start">

                <img
                    src="/FastTrack.png"
                    alt="Chauffeur"
                    className="w-[400px] md:w-[500px] lg:w-[600px] xl:w-[400px]   rounded shadow-lg mb-6 md:mb-0 object-cover"
                />

                <div className="text-white mt-6 md:mt-8 xl:mt-0  text-base md:text-lg lg:text-2xl xl:text-lg leading-relaxed xl:w-1/2 space-y-4 ">
                    <p>
                        Arrive in style with our Fast Track service! Our expert team will escort you through dedicated channels, bypassing long immigration and customs queues.
                    </p>
                    <p>
                        Enjoy a seamless and stress-free arrival experience, saving you time and hassle.
                    </p>
                    <p>
                        Let us take care of the formalities while you focus on your journey ahead.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Fasttrack;
