import {BrowserRouter , Routes , Route} from "react-router-dom"
import HomePage from "../pages/homePage/HomePage"
import ListPage from "../pages/listPage/ListPage"
import DetailsPage from "../pages/detailsPage/DetailsPage"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path = "/Detalhes" element = {<DetailsPage/>}/>
            <Route path = "/Lista" element = {<ListPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router