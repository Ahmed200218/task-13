import {Detailsid , details} from "./details.module.js";
export let home = document.getElementById("home");
export let loading = document.getElementById("loading");
async function displaygames(category) {
    let container = "";
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '17f11f865bmsh86ce45d8948694bp19eeabjsn87205f4212d7',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    loading.classList.remove("d-none")
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    const result = await response.json();
    for (let i = 0; i < result.length; i++) {
        container += `      <div class="col">
                <div id="card${i}" data-id="${result[i].id}" class="card  h-100 bg-transparent" role="button" "="">
       <div class=" card-body">
                    <figure class="position-relative fig-game h-var">
                        <img class="card-img-top object-fit-cover h-100"
                            src=${result[i].thumbnail}>

                    </figure>

                    <figcaption>

                        <div class="hstack justify-content-between">
                            <h3 class="h6 small color-white">${result[i].title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                        </div>

                        <p class="card-text small text-center opacity-50 color-white">
                        ${result[i].short_description.substring(0, 80)}
                        </p>

                    </figcaption>
                </div>

                <footer class="card-footer small hstack justify-content-between">

                    <span class="badge badge-color">${result[i].genre}</span>
                    <span class="badge badge-color">${result[i].platform}</span>

                </footer>
            </div>
        </div>`;
        
    }
    let gamesd = document.getElementById("gamesd");
    gamesd.innerHTML = container;
    loading.classList.add("d-none");
    for (let i = 0; i < result.length; i++) {
        let x = document.getElementById(`card${i}`);
        x.addEventListener("click", function (e) {
 let mdetails= new details( x.getAttribute("data-id") );
 mdetails.ddetails();
 Detailsid.classList.remove("d-none")
 home.classList.add("d-none")
        })
    }
}


export class ui {
    constructor(category) {
        this.category = category;
    }
    ddata() {
        displaygames(`${this.category}`);
    }
}




