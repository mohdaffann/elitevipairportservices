import React from "react";
import ServiceCards from "../components/ServiceCards";
import { Link, useNavigate, } from 'react-router-dom'
function CountrySelection() {
    const nav = useNavigate();
    const airports = [{ name: 'london-heathrow', img: '/LondonEye.jpg' }, { name: 'london-gatwick', img: '/LondonEye.jpg' }]
    return (
        <section className="py-16 mt-9">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center  ">
                <h1 className="text-center text-white text-3xl font-bold mb-3">Book A SERVICE</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">

                    {airports.map((item, ind) => (
                        <ServiceCards key={ind} textcolour={'white'} img={item.img} title={item.name.replace(/-/g, ' ').split(' ').map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')}
                            nav={`/book/${item.name}`}
                        />
                    ))}

                </div>
            </div>
        </section>


    )
}

export default CountrySelection;
