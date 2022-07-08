import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { goToListPage } from "../../routes/Coordinator"
import { PokeCard } from "../../components/PokeCard"
import { ContainerHomePage, HeaderHomePage, ButtonList } from "./HomePageStyled"
import picachu from "../../img/pokemon.png"
import pokelist from "../../img/pokelist.png"
import { Logo } from "./HomePageStyled"
import GlobalStateContext from "../../global/GlobalStateContext"


const HomePage = () => {
    const navigate = useNavigate()
    
    const {pokemons} = useContext(GlobalStateContext)
   

   

    const onScreen = pokemons && pokemons.map((poke) => {
        return (
            <PokeCard key={poke.name} pokemon={poke}/>
        )
    })

    return (
        <>
            <HeaderHomePage>
                <ButtonList onClick={() => goToListPage(navigate)} ><img src={pokelist} alt="picachuHeader" /></ButtonList>
                <Logo src={picachu} />
            </HeaderHomePage>
            <ContainerHomePage>
                {onScreen}
                
            </ContainerHomePage>
        </>
    )
}


export default HomePage