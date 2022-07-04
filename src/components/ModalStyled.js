import styled from "styled-components"

export const ModalStyled = styled.div`
width:100%;
height:100vh;
position: absolute;
top:0;
left:0;
z-index:100; 
background-color:rgba(0,0,0,0.8);
display:flex;
justify-content:center;
align-items:center;
`
export const Container = styled.div`
background-color:#ef233c;
width:40vw;
height:95vh;
border-radius: 10px;
display: flex;
flex-direction: column;
`
export const PokedexScreen = styled.div`
width: 30vw;
height: 20vh;
background-color: #f3f4f6;
border: 10px solid #c2c3c4;
display: flex;
align-self: center;
`
export const PokemonImg = styled.img`
height: 100px;
width: 100px;
`

export const Moves = styled.div`
box-sizing: border-box;
height: 30vh;
width: 1;
border: 1px black solid;
`
export const Type = styled.div`
box-sizing: border-box;
height: 30vh;
width: 1;
`
export const Stat = styled.div`
box-sizing: border-box;
height: 30vh;
width: 1;
border: 1px black solid;
`
