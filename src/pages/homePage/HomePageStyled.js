import styled from "styled-components"

export const HeaderHomePage = styled.div`
height: 30vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #00bcd4;
margin-top: -50px;
position: fixed;
`
export const ContainerHomePage = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
background-color: #fad309;
margin-top: 145px;
`
export const Logo = styled.img`
background-repeat: no-repeat;
background-image: url(${props => props.img});
padding-top: 80px;
width: 300px;
height: 170px;
margin-top: -12px;
`