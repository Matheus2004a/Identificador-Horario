function loadPage() {
    const body = document.querySelector("body")
    const messageDay = document.querySelector("#msg")
    const imgDay = document.querySelector("#img-day")
    const date = new Date()
    const hour = date.getHours()
    messageDay.innerHTML = `Agora são ${hour} horas`

    if (hour >= 5 && hour < 12) {
        imgDay.src = "img/Manha.png"
        body.style.backgroundColor = "#fdb902"
    }
    else if (hour >= 12 && hour < 18){
        imgDay.src = "img/Tarde.png"
        body.style.backgroundColor = "#d77625"
    }
    else {
        imgDay.src = "img/Noite.png"
        body.style.backgroundColor = "#414141"
    }
}