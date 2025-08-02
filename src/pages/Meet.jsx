import React from "react";

function Meet() {
    return (
        <div className="w-full flex flex-col items-center px-4 md:px-8 py-10 mt-8">
            <h1 className="text-center text-white text-4xl font-bold mb-6">MEET & GREET</h1>
            <div className="w-full flex flex-col items-center space-y-8 max-w-6xl">
                <img src="/Meet.jpg" className="w-full max-w-3xl rounded-lg shadow-lg object-cover" />

                <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl text-center">
                    Our Meet & Greet service ensures a smooth, personalized airport experience from the moment you arrive. Whether you're landing or taking off, our professional greeters will assist you with fast-track immigration, baggage handling, and escorting you through the airport with ease. Enjoy a hassle-free journey with priority access and dedicated support, designed for comfort, efficiency, and a touch of VIP luxury. Ideal for first-time travelers, business executives, seniors, and families, our Meet & Greet service is the perfect start or end to your trip.
                </p>

            </div>
        </div>
    )
}

export default Meet;
