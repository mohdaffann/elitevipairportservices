import { MinusCircle, PlusCircle } from "lucide-react";
import React from "react";
import { useState } from "react";

function LocationAccordion() {
    const [ind, setInd] = useState(null);

    const locationData = [
        {
            country: "France",
            cities: ["Nice"]
        },
        {
            country: "USA",
            cities: ["Los Angeles", "Dallas", "New York", "Miami", "San Francisco", "San Diego"]
        },
        {
            country: "Spain",
            cities: ["Barcelona", "Real Madrid"]
        },
        {
            country: "Italy",
            cities: ["Rome", "Venice", "Milan"]
        }, {
            country: "UAE",
            cities: ["Abu Dhabi", "Dubai"]
        }
    ];

    const openAcc = (index) => {
        setInd(ind === index ? null : index);
    }

    return (
        <div className="w-[500px] mt-20 mx-auto p-4  min-h-[calc(100vh-200px)] flex flex-col justify-start">
            <h1 className="text-4xl text-white font-bold text-center mb-4">LOCATIONS</h1>
            {locationData.map((item, index) => (
                <div key={index} className="border border-white mb-2">
                    <button
                        className="flex cursor-pointer justify-between items-center w-full text-left font-medium text-white p-4 bg-transparent  hover:bg-opacity-10 transition-colors duration-200 focus:outline-none"
                        onClick={() => openAcc(index)}
                    >
                        {item.country}
                        <span className="transform transition-transform duration-200">
                            {ind === index ? <MinusCircle className="text-white" /> : <PlusCircle className="text-white" />}
                        </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ind === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="border-t border-white">
                            {item.cities.map((city, cityIndex) => (
                                <div
                                    key={city}
                                    className={`p-3 pl-6 text-white bg-transparent ${cityIndex !== item.cities.length - 1 ? "border-b border-white border-opacity-30" : ""
                                        }`}
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LocationAccordion;