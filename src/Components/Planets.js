import React from 'react';
import MERCURY from '../Public/Images/mercury.jpg';
import EARTH from '../Public/Images/earth.jpeg';
import MARS from '../Public/Images/mars.jpg';
import VENUS from '../Public/Images/venus.jpg';
import JUPITER from '../Public/Images/jupiter.jpg';
import SATURN from '../Public/Images/saturn.jpg';
import SATURN_RING from '../Public/Images/saturnRing.png';
import URANUS from '../Public/Images/uranus.jpg';
import NEPTUNE from '../Public/Images/neptune.jpg';
import STARS from '../Public/Images/stars.jpg';
import LOADING from '../Public/Images/loading.jpg';


export let SceneContainer = ({
    planet,
    isLoadingPlanet
}) => {
    return(
        <a-scene>
            <SceneAssets
                earthScr={EARTH}
                marsSrc={MARS}
                mercurySrc={MERCURY}
                venusSrc={VENUS}
                jupiterSrc={JUPITER}
                saturnSrc={SATURN}
                saturnRingSrc={SATURN_RING}
                uranusSrc={URANUS}
                neptuneSrc={NEPTUNE}
                starsSrc={STARS}
                loadingSrc={LOADING}
            />
            <SceneSky />
            <SolarSystem 
                planet={planet}
                isLoadingPlanet={isLoadingPlanet}
            />
        </a-scene>
    )
}

let SolarSystem = ({
    planet,
    isLoadingPlanet
}) => {
    if(isLoadingPlanet)
    {
        return(<></>)
    }
    else
    {
        if(planet === 'solar')
        {
            return(
                <>
                    <Planet
                        planetName="mercury"
                        distance="7"
                        revolution="5000"
                        rotating="5000"
                    />
                    <Planet
                        planetName="venus"
                        distance="14"
                        revolution="7500"
                        rotating="5000"
                    />
                    <Planet
                        planetName="earth"
                        distance="21"
                        revolution="10000"
                        rotating="5000"
                    />
                    <Planet
                        planetName="mars"
                        distance="28"
                        revolution="12500"
                        rotating="5000"
                    />
                    <Planet
                        planetName="jupiter"
                        distance="35"
                        revolution="15000"
                        rotating="5000"
                    />
                    <RingPlanet
                        planetName="saturn"
                        planetRingName="saturnRing"
                        distance="42"
                        revolution="17500"
                        rotating="5000"
                    />
                    <Planet
                        planetName="uranus"
                        distance="49"
                        revolution="20000"
                        rotating="5000"
                    />
                    <Planet
                        planetName="neptune"
                        distance="56"
                        revolution="22500"
                        rotating="5000"
                    />
                </>
            )
        }
        else
        {
            return(
                <PlanetContainer
                    distance={5}
                    isLoadingPlanet={isLoadingPlanet}
                    planet={planet}
                    revolution={0}
                    rotating={5000}
                />
            )
        }
    }

}

let SceneSky = () => {
    return(
        <a-sky
            material = {`src:#stars;`}
        >
        </a-sky>
    )
}

let SceneAssets = ({
    earthScr,
    marsSrc,
    mercurySrc,
    venusSrc,
    jupiterSrc,
    saturnSrc,
    saturnRingSrc,
    uranusSrc,
    neptuneSrc,
    starsSrc,
    loadingSrc
}) => {
    return(
        <a-assets>
            <img id="earth" alt="earth" src={earthScr} crossOrigin="anonymous" />
            <img id="mars" alt="mars" src={marsSrc} crossOrigin="anonymous" />
            <img id="mercury" alt="mercury" src={mercurySrc} crossOrigin="anonymous" />
            <img id="venus" alt="venus" src={venusSrc} crossOrigin="anonymous" />
            <img id="jupiter" alt="jupiter" src={jupiterSrc} crossOrigin="anonymous" />
            <img id="saturn" alt="saturn" src={saturnSrc} crossOrigin="anonymous" />
            <img id="saturnRing" alt="saturnRing" src={saturnRingSrc} crossOrigin="anonymous" />
            <img id="uranus" alt="uranus" src={uranusSrc} crossOrigin="anonymous" />
            <img id="neptune" alt="neptune" src={neptuneSrc} crossOrigin="anonymous" />
            <img id="stars" alt="stars" src={starsSrc} crossOrigin="anonymous" />
            <img id="loading" alt="loading" src={loadingSrc} crossOrigin="anonymous" />
        </a-assets>
    )
}

let PlanetContainer = ({
    isLoadingPlanet,
    planet,
    rotating,
    revolution,
    distance
}) => {
    if(isLoadingPlanet)
    {
        return(
            <Planet
                planetName={"loading"}
                rotating={rotating}
                revolution={revolution}
                distance={distance}
            />
        )
    }
    else
    {
        if(
            planet === 'mercury' ||
            planet === 'venus' ||
            planet === 'earth' ||
            planet === 'mars' ||
            planet === 'jupiter' ||
            planet === 'uranus' ||
            planet === 'neptune'
        )
        {
            return(
                <Planet
                    planetName={planet}
                    rotating={rotating}
                    revolution={revolution}
                    distance={distance}
                />
            )
        }
        else if(planet === 'saturn')
        {
            return(
                <RingPlanet
                    planetName={planet}
                    planetRingName={'saturnRing'}
                    rotating={rotating}
                    revolution={revolution}
                    distance={distance}
                />
            )
        }
        else
        {
            return(<></>)
        }
    }
}

let Planet = ({
    planetName,
    rotating,
    revolution,
    distance
}) => {
    return(
        <a-entity
            rotation="0 0 0"
            animation={`property: rotation; to: 0 360 0; loop: true; dur: ${revolution}; easing: linear`}
        >
            <a-sphere
                radius = "1.25"
                position = {`${distance} 1.25 -2`}
                material = {`src:#${planetName};`}
                rotation="0 0 0"
                roughness="0.6"
                animation={`property: rotation; to: 0 360 0; loop: true; dur: ${rotating}; easing: linear`}
            >

            </a-sphere>
        </a-entity>
    )
}

let RingPlanet = ({
    planetName,
    distance,
    planetRingName,
    rotating,
    revolution
}) => {
    return(
        <a-entity
            animation={`property: rotation; to: 0 360 0; loop: true; dur: ${revolution}; easing: linear`}
        >
            <a-sphere
                radius = "1.25"
                position = {`${distance} 1.25 -2`}
                material = {`src:#${planetName};`}
                shadow = "cast: true; receive: true"
                animation={`property: rotation; to: 0 360 0; loop: true; dur: ${rotating}; easing: linear`}
            >        
            </a-sphere>
            <a-ring 
                radius-inner="1.4" 
                radius-outer="1.8"
                position = {`${distance} 1.25 -2`}
                material = {`src:#${planetRingName}`}
                shadow = "cast: true; receive: true"
                rotation="60 60 60"
            >
            </a-ring>
        </a-entity>
    )
}