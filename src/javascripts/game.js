import "bootstrap"
import { games } from "./games"

for(let g of games){
    let ghtml =`hey`
    if(document.getElementById(g.id)){
        ghtml = `
        <h1>Description</h2>
        <p class="description">${g.description}</p>
        <h1>Price</h2>
        <p class="price">$${g.price}</p>
        <h1>In Stock</h2>
        <p class="inStock">${g.inStock}</p>
        <h1>Critic Rating</h2>
        <p class="rating">${g.rating} / 5</p>
        <h1>Reviews</h2>
        <p class="reviews">${g.reviews}</p>
        <h1>Review Rating</h2>
        <p class="reviewRating">${g.reviewRating} / 5</p>
        <h1>Console Compatibility</h2>
        <p class="console">${g.console}</p>
        
        `

        document.querySelector(".content").innerHTML += ghtml
        document.querySelector(".insim").innerHTML += `<img src="${g.image}" alt="${g.name} image">`
    }
    
}