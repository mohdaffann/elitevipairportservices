import React, { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
function ImageSlider() {
    const [mobile, Setmobile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const checkInterface = () => {
            Setmobile(window.innerWidth < 1026)
        }
        checkInterface();
        setIsLoaded(true);
        window.addEventListener('resize', checkInterface)
        return () => window.removeEventListener('resize', checkInterface)
    }, [])

    const desktoppics = ['/LondonEye.jpg', '/LondonBridge.jpg', '/Hollywood.jpg', '/Eiffel.jpg']
    const mobilePics = ['/LondonTower.jpg', '/LondonBridgeMobile.jpg', '/Hollywood.jpg', '/Eiffel.jpg']
    const pics = mobile ? mobilePics : desktoppics;

    if (!isLoaded) return null;
    return (

        <AwesomeSlider organicArrows={true} bullets={false} mobileTouch={true} className="h-screen "  >
            {pics.map((item, ind) => (
                <div key={ind} data-src={item} />
            ))}
        </AwesomeSlider>



    )
}

export default ImageSlider;
