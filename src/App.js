import Router from "./routes/Routes";
import GlobalStyle from "./GlobalStyled";
import GlobalState from "./global/GlobalState";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  )
}

export default App;
