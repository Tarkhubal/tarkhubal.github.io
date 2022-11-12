const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/944eb371a4.js";

document.body.appendChild(script);

document.getElementById("cards").onmousemove = e => {
    for (
        const card of document.getElementsByClassName("card")
    ) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}