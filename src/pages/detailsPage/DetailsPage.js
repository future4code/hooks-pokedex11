import React from "react"
import { goBack } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"

const DetailsPage = () => {
    const navigate = useNavigate()
    return (
        <>Pokémon DetailsPage
        <button onClick={() => goBack(navigate)} >voltar</button>
        </>
        
    )
}

export default DetailsPage