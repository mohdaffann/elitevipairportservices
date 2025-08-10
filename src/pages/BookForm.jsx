import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import { useParams, useNavigate, Link } from "react-router-dom";

const BookForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const { airport, serviceType } = useParams();
    console.log(serviceType, airport);

    const nav = useNavigate();
    function genTimeSlot() {
        const slots = [];
        for (let hr = 0; hr < 24; hr++) {
            for (let min = 0; min < 60; min += 5) {
                const hour = String(hr).padStart(2, '0');
                const minute = String(min).padStart(2, '0');
                slots.push(`${hour} : ${minute}`)
            }
        }
        return slots;
    }
    const timeSlots = genTimeSlot();
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();

    const onSubmit = (data) => {
        if (data.compName) return;
        setSubmitting(true);
        const payload = { serviceType, airport, ...data }
        console.log("Booked Successfully", payload);
        let msgBody = `
        -Service Type : ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}
        -airport : ${airport}
        Passenger Details :
        -Name : ${data.LeadPassengerName}
        -Email : ${data.email}
        -Phone : ${data.phone}
        -Adults : ${data.adults}
        -Childern : ${data.children}
        -Additional Services:
        -Golf Cart : ${data.golfCart ? 'Yes' : 'No'}
        -Baggage Porter : ${data.baggagePorter ? 'Yes' : 'No'}
        -Transportation : ${data.transportation ? 'Yes' : 'No'}
        -Fast Track : ${data.fastTrack ? 'Yes' : 'No'}
        -Lounge Pass : ${data.loungePass ? 'Yes' : 'No'}
        -Number of Bags : ${data.bags}
        -Additional Info : ${data.additionalInfo}
        `;
        if (serviceType === 'arrival') {
            msgBody += `
            Flight Details :
            -Arrival Date : ${formatDate(data.arrivalDate)}
            -Flight Time : ${data.time}
            -Departure Airport : ${data.departureAirport}
            -Arrival Airport : ${data.arrivalAirport}
            -Flight Number : ${data.flightNumber}
            `;
        }
        else if (serviceType === 'departure') {
            msgBody += `
            Flight Details :
            -Departure Date : ${formatDate(data.departureDate)}
            -Flight Time : ${data.time}
            -Departure Airport : ${data.departureAirport}
            -Destination Airport : ${data.destinationAirport}
            -Flight Number : ${data.flightNumber}
            `;
        }
        else if (serviceType === 'transit') {
            msgBody += `
            Flight Details :
            -Transit Date : ${formatDate(data.transitDate)}
            -Arrival Airport : ${data.arrivalAirport}
            -Arrival Flight Time : ${data.arrivalflightTime}
            -Arrival Flight Number : ${data.arrivalflightNumber}
            -Departure Airport : ${data.departureAirport}
            -Departure Flight Time : ${data.departureflightTime}
            -Departure Flight Number : ${data.departureflightNumber}
            `;
        }
        const emailParams = {
            name: `${data.LeadPassengerName}`,
            email: data.email,
            title: `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}-${airport}`,
            message: msgBody.trim()

        }
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICEID,
            import.meta.env.VITE_EMAILJS_TEMPLATEID,
            emailParams,
            import.meta.env.VITE_EMAILJS_PUBLICID
        )
            .then((res) => {
                console.log('mail response', res);
                alert('We appreciate your booking with us. A member of our team will contact you soon to confirm the details.');
            }
            )
            .catch((err) => {
                console.log('error while submitting booking', err);
                alert('Error in Booking the form , Try Again!')

            })
            .finally(() => {
                reset();
                setSubmitting(false);
            })

    };
    const handleServiceType = (e) => {
        const selected = e.target.value;
        nav(`/book/${airport}/${selected}`)
    }

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-5xl  mx-auto px-3.5 bg-gray-800 py-28 space-y-6 text-white"
        >
            <div>
                <label className="block mb-1 text-2xl text-white font-bold">Select Service</label>
                <select value={serviceType} onChange={handleServiceType} className=" cursor-pointer w-full border rounded-sm p-2 bg-white text-gray-800">
                    <option value="arrival">Arrival</option>
                    <option value="departure">Departure</option>
                    <option value="transit">Transit</option>
                </select>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">{`${airport?.replace(/-/g, " ").split(' ').map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')} ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Booking`}</h2>

            <div className="grid grid-rows-1 gap-1 md:grid-cols-3 md:gap-4">
                <div>
                    <label className="block text-sm font-medium">Adults</label>
                    <input
                        type="number"
                        min="1"
                        {...register("adults", { required: true })}
                        className="w-full border rounded-md p-2 bg-white text-gray-800"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Children</label>
                    <input
                        type="number"
                        min="0"
                        {...register("children")}
                        className="w-full border rounded-md p-2 bg-white text-gray-800"
                    />
                </div>

            </div>



            {serviceType === 'arrival' && (
                <div>
                    <label className="block text-sm font-medium mb-1">Arrival Date</label>
                    <input
                        type="date"
                        {...register("arrivalDate", { required: true })}
                        className="w-full border rounded-md p-2 bg-white text-gray-800"
                    />
                </div>
            )}
            {serviceType === 'departure' && (
                <div>
                    <label className="block text-sm font-medium mb-1">Departure Date</label>
                    <input
                        type="date"
                        {...register("departureDate", { required: true })}
                        className="w-full border rounded-md p-2 bg-white text-gray-800"
                    />
                </div>
            )}
            {serviceType === 'transit' && (
                <div>
                    <label className="block text-sm font-medium mb-1">Transit Date</label>
                    <input
                        type="date"
                        {...register("transitDate", { required: true })}
                        className="w-full border rounded-md p-2 bg-white text-gray-800"
                    />
                </div>
            )}



            {(serviceType === 'arrival' || serviceType === 'departure') && (
                <div>

                    <label className="block text-sm font-medium mb-1">Flight Time</label>
                    <select
                        {...register("time", { required: true })}
                        className="w-full border rounded-md p-2 bg-white text-gray-800"
                    >
                        {timeSlots.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
            )}




            {serviceType === 'arrival' && (
                <div className="grid grid-rows-1 gap-1.5 md:grid-cols-2 md:gap-2.5">
                    <div>
                        <label className="block text-sm font-medium">Departure Airport</label>
                        <input
                            type="text"
                            {...register("departureAirport", { required: true })}
                            className="w-full border rounded-md p-2 bg-white text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Arrival Airport</label>
                        <input
                            type="text"
                            {...register("arrivalAirport", { required: true })}
                            className="w-full border rounded-md p-2 bg-white text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Flight Number</label>
                        <input
                            type="text"
                            {...register("flightNumber", { required: true })}
                            className="w-full border rounded-md p-2 bg-white text-gray-800"
                        />
                    </div>
                </div>
            )}
            {
                serviceType === 'departure' && (
                    <div className="grid grid-rows-1 gap-1  md:grid-cols-3 md:gap-2.5">
                        <div>
                            <label className="block text-sm font-medium">Departure Airport</label>
                            <input type="text" {...register("departureAirport", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Destination Airport</label>
                            <input type="text" {...register("destinationAirport", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium"> Flight Number</label>
                            <input
                                type="text"
                                {...register("flightNumber", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            />
                        </div>
                    </div>
                )
            }
            {serviceType === 'transit' && (
                <div className="flex flex-col">
                    <div className="flex items-center flex-col md:flex-row justify-between gap-2 w-full">
                        <div className="w-full">
                            <label className=" text-sm font-medium">Arrival Airport</label>
                            <input
                                type="text"
                                {...register("arrivalAirport", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800" // 
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium">Arrival Time</label>
                            <select
                                {...register("arrivalflightTime", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            >
                                {timeSlots.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <label className=" text-sm font-medium">Arrival Flight Number</label>
                            <input
                                type="text"
                                {...register("arrivalflightNumber", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            />
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:flex-row  gap-2">
                        <div className="w-full">
                            <label className=" text-sm font-medium">Departure Airport</label>
                            <input type="text" {...register("departureAirport", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            />
                        </div>
                        <div className="w-full">
                            <label className=" text-sm font-medium">Departure Time</label>
                            <select
                                {...register("departureflightTime", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            >
                                {timeSlots.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <label className=" text-sm font-medium">Departure Flight Number</label>
                            <input
                                type="text"
                                {...register("departureflightNumber", { required: true })}
                                className="w-full border rounded-md p-2 bg-white text-gray-800"
                            />
                        </div>
                    </div>
                </div>
            )}



            {/* Personal Info */}

            <div className="w-full">
                <label className="block text-sm font-medium">Lead Passenger Name</label>
                <input
                    type="text"
                    {...register("LeadPassengerName", { required: true })}
                    className="w-full border rounded-md p-2 text-gray-800 bg-white"
                />
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full border rounded-md p-2 text-gray-800 bg-white"
                    />
                </div>
                <div >
                    <div className="flex   items-center">
                        <label className="block text-sm font-medium mr-1">Phone</label>
                        <span className="text-sm  text-gray-200">(Include the country code)</span>
                    </div>

                    <input
                        type="tel"
                        {...register("phone", { required: true })}
                        className="w-full border rounded-md p-2 text-gray-800 bg-white"
                    />
                </div>
            </div>


            <div>
                <label className="block text-sm font-medium mb-1">Number of Bags</label>
                <input
                    type="number"
                    min="0"
                    {...register("bags")}
                    className="w-full border rounded-md p-2 text-gray-800 bg-white"
                />
            </div>


            <label className="block text-sm font-medium mb-1">Additional Services</label>
            <div className="flex flex-col md:flex-row space-x-4 items-start">
                <label className="flex items-center justify-center space-x-1 cursor-pointer">
                    <input type="checkbox" {...register('golfCart')} className="form-checkbox cursor-pointer text-gray-800 " />
                    <span>Golf Cart</span>
                </label>
                <label className="flex items-center justify-center space-x-1 cursor-pointer">
                    <input type="checkbox" {...register('baggagePorter')} className="form-checkbox cursor-pointer text-gray-800 " />
                    <span>Baggage Porter</span>
                </label>

                <label className="flex items-center justify-center space-x-1 cursor-pointer">
                    <input type="checkbox" {...register('fastTrack')} className="form-checkbox cursor-pointer text-gray-800 " />
                    <span>Fast Track</span>
                </label>
                <label className="flex items-center justify-center space-x-1 cursor-pointer">
                    <input type="checkbox" {...register('loungePass')} className="form-checkbox cursor-pointer text-gray-800 " />
                    <span>Lounge Pass</span>
                </label>
                <label className="flex items-center justify-center space-x-1 cursor-pointer">
                    <input type="checkbox" {...register('transportation')} className="form-checkbox cursor-pointer text-gray-800 " />
                    <span>Transportation</span>
                </label>

            </div>


            <div className="w-full">
                <textarea className="w-full bg-white text-black border rounded-md px-3 py-2 text-sm resize-y" rows={4} placeholder="Type any additional info here..."
                    {...register('additionalInfo')}
                />
            </div>


            <div className="flex items-start  gap-2">
                <div className="flex items-center gap-2">
                    <input type="checkbox"
                        {...register('termsaccepted', { required: true })}
                        className="form-checkbox text-gray-800 cursor-pointer"
                    />
                    <label >
                        I accept the{' '} <Link to={'/termsandconditions'} className="underline text-white hover:text-gray-300">Terms and Conditions</Link>.
                    </label>
                </div>

            </div>

            <input type="text"  {...register('compName')} className="absolute left-[-9999px] " tabIndex={-1} autoComplete="off" />


            <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-none border cursor-pointer border-white hover:bg-white hover:text-gray-800 text-white py-2 px-4 rounded-sm transition
                    ${submitting ? 'opacity-50 cursor-not-allowed bg-none text-white hover:text-gray-800 hover:bg-white' : ''}
                    `}
            >
                {submitting ? 'Booking...' : 'Book Now'}
            </button>
        </form>
    );
};

export default BookForm

