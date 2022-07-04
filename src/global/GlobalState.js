import axios from "axios";
import React, {useEffect, useState} from "react";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const [pokemonNames,setPokemonNames] = useState([])

    useEffect(()=>{
        getPokemonNames()
    },[])
    useEffect(()=>{

    },[pokemonNames])
    
    const getPokemonNames = () => {
        axios.get(`${BASE_URL}/pokemon`)
        .then((response)=>{
            setPokemonNames(response.data.results)
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    return(
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState