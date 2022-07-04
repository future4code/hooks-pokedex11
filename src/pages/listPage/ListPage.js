import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PokeCard } from "../../components/PokeCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import { goBack } from "../../routes/Coordinator"

const ListPage = () => {
    const navigate = useNavigate()
    const {pokemons} = useContext(GlobalStateContext)
    return (
        <>
        {
            pokemons.map((poke)=> {
                return<PokeCard key={poke.name} pokemon={poke}/>

            })
        }
        <button onClick={() => goBack(navigate)} >voltar</button>
        </>
    )
}

export default ListPage