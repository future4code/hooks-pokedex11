import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import {
    TypeAndMovesContainer,
    PokeInfosContainer,
    ImgWrapper,
    ImagesContainer,
    StatsContainer,
    TitleContainer,
    TypesContainer,
    MovesContainer,
    HeaderDetailPage,
    ButtonList

} from "./DetailsPageStyled";
import picachu from "../../img/pokemon.png"
import pokelist from "../../img/pokelist.png"
import { Logo } from "../homePage/HomePageStyled"
import { goBack } from "../../routes/Coordinator"

import GlobalStateContext from "../../global/GlobalStateContext"

const DetailsPage = () => {

    const [selectedPokemon, setSelectedPokemon] = useState({})
    const { name } = useParams()
    const { pokemons } = useContext(GlobalStateContext)
    const navigate = useNavigate()



    useEffect(() => {
        const currentPokemon = pokemons.find((item) => {
            return item.name === name
        })
        setSelectedPokemon(currentPokemon)
    }, [])


    return (
        <div>
            < HeaderDetailPage>
                <ButtonList onClick={() => goBack(navigate)} ><img src={pokelist} alt="picachuHeader" /></ButtonList>
                <Logo src={picachu} />
            </ HeaderDetailPage>
            <PokeInfosContainer>
                {selectedPokemon && selectedPokemon.sprites &&
                    <ImagesContainer>

                        <ImgWrapper src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
                        <ImgWrapper src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} />
                    </ImagesContainer>
                }
                <StatsContainer>
                    <TitleContainer>Poderes</TitleContainer>
                    {selectedPokemon && selectedPokemon.stats && selectedPokemon.stats.map((stat) => {
                        return (
                            <p key={stat.stat.name}>
                                <strong>{stat.stat.name}:</strong>  {stat.base_stat}
                            </p>
                        )
                    })
                    }
                </StatsContainer>
                <TypeAndMovesContainer>
                    <TypesContainer>
                        {selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type)=>{
                            return <p key={type.type.name}>{type.type.name}</p>
                        })
                    }
                    </TypesContainer>
                </TypeAndMovesContainer>
                <MovesContainer>
                    <TitleContainer>Principais Ataques</TitleContainer>
                    {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move,index)=>{
                            return (
                            index < 5 && <p key={move.move.name}>{move.move.name}</p>)
                        })
                    }
                </MovesContainer>
            </PokeInfosContainer>




        </div>
    );
};

export default DetailsPage
