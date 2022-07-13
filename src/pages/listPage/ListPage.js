import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import pokelist from "../../img/pokelist.png"
import { Logo } from "../homePage/HomePageStyled"
import picachu from "../../img/pokemon.png"
import { goBack } from "../../routes/Coordinator"
import { HeaderListPage, ButtonList} from "../listPage/ListPageStyled"
import { PokeCard } from "../../components/PokeCard"
import GlobalStateContext from "../../global/GlobalStateContext"

const ListPage = () => {
    const navigate = useNavigate()
    const { pokedex } = useContext(GlobalStateContext)

    return (
        <div>
            < HeaderListPage>
                <ButtonList onClick={() => goBack(navigate)} ><img src={pokelist} alt="picachuHeader" /></ButtonList>
                <Logo src={picachu} />
            </ HeaderListPage>
            <div>
                {
                    pokedex && pokedex.map((poke) => {
                        return <PokeCard  isPokedex key={poke.name} pokemon={poke} />

                    })
                }
            </div>
        </div>

    )
}

export default ListPage