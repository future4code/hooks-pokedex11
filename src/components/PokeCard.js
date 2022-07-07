import React, { useEffect, useState } from "react"
import axios from "axios"
import { Card, ImagePokemon, Tittle } from "./PokeCardStyled"
import { ButtonsAndName , Buttons} from "./PokeCardStyled"
import { Modal } from "./Modal"



export const PokeCard = (props) => {
    const [isModalVisible , setIsModalVisible] = useState(false)
    const [pokeUrl, setPokeUrl] = useState("")

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((resp) => setPokeUrl(resp.data.sprites.other.dream_world.front_default))
            .catch((error) => console.log(error))
    }, [pokeUrl])

    const SaveTokenPokemon = (pokemon) => {
        localStorage.setItem("pokemon", pokemon)
        setIsModalVisible(true)
    }

    return (
        <>
            <Card>
                <ButtonsAndName>
                    <Tittle>{props.name}</Tittle>
                    <Buttons onClick={() => props.addToList(props.name)} >Add Pokédex</Buttons>                
                    <Buttons onClick={() =>SaveTokenPokemon(props.name)} >Detalhes</Buttons>
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}/> : null}                    
                </ButtonsAndName>
                <ImagePokemon src={pokeUrl} alt={"pokemon"}/>
            </Card>
        </>
    )
}