import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
  }

  #root,body,html{
    min-width:100vw;
    min-height:100vh;
    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;
    

    &::-webkit-scrollbar{
    width:0;
    height:0;
  }
}


--fighting:white
--flying:black
--poison:#e9c46a
--ground:#f4a261
--rock:#e76f51
--bug:#8ecae6
--ghost:#219ebc
--steel:#023047
--fire:#ffb703
--water:#fb8500
--grass:#e63946
--electric:#a8dadc
--psychic:#457b9d
--ice:#1d3557
--dragon:#ff99c8
--dark:#fcf6bd
--fairy:#d0f4de
--unknown:#a9def9
--shadow:#e4c1f9
`


export default GlobalStyle