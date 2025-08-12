import { MinusCircle, PlusCircle } from "lucide-react";
import React from "react";
import { useState } from "react";

function LocationAccordion() {
    const [ind, setInd] = useState(null);

    const locationData = [
        {
            country: "FRANCE",
            cities: ["Paris -CDG", "Nice -NCE"]
        },
        {
            country: "USA",
            cities: ["Los Angeles -LAX", "Dallas -DFW", "New York -JFK", "Miami -MIA", "San Francisco -SFO", "San Diego -SAN"]
        },
        {
            country: "SPAIN",
            cities: ["Barcelona -BCN", "Madrid -MAD"]
        },
        {
            country: "ITALY",
            cities: ["Rome -FCO", "Venice -VCE", "Milan -LIN"]
        }, {
            country: "UAE",
            cities: ["Abu Dhabi -AUH", "Dubai -DXB"]
        }
    ];

    const openAcc = (index) => {
        setInd(ind === index ? null : index);
    }

    return (
        <div className="w-full max-w-[500px]  mt-20 mx-auto p-4  min-h-[calc(100vh-200px)] ">
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
                        <div className="">
                            {item.cities.map((city, cityIndex) => (
                                <div
                                    key={city}
                                    className={`p-3 pl-6 text-white bg-transparent ${cityIndex !== item.cities.length - 1 ? " border-opacity-30" : ""
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