const lista = [
    {
        id: 1,
        titulo: "Mega Man II",
        ano: "1991",
        imgUrl: "https://www.mobygames.com/images/covers/l/77923-mega-man-ii-game-boy-front-cover.jpg",
        youtubeId: "https://www.youtube.com/watch?v=UYxYxesiqAU"
    },
    {
        id: 2,
        titulo: "Mega Man III",
        ano: "1992",
        imgUrl: "https://www.mobygames.com/images/covers/l/236937-mega-man-iii-game-boy-front-cover.jpg",
        youtubeId: "https://www.youtube.com/watch?v=-K6Qfg5yU_w"
    },
    {
        id: 3,
        titulo: "Mega Man IV",
        ano: "1993",
        imgUrl: "https://www.mobygames.com/images/covers/l/183228-mega-man-iv-game-boy-front-cover.jpg",
        youtubeId: "https://www.youtube.com/watch?v=jnOjVsOA6rE"
    },
    {
        id: 4,
        titulo: "Mega Man V",
        ano: "1994",
        imgUrl: "https://www.mobygames.com/images/covers/l/67245-mega-man-v-game-boy-front-cover.jpg",
        youtubeId: "https://www.youtube.com/watch?v=a_Fy16mEsOk"
    }
]

listaJogos = [...lista];

const getId = (url) => {
    return url.split('=')[1]
}

console.log(getId(listaJogos[3].youtubeId))
    
    //   <iframe
    //     width="230"
    //     src={`https://www.youtube.com/embed/${getId(props.youtubeId)}`}
    //     title="YouTube video player"
    //   ></iframe>