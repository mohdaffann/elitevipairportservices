import React from "react";
import { Link } from "react-router-dom";
function ServiceCards({ title, img, nav, textcolour }) {
    return (
        <div className="group relative h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer">

            <div className="absolute inset-0 w-full h-full hover:scale-125 active:scale-125 transition duration-200 ease-in-out">
                <img
                    src={img}
                    alt="London Heathrow"
                    className="w-full h-full object-cover "
                />

            </div>


            <div className={`absolute inset-0 flex flex-col justify-end p-6 text-${textcolour} `}>
                {/* Title - moves up on hover */}
                <h3 className="text-2xl font-bold mb-0 transform transition-transform duration-300 group-hover:-translate-y-8 group-active:-translate-y-8">
                    {title}
                </h3>

                {/* Book Now Button - slides in from bottom */}
                <div className="transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
                    <Link className={`text-sm cursor-pointer text-${textcolour} transition-colors duration-200`}
                        to={nav}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards;
