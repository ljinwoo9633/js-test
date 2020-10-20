import React from 'react';

import './Components.css';

export let PlanetMenu = ({
    isMenuOpen,
    isLoadingPlanet,
    handleOnChangingPlanet,
    handleOnChangingIsMenuOpen
}) => {
    if(isLoadingPlanet)
    {
        return(<></>)
    }
    else
    {
        if(isMenuOpen)
        {
            return(
                <ul className="planetMenu">
                    <li>
                        <button className="planetMenuBtn" onClick={handleOnChangingIsMenuOpen}>
                            올리기
                        </button>
                    </li>
                    <li>
                        <button
                            value="mercury"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}          
                        >
                            수성
                        </button>
                    </li>
                    <li>
                        <button
                            value="venus"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
                        >
                            금성
                        </button>
                    </li>
                    <li>
                        <button
                            value="earth"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
                        >
                            지구
                        </button>
                    </li>
                    <li>
                        <button
                            value="mars"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
                        >
                            화성
                        </button>
                    </li>
                    <li>
                        <button
                            value="jupiter"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
                        >
                            목성
                        </button>
                    </li>
                    <li>
                        <button
                            value="saturn"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
                        >
                            토성
                        </button>
                    </li>
                    <li>
                        <button
                            value="uranus"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
                        >
                            천왕성
                        </button>
                    </li>
                    <li>
                        <button
                            value="neptune"
                            className="planetMenuBtn"
                            onClick={handleOnChangingPlanet}
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

}
