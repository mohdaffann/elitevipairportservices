import React from "react";
import BookingServiceCard from "../components/BookingServiceCard";
import { useNavigate, useParams } from "react-router-dom";
function BookingHome() {
    const { airport } = useParams();
    const nav = useNavigate();
    const services = [
        {
            title: "Departure", type: "departure",
            para: [
                'Seamless Departures, Stress-Free Travel.',
                'Experience the ultimate in airport convenience with Elite VIP Airport Service. Our expert team will greet you at the airport terminal, and guide you through check-in, security, and immigration with ease. We will escort you to your departure gate, so you can focus on your journey.',
                'Book now and experience the difference.',
                'Elite VIP Airport Service - Your partner in stress-free travel.'
            ]
        },
        {
            title: "Arrival", type: "arrival",
            para: [
                'Stress-Free Arrivals, Every Time.',
                'Arrive with ease and make a smooth transition to your next destination with our expert airport meet and greet services. Our friendly and professional representatives will greet you upon arrival, handle your luggage, and escort you through customs and immigration . We will then accompany you to your awaiting vehicle, ensuring a seamless and hassle-free experience.',
                'Book now and experience the difference.',
                'Elite VIP Airport Service - Your partner in stress-free travel.'
            ]
        },
        ,
        {
            title: "Transit", type: "transit",
            para: [
                'Effortless Transit, Total Relaxation.',
                'Make your connecting flight a breeze with Elite VIP Airport Service. Our dedicated greeter will meet you upon arrival flight, escort you to a luxurious airport lounge where you can unwind and recharge, and then personally accompany you to your next departing gate, handling luggage and formalities along the way. Sit back, relax, and let us take care of the rest.',
                'Book now and experience the difference.',
                'Elite VIP Airport Service - Your partner in stress-free travel.'
            ]
        },
    ];
    return (
        <div className="mt-16 px-4  bg-none">
            <h1 className="text-2xl md:text-4xl font-bold text-center mt-10  capitalize text-white">{airport.replace(/-/g, " ")} Booking</h1>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.title} className="flex justify-center">
                        <BookingServiceCard key={service.type} title={service.title}
                            onBookNow={() => nav(`/book/${airport}/${service.type}`)}
                            para={service.para}
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default BookingHome;
