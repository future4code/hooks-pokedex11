
export const goToDetailsPage = (navigate,name) => {
    navigate(`/Detalhes/${name}`)
}

export const goToListPage = (navigate) => {
    navigate("/Lista")
}

export const goBack = (navigate) => {
    navigate(-1)
}