import axios from "axios"
import React, { useEffect, useState } from "react"
import { ModalStyled } from "./ModalStyled"
import { Container } from "./ModalStyled"
import { PokemonImg, Stat, Moves, Type } from "./ModalStyled"
import { PokeImgDetais, PokeDetails, ScreenImg, Dots , ButtonClose , Tittles , ExplanationStatus , ExplanationMoves} from "./ModalStyled"
import { BlueDot, RedDot, YellowDot, GreenDot } from "./ModalStyled"



export const Modal = ({ id = "modal", onClose = () => { }, children }) => {
    const [detailsPokemon, setDetailsPokemon] = useState([])
    const handleOutSideClick = (event) => {
        if (event.target.id === id) onClose()
    }

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem("pokemon")}`)
            .then((resp) => setDetailsPokemon(resp.data))
    })


    const pokemonStats = detailsPokemon.stats && detailsPokemon.stats.map((stats, index) => {
        return (
            <div key={index}>
                <ExplanationStatus>{`${stats.stat.name}:`}{stats.base_stat}</ExplanationStatus>
            </div>
        )
    })

    const pokemonMoves = detailsPokemon.moves && detailsPokemon.moves.map((moves, index) => {
        if (index < 3) {
            return <ExplanationMoves key={index}>{moves.move.name}</ExplanationMoves>
        }

    })

    const pokemonTypes = detailsPokemon.types && detailsPokemon.types.map((types, index) => {
        return (
            <div key={index}>
                <h3>{types.type.name}</h3>
            </div>
        )
    })


    return (
        <ModalStyled id={id} onClick={handleOutSideClick}>
            <Container>
                <PokeImgDetais>
                    <Dots>
                        <BlueDot />
                        <RedDot />
                        <YellowDot />
                        <GreenDot />
                    </Dots>
                    <ScreenImg>
                        {detailsPokemon && detailsPokemon.sprites && (<div>
                            <PokemonImg src={detailsPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default} />
                            <PokemonImg src={detailsPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />
                        </div>)}
                    </ScreenImg>
                    <Type>
                        <h2>Tipo:</h2>
                        {pokemonTypes}
                    </Type>
                </PokeImgDetais>
                <PokeDetails>
                <ButtonClose onClick={onClose} >X</ButtonClose>
                    <Stat>
                        <Tittles>Status</Tittles>
                        {pokemonStats}
                    </Stat>
                    <Moves>
                        <Tittles>Movimentos</Tittles>
                        {pokemonMoves}
                    </Moves>
                </PokeDetails>
            </Container>
        </ModalStyled>
    )
}