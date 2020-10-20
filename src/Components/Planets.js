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
import { PlanetMenu } from './Components';


export let HomeContainer = ({
    isMenuOpen,
    isLoadingPlanet,
    planet,
    handleOnChangingPlanet,
    handleOnChangingIsMenuOpen
}) => {
    return(
        <>
            <SceneContainer
                isLoadingPlanet={isLoadingPlanet}
                planet={planet}
            />
            <PlanetMenu
                isLoadingPlanet={isLoadingPlanet}
                isMenuOpen={isMenuOpen}
                handleOnChangingPlanet={handleOnChangingPlanet}
                handleOnChangingIsMenuOpen={handleOnChangingIsMenuOpen}
            />
        </>
    )
}


let SceneContainer = ({
    isLoadingPlanet,
    planet
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
            <PlanetContainer
                isLoadingPlanet={isLoadingPlanet}
                planet={planet}
            />
        </a-scene>
    )
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
    planet
}) => {
    if(isLoadingPlanet)
    {
        return(
            <Planet
                planetName={"loading"}
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
                />
            )
        }
        else if(planet === 'saturn')
        {
            return(
                <RingPlanet
                    planetName={planet}
                    planetRingName={'saturnRing'}
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
    planetName
}) => {
    return(
        <a-sphere
            radius = "1.25"
            position = "0 1.25 -5"
            material = {`src:#${planetName};`}
            shadow = "cast: true; receive: true">
        </a-sphere>
    )
}

let RingPlanet = ({
    planetName,
    planetRingName,
}) => {
    return(
        <>
            <a-sphere
                radius = "1.25"
                position = "0 1.25 -5"
                material = {`src:#${planetName};`}
                shadow = "cast: true; receive: true">
            </a-sphere>
            <a-ring 
                radius-inner="1.4" 
                radius-outer="1.8"
                position = "0 1.25 -5"
                material = {`src:#${planetRingName}`}
                shadow = "cast: true; receive: true"
            >
            </a-ring>
        </>
    )
}