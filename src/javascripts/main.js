//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { news } from "./news"

function randomNews() {
    document.getElementById("newsD").innerHTML = "Loading..."
    document.getElementById("newsD").innerHTML = news[Math.floor(Math.random() * news.length)].news
}

randomNews()

document.getElementById("news").addEventListener("click", randomNews)