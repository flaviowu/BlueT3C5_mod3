export function getGameById(id, lista){
    return lista.filter((game) => game.id === id)
}