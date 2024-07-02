import { home } from "./ui.module.js"

export let Detailsid = document.getElementById("Detailsid")





async function getdetails(id) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '17f11f865bmsh86ce45d8948694bp19eeabjsn87205f4212d7',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    loading.classList.remove("d-none")
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const result = await response.json();
    Detailsid.innerHTML = `<div class="container">
            <header class="hstack justify-content-between">
                <h1 class="text-center h3 py-4 color-white">Details Game</h1>
                <button class="btn-close btn-close-white" id="btnClose"></button>
            </header>
            <div class="row g-4" id="detailsContent">
                <div class="col-md-4">
                    <img src=${result.thumbnail} class="w-100" alt="image details">
                </div>
                <div class="col-md-8">
                    <h3 class="color-white">Title: ${result.title}</h3>
                    <p class="color-white">Category: <span class="badge text-bg-info "> ${result.genre}</span> </p>
                    <p class="color-white">Platform: <span class="badge text-bg-info "> ${result.platform}</span> </p>
                    <p class="color-white">Status: <span class="badge text-bg-info "> ${result.status}</span> </p>
                    <p class="small color-white">${result.description}</p>
                    <a class="btn btn-outline-warning color-white" target="_blank"
                        href=${result.game_url}>Show Game</a>
                </div>

            </div>
        </div>`;
    loading.classList.add("d-none");
    let btnClose = document.getElementById("btnClose")
btnClose.addEventListener("click", function (e) {
    Detailsid.classList.add("d-none")
    home.classList.remove("d-none")
})

}
export class details {
    constructor(id) {
        this.id = id;
    }
    ddetails() {
        getdetails(`${this.id}`);
    }
}

