import React from "react"
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/Coordinator"

const ListPage = () => {
    const navigate = useNavigate()
    return (
        <>Pokémon ListPage
        <button onClick={() => goBack(navigate)} >voltar</button>
        </>
    )
}

export default ListPage