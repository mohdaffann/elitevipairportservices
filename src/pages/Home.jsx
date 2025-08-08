import ServiceCards from "../components/ServiceCards";
import { NavLink, useNavigate } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
function Home() {
    const nav = useNavigate();
    return (
        <div className="w-full bg-gray-800 overflow-x-hidden">
            <section className="relative w-full h-screen  ">
                <div className="absolute  w-full h-full inset-0 z-0 ">
                    <ImageSlider />

                </div>
                <div className="relative z-10 flex items-center  justify-center h-full pointer-events-none">
                    <div className="text-center text-black max-w-4xl mx-auto px-4 pointer-events-auto">
                        <div className="items-center flex">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide mr-2">
                                ELITE
                            </h1>
                            <p className="text-xl font-semibold md:text-2xl mb-8 tracking-wide">
                                VIP AIRPORT SERVICES
                            </p>
                        </div>

                        <p className=" text-xl md:text-3xl mb-8 font-semibold tracking-wides">Effortless Travel . Elite Experience</p>


                        <button className="bg-gray-900 border border-black   text-white cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
                            onClick={() => nav('/selectCountry')}
                        >
                            Book Your Experience
                        </button>


                    </div>
                </div>

            </section>
            <section className="py-14">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
                    <div className="flex items-center justify-center mb-4 ">
                        <h2 className="text-white text-2xl md:text-4xl font-bold mb-5">PREMIUM AIRPORT SERVICES</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-5 place-items-center mb-4">
                        <ServiceCards title={'Meet & Greet'} img={'/Meet.jpg'} nav={'/services/meet-and-greet'} textcolour={'white'} />


                        <ServiceCards title={'Fast Track'} img={'/FastTrack.png'} textcolour={'white'} nav={'/fasttrack'} />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-5 place-items-center">
                        <ServiceCards title={'Vip Lounge Pass'} img={'/Lounge.jpg'} textcolour={'white'} nav={'lounge'} />
                        <ServiceCards title={'Transport Services'} img={'/Transport.jpg'} textcolour={'white'} />
                    </div>
                </div>

            </section>

        </div>
    )

}

export default Home;
