import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 25vh;
  background: ${backgroundCard};
`;

export const StatsContainer = styled.div`
  background: ${backgroundCard};
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  background: ${backgroundCard};
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const HeaderDetailPage = styled.div`
height: 30vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #00bcd4;
margin-top: -50px;
position: fixed;

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