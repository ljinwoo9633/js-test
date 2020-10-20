import React from 'react';
import { HomeContainer } from './Planets';

let planets = [
    'earth',
    'mars',
    'mercury',
    'venus',
    'jupiter',
    'saturn',
    'uranus',
    'neptune'
];

class Home extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true,
            planet: 'earth',
            isLoadingPlanet: true,
            isMenuOpen: false,
        }
    }

    SetPlanet = (planet) => {
        if(planet === '' || planet === undefined || planet === null)
        {
            this.setState(
                {
                    planet: 'earth'
                }
            );
        }
        else
        {
            const INDEX_OF_PLANET_IN_PLANETS = planets.indexOf(planet);

            if(INDEX_OF_PLANET_IN_PLANETS === -1)
            {
                this.setState(
                    {
                        planet: 'blackhole'
                    }
                )
            }
            else
            {
                this.setState(
                    {
                        planet
                    }
                )
            }
        }
    }

    UNSAFE_componentWillMount = async () => {
        let search = new URLSearchParams(window.location.search);
        let planet = search.get('planet');
        
        await this.SetPlanet(planet);

        this.setState(
            {
                isLoading: false,
                isLoadingPlanet: false
            }
        )
    }

    HandleOnChangingPlanet = async (event) => {
        event.preventDefault();
        this.setState(
            {
                isLoadingPlanet: true
            }
        );

        const PLANET = await event.target.value;

        await this.SetPlanet(PLANET);
        await this.props.history.push(`?planet=${PLANET}`);

        await this.setState(
            {
                isLoadingPlanet: false,
                isMenuOpen: false
            }
        )
    }

    HandleOnChangingIsMenuOpen = (event) => {
        event.preventDefault();
        if(this.state.isMenuOpen)
        {
            this.setState(
                {
                    isMenuOpen: false
                }
            )
        }
        else
        {
            this.setState(
                {
                    isMenuOpen: true
                }
            )
        }
    }

    render()
    {
        let {
            isLoading,
            isLoadingPlanet,
            planet,
            isMenuOpen
        } = this.state;
        return(
            isLoading
            ?
            (<></>)
            :
            (<HomeContainer
                isLoadingPlanet={isLoadingPlanet}
                planet={planet}
                isMenuOpen={isMenuOpen}
                handleOnChangingIsMenuOpen={this.HandleOnChangingIsMenuOpen}
                handleOnChangingPlanet={this.HandleOnChangingPlanet}
            />)
        )
    }
}

export default Home;