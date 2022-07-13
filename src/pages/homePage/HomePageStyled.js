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
height: 250px;
margin-top: -16px;
`
export const ButtonList = styled.button`
background-image: url(${props => props.img});
background-color: #00bcd4;
border: none;
height: 10px;
width: 10px;
align-self: flex-start;
position: absolute;
margin-left: -1250px;
margin-top: 75px;
cursor: pointer;
&:hover {
  -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
}
`
export const ButtonAdd = styled.button`
position: relative;
margin-bottom: 50px;
margin-right: 60px;
margin-top: 45px;
  background-color: #0930fa;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  box-sizing: border-box;
  border: 5px solid #0930fa;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;
  font-family: sans-serif;


&:not(:disabled):hover,
&:not(:disabled):focus {
  outline: 0;
  background: #fad309;
  color: black;
  border: 5px solid black;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

&:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}
`
