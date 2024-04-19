import "bootstrap"
import { points } from "./points"

for(let p of points){
    let p_html = ``
    if (p.id === 1 && document.getElementById("pone")){
        p_html = `
            <h1 class="name">${p.name}</h1>
            <p class="loc">${p.loc}</p>
            <p class="hours">${p.hours}</p>
            <p class="hiring">${p.hiring}</p>
            <p class="description">${p.description}</p>
            <p class="phone">${p.phone}</p>`
        document.getElementById("pone").innerHTML = p_html
    }
    else if (p.id === 2 && document.getElementById("ptwo")){
        p_html = `
            <h1 class="name">${p.name}</h1>
            <p class="loc">${p.loc}</p>
            <p class="hours">${p.hours}</p>
            <p class="hiring">${p.hiring}</p>
            <p class="description">${p.description}</p>
            <p class="phone">${p.phone}</p>`
        document.getElementById("ptwo").innerHTML = p_html
    }
    else if (p.id === 3 && document.getElementById("pthree")){
        p_html = `
            <h1 class="name">${p.name}</h1>
            <p class="loc">${p.loc}</p>
            <p class="hours">${p.hours}</p>
            <p class="hiring">${p.hiring}</p>
            <p class="description">${p.description}</p>
            <p class="phone">${p.phone}</p>`
        document.getElementById("pthree").innerHTML = p_html
    }
}