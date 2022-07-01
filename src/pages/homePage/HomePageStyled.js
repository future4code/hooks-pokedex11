import styled from "styled-components"

export const HeaderHomePage = styled.div`
height: 15vh;
width: 98.5vw;
display: flex;
justify-content: center;
align-items: center;
`
export const ContainerHomePage = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
background-color: #fad309;
`
export const Logo = styled.div`
background-image: url(${props => props.img});
width: 500px;
height: 500px;
`