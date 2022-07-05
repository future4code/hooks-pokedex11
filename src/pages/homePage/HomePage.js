import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToListPage } from "../../routes/Coordinator"
import axios from "axios"
import { PokeCard } from "../../components/PokeCard"
import { ContainerHomePage, HeaderHomePage, ButtonList, ButtonAdd } from "./HomePageStyled"
import picachu from "../../img/pokemon.png"
import pokelist from "../../img/pokelist.png"
import { Logo } from "./HomePageStyled"


const HomePage = () => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState([])
    const [morePokemon, setMorePokemon] = useState(20)
    const [list , setList] = useState([])

    const addToList = (name) => {
        const listCopy = [...list , name]
        setList(listCopy)
    }
    
    console.log(list)

    useEffect(() => {
        showArray()
    }, [() => showArray()])

    const addPokemon = () => {
        const Add = morePokemon + 9
        setMorePokemon(Add)

    }

    const showArray = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=${morePokemon}`)
            .then((resp) => setPokemon(resp.data.results))
            .catch((error) => console.log(error))
    }

    const onScreen = pokemon && pokemon.map((poke) => {
        return (
            <PokeCard key={poke.url} name={poke.name} addToList={addToList}/>
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
                <ButtonAdd onClick={() => addPokemon()}>Mais Pokémons</ButtonAdd>
            </ContainerHomePage>


        </>
    )
}


export default HomePage