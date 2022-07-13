import React, { useContext } from "react"

import { Card, ImagePokemon, Tittle } from "./PokeCardStyled"
import { ButtonsAndName , Buttons} from "./PokeCardStyled"

import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../routes/Coordinator"
import GlobalStateContext from "../global/GlobalStateContext"





export const PokeCard = ({pokemon,isPokedex}) => {
    const navigate = useNavigate()
    const {pokemons,setPokemons,pokedex,setPokedex} = useContext(GlobalStateContext)
    
    const addPokedex = () => {
        const pokeIndex = pokemons.findIndex(
          (item) => item.name === pokemon.name
        );
        const newPokemonsList = [...pokemons];
        newPokemonsList.splice(pokeIndex, 1);
        const orderedPokemons = newPokemonsList.sort((a, b) => {
          return a.id - b.id;
        });
    
        const newPokedexList = [...pokedex, pokemon];
        const orderedPokedex = newPokedexList.sort((a, b) => {
          return a.id - b.id;
        });
    
        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons);
      };
    
      const removPokedex = () => {
        const pokeIndex = pokedex.findIndex(
          (item) => item.name === pokemon.name
        );
    
        const newPokedexList = [...pokedex];
        newPokedexList.splice(pokeIndex, 1);
        const orderedPokedex = newPokedexList.sort((a, b) => {
          return a.id - b.id;
        });
    
        const newPokemonsList = [...pokemons, pokemon];
        const orderedPokemons = newPokemonsList.sort((a, b) => {
          return a.id - b.id;
        });
    
        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons);
      };
    
    

    return (
        <>
            <Card>
                <ButtonsAndName>
                    <Tittle>{pokemon.name}</Tittle>
                    <Buttons onClick={isPokedex ? removPokedex : addPokedex}>
                      {isPokedex ? "Remover" : "Adicionar" }    
                    </Buttons>                  
                    <Buttons onClick={()=>goToDetailsPage(navigate,pokemon.name)} >Detalhes</Buttons>                 
                </ButtonsAndName>
                <ImagePokemon src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name}/>
            </Card>
        </>
    )
}