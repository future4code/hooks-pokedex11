import axios from "axios"
import React, { useEffect, useState } from "react"
import { ModalStyled } from "./ModalStyled"
import { Container } from "./ModalStyled"


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
                <p>{stats.stat.name}</p>
                <p>{stats.base_stat}</p>
            </div>
        )
    })

    const pokemonMoves = detailsPokemon.moves && detailsPokemon.moves.map((moves, index) => {
        if (index < 3) {
            return <p key={index}>{moves.move.name}</p>
        }

    })

    const pokemonTypes = detailsPokemon.types && detailsPokemon.types.map((types, index) => {
        return (
            <div key={index}>
                {types.type.name}
            </div>
        )
    })


    return (
        <ModalStyled id={id} onClick={handleOutSideClick}>
            <Container>
                <div>{children}</div>
                {detailsPokemon && detailsPokemon.sprites && (<div>
                    <img src={detailsPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                    <img src={detailsPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
                </div>)}
                <div>Detalhes</div>
                <button onClick={onClose} >fechar</button>
                <h1>status</h1>
                {pokemonStats}
                <h2>movimentos</h2>
                {pokemonMoves}
                <h2>tipo</h2>
                {pokemonTypes}
            </Container>
        </ModalStyled>
    )
}