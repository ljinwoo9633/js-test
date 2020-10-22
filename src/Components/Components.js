import React from 'react';
import Music from '../Public/Music/music.mp4';

import './Components.css';
import { SceneContainer } from './Planets';


export let HomeContainer = ({
    planet,
    isLoadingPlanet,
    isMenuOpen,
    handleOnChangingPlanet,
    handleOnChangingIsMenuOpen
}) => {
    return(
        <>
            <SolarMenu
                isMenuOpen={isMenuOpen}
                handleOnChangingPlanet={handleOnChangingPlanet}
                handleOnChangingIsMenuOpen={handleOnChangingIsMenuOpen}
            />
            <SceneContainer 
                planet={planet}
                isLoadingPlanet={isLoadingPlanet}
            />
            <video
                src={Music}
                autoPlay="true"
                loop="true"
            >
            </video>
        </>
    )
}

let SolarMenu = ({
    isMenuOpen,
    handleOnChangingIsMenuOpen,
    handleOnChangingPlanet
}) => {
    if(isMenuOpen)
    {
        return(
            <ul className="planetMenu">
                <li>
                    <button className="planetMenuBtn" onClick={handleOnChangingIsMenuOpen}>
                        내리기
                    </button>
                </li>
                <li>
                    <button
                        value="solar"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        태양계
                    </button>
                </li>
                <li>
                    <button 
                        value="mercury"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        수성
                    </button>
                </li>
                <li>
                    <button 
                        value="venus"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        금성
                    </button>
                </li>
                <li>
                    <button 
                        value="earth"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        지구
                    </button>
                </li>
                <li>
                    <button 
                        value="mars"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        화성
                    </button>
                </li>
                <li>
                    <button 
                        value="jupiter"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        목성
                    </button>
                </li>
                <li>
                    <button 
                        value="saturn"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        토성
                    </button>
                </li>
                <li>
                    <button 
                        value="uranus"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        천왕성
                    </button>
                </li>
                <li>
                    <button 
                        value="neptune"
                        onClick={handleOnChangingPlanet}
                        className="planetMenuBtn"
                    >
                        해왕성
                    </button>
                </li>
            </ul>
        )
    }
    else
    {
        return(
            <ul className="planetMenu">
                <li>
                    <button className="planetMenuBtn" onClick={handleOnChangingIsMenuOpen}>
                        내리기
                    </button>
                </li>
            </ul>
        )
    }
}