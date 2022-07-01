import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToListPage } from "../../routes/Coordinator"
import axios from "axios"
import { PokeCard } from "../../components/PokeCard"
import { ContainerHomePage, HeaderHomePage } from "./HomePageStyled"
import picachu from "../../img/pokemon.png"
import { Logo } from "./HomePageStyled"



const HomePage = () => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        showArray()
    }, [])

    const showArray = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=24`)
            .then((resp) => setPokemon(resp.data.results))
            .catch((error) => console.log(error))
    }

  


    const onScreen = pokemon && pokemon.map((poke) => {
        return (
            <PokeCard key={poke.url}
                name={poke.name}
            />
        )
    })

    return (
        <>
            <HeaderHomePage>
                <button onClick={() => goToListPage(navigate)} >Lista</button>
                <Logo img={picachu} />
            </HeaderHomePage>
            <ContainerHomePage>
                {onScreen}
            </ContainerHomePage>

        </>
    )
}


export default HomePage