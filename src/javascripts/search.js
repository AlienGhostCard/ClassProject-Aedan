import "bootstrap"
import { games } from "./games"

for(let g of games){
    let ghtml = `
    <div class="col" id="${g.id}">
    <a href="./gamehtml/${g.href}">
        <img src="${g.image}" alt="${g.name} image" class="img-thumbnail game-img">
    </a>
    
    </div>
    `
    
    document.querySelector(".res").innerHTML += `
    <a href="./gamehtml/${g.href}" id="${g.id}">
        <img src="${g.image}" alt="${g.name} image" class="img-thumbnail game-img">
    </a>`
}

function searchGame(event) {
    event.preventDefault()
    
    let input = document.querySelector('[type="search"]').value || ""
    let count = 0

    for(let g of games){
        
        if(g.name.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.getElementById(g.id).classList.add("d-none")
            
        } else {
            document.getElementById(g.id).classList.remove("d-none")
            count ++
        }
    }

    if(count == 0){
        document.querySelector(".nores").innerHTML = "No results found"
    }
    else {
        document.querySelector(".nores").innerHTML = ""
    }
}

document.querySelector("button").onclick = searchGame
document.querySelector('[type="search"]').onkeyup = searchGame
document.querySelector("form").onsubmit = searchGame

document.querySelector('[type="search"]').addEventListener('input', searchGame);
document.querySelector("form").addEventListener('submit', searchGame);