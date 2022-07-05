import styled from "styled-components"

export const ModalStyled = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index:100; 
position: fixed;
top: 0;
left: 0;
bottom: 0;
padding-left: 65px;
padding-top: 40px;
`

export const Container = styled.div`
box-sizing: border-box;
background-color:#ef233c;
width:90vw;
height:90vh;
border-radius: 10px;
display: grid;
grid-template-columns: 47vw 43vw;
`
export const PokeImgDetais = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
flex-direction: column;
gap: 10px;
border-right: 20px solid #b0b0b0;
`
export const ScreenImg = styled.div`
box-sizing: border-box;
background-color: #f7f7f7;
border-radius: 10px;
border-top: 25px solid #d0d1d2;
border-right: 25px solid #848586;
border-left: 25px solid #b0b0b0;
border-bottom: 35px solid #a6a7a8;
width: 40vw;
height: 65vh;
display: flex;
align-items: center;
justify-content: space-around;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

export const PokemonImg = styled.img`
box-sizing: border-box;
height: 200px;
width: 200px;
`
export const Dots = styled.div`
box-sizing: border-box;
height: 12vh;
width: 47vw;
display: flex;
align-items: center;
justify-content: start;
gap: 30px;
margin-left: 50px;
`
export const BlueDot = styled.div`
box-sizing: border-box;
 height: 50px;
  width: 50px;
  background-color: #06fbfc;
  border-radius: 50%;
  border: 8px solid #e8e9ea;
  box-shadow: 5px 5px 10px;
`
export const RedDot = styled.div`
box-sizing: border-box;
 height: 30px;
 width: 30px;
 background-color: red;
 border-radius: 50%;
 border: 2px solid black;
 box-shadow: 5px 5px 10px;
 `
export const YellowDot = styled.div`
box-sizing: border-box;
 height: 30px;
 width: 30px;
 background-color: yellow;
 border-radius: 50%;
 border: 2px solid black;
 box-shadow: 5px 5px 10px;
 `
 export const GreenDot = styled.div`
 box-sizing: border-box;
  height: 30px;
   width: 30px;
   background-color: green;
   border-radius: 50%;
   border: 2px solid black;
   box-shadow: 5px 5px 10px;
 `
export const Type = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
background-color: white;
border-radius: 10px;
height: 40px;
`

export const PokeDetails = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`
export const Stat = styled.div`
box-sizing: border-box;
height: 55vh;
width: 40vw;
border: 1px black solid;
background-color: #30fa06;
border-radius: 10px;
`
export const Moves = styled.div`
box-sizing: border-box;
height: 30vh;
width: 40vw;
border: 1px black solid;
background-color: #30fa06;
border-radius: 10px;
`
export const ButtonClose = styled.button`
position: absolute;
margin-left: 585px;
margin-bottom: 585px;
box-sizing: border-box;
 height: 40px;
 width: 40px;
 font-size: larger;
 background-color: red;
 border-radius: 50%;
 border: 2px solid black;
 box-shadow: 5px 5px 10px;
 cursor: pointer;
`
export const Tittles = styled.h1`
margin-left: 20px;
`
export const ExplanationStatus = styled.h2`
margin-left: 20px;
line-height: 25px;
font-family: 'Courier New', Courier, monospace;
`
export const ExplanationMoves = styled.h2`
margin-left: 20px;
line-height: 15px;
font-family: 'Courier New', Courier, monospace;
`



































