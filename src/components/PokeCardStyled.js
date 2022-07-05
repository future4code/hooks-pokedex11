import styled from "styled-components";

export const Card = styled.div`
box-sizing: border-box;
height: 180px;
width: 390px;
display: flex;
gap: 20px;
margin: 0 auto;
background-color: #27cb50;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
margin-top: 10px;
margin-bottom: 10px;
&:hover {
    background-color: red;
}
`
export const ImagePokemon = styled.img`
margin-top: 5px;
margin-right: 5px;
max-width: 100%;
display: block;
height: 160px;
width: 160px;
&:hover {
    -webkit-transform: scale(1.4);
        -ms-transform: scale(1.4);
        transform: scale(1.4);
}
`
export const ButtonsAndName = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 8px;
`
export const Tittle = styled.h2`
color: white;
align-self: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-transform: capitalize;
`

export const Buttons = styled.button`
background-color: transparent;
border-radius: 10px;
border: 2px solid white;
color: white;
font-size: large;
cursor: pointer;
&:hover{
    background-color: #10193c;
    box-shadow:
                1px 1px black,
                2px 2px black,
                3px 3px black;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
}
`




